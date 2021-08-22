import React, { useState } from "react";
import PropTypes from "prop-types";
import {Formik, Form, FieldArray, Field} from "formik";

import TableTitle from "./TableTitle";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import Table from "./Table";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import RegularInput from "../Inputs/RegularInput";


export default function SlotTable({ schedule }) {

  const [isEditing, setIsEditing] = useState(false);
  const handleEditMode = () => {
    setIsEditing(!isEditing);
  }

  const TimeTableCell = ({value}) => {
    return (
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <span
        className={"text-xs font-semibold inline-block uppercase rounded-full uppercase last:mr-0 mr-1  text-emerald-500"}>
          {value}
      </span>
      </td>
    )
  }

  return (

      <div
        className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded bg-white mr-4"
      >
        <TableTitle
          titleText={schedule.day}
          showButton={true}
          buttonText="Ubah"
          buttonColor={schedule.editable ? "yellow" : null}
          handleButtonClick={handleEditMode}
          disableButton={!schedule.editable || !schedule.open}
          />
          <Table key={schedule.id}>

              <TableHeader>
                <TableHead title="Jam"/>
                <TableHead title="Slot"/>
              </TableHeader>
              <TableBody>
                <Formik
                  initialValues={{
                    slot: schedule.timeslot.slot
                  }}
                >
                <FieldArray
                  name="slot"
                  render={ () => (
                      schedule.timeslot.slot.map((each, index) => {
                        const val = `${each.occupied}/${each.totalSlot}`
                        return (
                          <TableRow key={each.name}>
                            <TimeTableCell value={each.name}/>
                            { isEditing ? <RegularInput name={`slot.${[index]}.totalSlot`} inputType="number" showLabel={false}/> : <TableCell value={val}/> }
                          </TableRow>
                        );
                      })
                    )
                  }
                />
                </Formik>
              </TableBody>
          </Table>
      </div>
  );
}

SlotTable.defaultProps = {
  color: "light"
}

SlotTable.prototype = {
  color: String
}

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
      <Formik
          initialValues={{
              slot: schedule.timeslot.slot,
              open: schedule.open
          }}
          onSubmit={ values => {
              alert(JSON.stringify(values, null, 2));
          }}
  >
          <Form>
      <div
        className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded bg-white mr-4"
      >
        <TableTitle
          titleText={schedule.day}
          showButton={true}
          buttonText={!isEditing ? "Simpan" : "Ubah"}
          buttonColor={schedule.editable ? "yellow" : null}
          handleButtonClick={handleEditMode}
          disableButton={!schedule.editable || !schedule.open}
          buttonType={!isEditing ? "submit" : "button"}
          >
            {/*TODO : kalo ubah, ganti jadi dropdown option*/}

            <div className="relative inline-flex items-center">
                <label htmlFor="open" className="px-4 py-2 text-start">Status</label>
                {
                    !isEditing
                       ? <p>{`${schedule.open ? "Buka" : "Tutup"}`}</p>
                       : <Field component="select" name="open" id="open" className="text-xs border border-gray-300 rounded text-gray-600 h-8 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option value={true}>Buka</option>
                            <option value={false}>Tutup</option>
                        </Field>
                }
            </div>
        </TableTitle>
          <Table key={schedule.id}>
              <TableHeader>
                <TableHead title="Jam"/>
                <TableHead title="Slot"/>
              </TableHeader>
              <TableBody>
                <FieldArray
                  name="slot"
                  render={ () => (
                      schedule.timeslot.slot.map((each, index) => {
                        const val = `${each.occupied}/${each.totalSlot}`
                        return (
                          <TableRow key={each.name}>
                            <TimeTableCell value={each.name}/>
                            { isEditing ? <RegularInput name={`slot.${[index]}.totalSlot`} inputType="number" showLabel={false} size="small"/> : <TableCell value={val}/> }
                          </TableRow>
                        );
                      })
                    )
                  }
                />

              </TableBody>
          </Table>
      </div>
          </Form>
      </Formik>
  );
}

SlotTable.defaultProps = {
  color: "light"
}

SlotTable.prototype = {
  color: String
}

import React, { useState } from "react";
import PropTypes from "prop-types";
import {Formik, Form, FieldArray, Field} from "formik";
import {Formik, Form, FieldArray, Field} from "formik";
import * as Yup from 'yup';

import TableContainer from "./TableContainer";
import TableTitle from "./TableTitle";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import Table from "./Table";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import RegularInput from "../Inputs/RegularInput";

import { useMutation } from "@apollo/client";
import { UPDATE_SCHEDULE } from "../../services/graphql/mutations/uddMutations";
import { GET_UDD_SCHEDULE } from "../../services/graphql/queries/uddQueries";

export default function SlotTable({ schedule }) {

  const [isEditing, setIsEditing] = useState(false);

  const handleEditMode = () => {
    setIsEditing(!isEditing);
  }

  const [updateSchedule, { loading, error, data }] = useMutation(UPDATE_SCHEDULE);

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
              timeslot: schedule.timeslot,
              open: schedule.open
          }}
          // validationSchema={
          //     Yup.object().shape({
          //       timeslot: Yup.object().shape(
          //           Yup.array().of(
          //               Yup.object().shape({
          //                   name: Yup.string(),
          //                   occupied: Yup.number(),
          //                   totalSlot: Yup.number().moreThan(Yup.ref('occupied'))
          //               })
          //           )
          //       ),
          //     })
          // }
          onSubmit={ values => {
              // alert(JSON.stringify(values, null, 2));
              const { timeslot, open } = values;
              const { id, day } = schedule;
              updateSchedule({
                  variables: {
                      scheduleId: id,
                      open: JSON.parse(open),
                      timeslot: timeslot,
                  },
                  refetchQueries: [{query: GET_UDD_SCHEDULE }]
              })
          }}
  >
          <Form>
              <div className="px-3">
                  <div
                    className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded bg-white mr-4"
                  >
                    <TableTitle
                      titleText={schedule.day}
                      showButton={true}
                      buttonText={isEditing ? "Simpan" : "Ubah"}
                      buttonColor={schedule.editable ? "yellow" : null}
                      handleButtonClick={handleEditMode}
                      disableButton={!schedule.editable}
                      buttonType={!isEditing ? "submit" : "button"}
                      >
                        <div className="flex flex-wrap w-full justify-between mt-2">
                            <div className="flex w-1/2 justify-start">
                                {
                                    !isEditing
                                        ? <p className={(schedule.open ? "text-emerald-500" : "text-red-500") + " font-semibold"}>{`${schedule.open ? "Buka" : "Tutup"}`}</p>
                                        : <label htmlFor="open" className="text-start">Status</label>
                                }
                            </div>
                            <div className="flex w-1/2 justify-end">
                                {
                                    !isEditing
                                        ? <></>
                                        : <Field component="select" name="open" id="open" className="text-xs border border-gray-300 rounded text-gray-600 h-8 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                            <option value={true}>Buka</option>
                                            <option value={false}>Tutup</option>
                                        </Field>
                                }
                            </div>
                        </div>
                    </TableTitle>
                      <Table key={schedule.id}>
                          <TableHeader>
                            <TableHead title="Jam"/>
                            <TableHead title="Slot"/>
                          </TableHeader>
                          <TableBody>
                            <FieldArray
                              name="timeslot"
                              render={ () => (
                                  schedule.timeslot.slot.map((each, index) => {
                                    const val = `${each.occupied}/${each.totalSlot}`
                                    return (
                                      <TableRow key={each.name}>
                                        <TimeTableCell value={each.name}/>
                                        { isEditing
                                            ?   <td>
                                                <RegularInput name={`timeslot.slot.${[index]}.totalSlot`} inputtype="number" showLabel={false} size="small"/>
                                                </td>
                                            : <TableCell value={val}/> }
                                      </TableRow>
                                    );
                                  })
                                )
                              }
                            />

                          </TableBody>
                      </Table>
                  </div>
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

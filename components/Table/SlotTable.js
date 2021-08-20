import React, { useState } from "react";
import PropTypes from "prop-types";

import TableContainer from "./TableContainer";
import TableTitle from "./TableTitle";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import Table from "./Table";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import RegularInput from "../Inputs/RegularInput";

export default function SlotTable({ allSchedule }) {

  // console.log("===allSchedule", allSchedule);
  const days = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thrusday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  }

  const newArr = {}
  allSchedule.forEach((day) => {
    switch (day.day) {
      case days.monday:
        newArr[0] = day
        break
      case days.tuesday:
        newArr[1] = day
        break
      case days.wednesday:
        newArr[2] = day
        break
      case days.thursday:
        newArr[3] = day
        break
      case days.friday:
        newArr[4] = day
        break
      case days.saturday:
        newArr[5] = day
        break
      case days.sunday:
        newArr[6] = day
        break
    }
  })
  console.log("===newArr",newArr);


  const newArray = [
    {
      time: "08:00-09:00",
      monday: {
        timeSlot: 5,
        occupied: 3,
      },
      tuesday: {
        timeSlot: 5,
        occupied: 3,
      },
      wednesday: {
        timeSlot: 5,
        occupied: 3,
      },
      thursday: {
        timeSlot: 5,
        occupied: 3,
      },
      friday: {
        timeSlot: 5,
        occupied: 3,
      },
      saturday: {
        timeSlot: 5,
        occupied: 3,
      },
      sunday: {
        timeSlot: 5,
        occupied: 3,
      }
    },
    {
      time: "09:00-10:00",
      monday: {
        timeSlot: 5,
        occupied: 3,
      },
      tuesday: {
        timeSlot: 5,
        occupied: 3,
      },
      wednesday: {
        timeSlot: 5,
        occupied: 3,
      },
      thursday: {
        timeSlot: 5,
        occupied: 3,
      },
      friday: {
        timeSlot: 5,
        occupied: 3,
      },
      saturday: {
        timeSlot: 5,
        occupied: 3,
      },
      sunday: {
        timeSlot: 5,
        occupied: 3,
      }
    },
  ];

  console.log('===newAarray', newArray)
  const [isEditing, setIsEditing] = useState(false);
  const handleEditMode = () => {
    setIsEditing(!isEditing);
  }

  var i = 1;

  return (
    <div
      className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded bg-white mr-4"
    >
      <TableTitle
        titleText="Senin"
        showButton={true}
        buttonText="Ubah"
        buttonColor="yellow"
        handleButtonClick={handleEditMode}
        />
        <Table>
          <TableHeader>
            <TableHead title="Jam"/>
            <TableHead title="Senin"/>
            <TableHead title="Selasa"/>
            <TableHead title="Rabu"/>
            <TableHead title="Kamis"/>
            <TableHead title="Jum'at"/>
            <TableHead title="Sabtu"/>
            <TableHead title="Minggu"/>
          </TableHeader>
          <TableBody>
            {
              newArray.map((item) => {
                const {time, monday, tuesday, wednesday, thursday, friday, saturday, sunday} = item;
                console.log('item', item);
                return (
                    <TableRow key={i++}>
                      <TableCell value={time}/>
                      <TableCell value={monday.timeSlot}/>
                      <TableCell value={tuesday.timeSlot}/>
                      <TableCell value={wednesday.timeSlot}/>
                      <TableCell value={thursday.timeSlot}/>
                      <TableCell value={friday.timeSlot}/>
                      <TableCell value={saturday.timeSlot}/>
                      <TableCell value={sunday.timeSlot}/>
                    </TableRow>
                )
              })
            }
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

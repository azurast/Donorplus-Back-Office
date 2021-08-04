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

export default function SlotTable() {

  const [isEditing, setIsEditing] = useState(false);
  const handleEditMode = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div
      className="relative flex flex-col break-words w-1/2 mb-6 shadow-lg rounded bg-white mr-4"
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
            <TableHead title="Slot"/>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell value="10:00-11:00"/>
              { isEditing ? <RegularInput size="small" value={5}/> : <TableCell value="5"/>}
            </TableRow>
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

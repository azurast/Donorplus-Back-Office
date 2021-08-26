import React from "react";

const TableRow = ({ children, onClick, colSpan }) => {
  return (
      <tr onClick={onClick} colSpan={colSpan}>
        {children}
      </tr>
  );
}

export default TableRow;

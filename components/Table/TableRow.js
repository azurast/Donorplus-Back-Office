import React from "react";

const TableRow = ({ children, onClick }) => {
  return (
      <tr onClick={onClick}>
        {children}
      </tr>
  );
}

export default TableRow;

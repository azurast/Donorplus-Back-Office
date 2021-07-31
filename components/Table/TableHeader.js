import React from "react";

const TableHeader = ({children}) => {
  return (
    <thead>
    <tr>
      {children}
    </tr>
    </thead>
  );
}

export default TableHeader;
import React from "react";

const TableContainer = ({ color, children }) => {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
      }
    >
      {children}
    </div>
  );
}

TableContainer.defaultProps = {
  color: "light"
}

export default TableContainer;
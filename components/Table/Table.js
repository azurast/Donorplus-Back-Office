import React from "react";

const Table = ({children}) => {
  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center w-full bg-transparent border-collapse">
        {children}
      </table>
    </div>
  );
}

export default Table;
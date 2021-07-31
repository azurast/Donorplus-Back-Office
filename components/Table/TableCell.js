import React from "react";

const TableCell = ({ type, label }) => {
  return (
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      {
        type === "label"
          ? <div className="flex">
                <span
                  className={"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1 " + (label === "Besar" ? "text-lightBlue-600 bg-lightBlue-200" : "text-orange-500 bg-orange-200")}>
                    {label}
                </span>
          </div>
          : type === "status"
          ? <> <i className={"fas fa-circle mr-2 " + (label === "Aktif" ? "text-emerald-500" : "text-red-500")}></i> {label} </>
          : <> {label} </>
      }
    </td>
  );
}

export default TableCell;
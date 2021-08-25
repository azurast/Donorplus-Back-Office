import React from "react";

/*
*   @params
*     type {
*       label :
*       status
*       button
*     }
* */
const TableCell = ({ type, value, buttonColor, buttonIcon, onButtonClick, onTdClick, children}) => {
  return (
    <td
      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      onClick={onTdClick}
    >
      {
        type === "label"
          ? <div className="flex">
                <span
                  className={"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1 " + (value === "Besar" ? "text-lightBlue-600 bg-lightBlue-200" : "text-orange-500 bg-orange-200")}>
                    {value}
                </span>
          </div>
          : type === "status"
          ? <> <i className={"fas fa-circle mr-2 " + (value === true ? "text-emerald-500" : "text-red-500")}></i> {value === true ? "Aktif" : "Tidak Aktif"} </>
          : type === "button"
            ? <>
                <button
                  className={"get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-"+ buttonColor +"-500 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"}
                  onClick={onButtonClick}
                >
                  <i className={"far " + buttonIcon}></i>
                </button>
              </>
            : <> {value} </>
      }
      {children}
    </td>
  );
}

export default TableCell;

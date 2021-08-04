import React from "react";
import PropTypes from "prop-types"

const TableTitle = ({ color, titleText, showButton, buttonText, buttonColor, handleButtonClick }) => {
  return (
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap w-full">
          <div className="w-1/2">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              {titleText}
            </h3>
          </div>
          {
            showButton
              ? <div className="w-1/2">
                <button
                  className={"bg-"+ buttonColor +"-500 text-white active:bg-"+ buttonColor +"-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                  type="button"
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </button>
              </div>
              : <></>
          }
        </div>
      </div>
    </div>
  );
}

TableTitle.defaultProps = {
  color: "light"
}

TableTitle.prototype = {
  color: String
}

export default TableTitle;

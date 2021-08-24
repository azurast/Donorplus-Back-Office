import React from "react";
import PropTypes from "prop-types"

const TableTitle = (props) => {
    const { color, titleText, showButton, buttonText, buttonColor, handleButtonClick, disableButton, buttonType, children } = props
  return (
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap w-full justify-between">
          <div className="flex w-1/2 justify-start">
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
              ? <div className="flex w-1/2 justify-end">
                <button
                  className={(buttonColor ? "bg-"+ buttonColor +"-500 active:bg-"+ buttonColor +"-500 text-white" : " bg-blueGray-400 active:bg-blueGray-400 text-white " )+" font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"}
                  type={buttonType ? buttonType : "button"}
                  onClick={handleButtonClick}
                  disabled={disableButton}
                >
                  {buttonText}
                </button>
              </div>
              : <></>
          }
        </div>
      </div>
        {children}
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

import React from "react";
import PropTypes from "prop-types"

const TableTitle = (props) => {
    const { color, titleText, showButton, buttonText, buttonColor, handleButtonClick, disableButton, buttonType, children } = props
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
                  className={(buttonColor ? "bg-"+ buttonColor +"-500 active:bg-"+ buttonColor +"-500 text-white" : " bg-blueGray-400 active:bg-blueGray-400 text-white " )+" font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
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

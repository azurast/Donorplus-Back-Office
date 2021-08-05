import React from "react";
import PropTypes from "prop-types"
import RegularInput from "../Inputs/RegularInput";

export default function AntibodyModal({showModal, setShowModal}) {
  return(
    <>
      <div className="opacity-25 fixed inset-0 z-40 bg-black">
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto md:px-10 fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Antibodi
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
                        htmlFor={name}
                      >
                        Antibodi
                      </label>
                      <input
                        className={ (props.disabled === true ? "bg-blueGray-100 " : "bg-white ") + (props.size === "small" ? "px-2 py-1" : "px-3 py-3") + " placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"}/>
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  { modalType === "add" ? "Tambah" : "Perbaharui" }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
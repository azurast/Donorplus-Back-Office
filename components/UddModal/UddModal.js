import React from "react";
import PropTypes from "prop-types"
import { Formik, Form } from "formik";

// COMPONENTS
import RegularInput from "../Inputs/RegularInput";
import TextareaInput from "../Inputs/TextareaInput";
import CheckboxInput from "../Inputs/CheckboxInput";

export default function UddModal({ showModal, setShowModal, mode }) {

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto md:px-10 fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <Formik
              initialValues={{
                uddName: '',
                uddPhoneNumber: '',
                uddAddress: '',
                uddStatus: false
              }}
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {mode === "add" ? "Tambah UDD" : "Ubah UDD"}
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
                            <RegularInput
                              inputType="text"
                              name="uddName"
                              label="Nama UDD"
                              placeholder="Nama UDD"
                            />
                            <RegularInput
                              inputType="number"
                              name="uddPhoneNumber"
                              label="Nomor Telepon"
                              placeholder="021-xxx-xxx"
                            />
                            <TextareaInput
                              label="Alamat"
                              name="uddAddress"
                              placeholder="Jalan Gunung Merapi no 25.G"
                            />
                            <CheckboxInput
                              label="Keaktifan"
                              name="uddStatus"
                              status={true}
                            />
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
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

UddModal.defaultProps = {}

UddModal.propTypes = {}

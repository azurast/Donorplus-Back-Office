import React from "react";
import PropTypes from "prop-types"
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_UDD, UPDATE_UDD } from "../../services/graphql/mutations/uddMutations";
import { GET_ALL_UDDS } from "../../services/graphql/queries/uddQueries";

// COMPONENTS
import RegularInput from "../Inputs/RegularInput";
import TextareaInput from "../Inputs/TextareaInput";
import CheckboxInput from "../Inputs/CheckboxInput";

export default function UddModal({ showModal, setShowModal, modalType, udd }) {

  const mutation = modalType === "add" ? CREATE_UDD : UPDATE_UDD;
  const [createUdd, {data, loading, error}] = useMutation(mutation);

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    // alert(JSON.stringify(error, null, 2));
    console.error(error)
    return null;
  }

  return (
    <>
      {showModal ? (
        <>
        <div className="flex fixed inset-0 z-40 bg-black w-full h-full opacity-80 left-0 top-0"></div>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto md:px-10 fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <Formik
                initialValues={{
                  uddName: udd.branchName || '',
                  uddPhoneNumber: udd.phoneNumber || '',
                  uddAddress: udd.branchAddress || '',
                  uddLangitude: udd.langitude || '',
                  uddLongitude: udd.longitude || '',
                  uddAvailability: udd.availability || "Tidak Tersedia"
                }}
                onSubmit={(values) => {
                  const { uddName, uddAddress, uddPhoneNumber, uddLangitude, uddLongitude, uddAvailability } = values;
                  createUdd({
                    variables: {
                      branchId: udd.id,
                      branchName: uddName,
                      branchSize: "Besar",
                      branchPhoneNumber: uddPhoneNumber,
                      branchAvailability: uddAvailability,
                      // branchStatus: uddStatus,
                      branchAddress: uddAddress,
                      langitude: uddLangitude,
                      longitude: uddLongitude,
                    },
                    refetchQueries: [{ query: GET_ALL_UDDS }]
                  });
                  setShowModal(false)
                }}
              >
                <Form>
                  <div className="relative w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          {modalType === "add" ? "Tambah UDD" : "Ubah UDD"}
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
                                tType="text"
                                name="uddName"
                                label="Nama UDD"
                                placeholder="Nama UDD"
                                showLabel={true}
                              />
                              <RegularInput
                                type="tel"
                                name="uddPhoneNumber"
                                label="Nomor Telepon"
                                placeholder="021-xxx-xxx"
                                showLabel={true}
                              />
                              <RegularInput
                                type="text"
                                name="uddLangitude"
                                label="Langitude"
                                placeholder="0"
                                showLabel={true}
                              />
                              <RegularInput
                                type="text"
                                name="uddLongitude"
                                label="Longitude"
                                placeholder="0"
                                showLabel={true}
                              />
                              <RegularInput
                                  type="text"
                                  name="uddAvailability"
                                  label="Jam Buka"
                                  placeholder="08:00 - ..."
                                  showLabel={true}
                              />
                              <TextareaInput
                                label="Alamat"
                                name="uddAddress"
                                placeholder="Jalan Gunung Merapi no 25.G"
                              />
                              {/*<CheckboxInput*/}
                              {/*  label="Keaktifan"*/}
                              {/*  name="uddStatus"*/}
                              {/*/>*/}
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
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 mx-4 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          { modalType === "add" ? "Tambah" : "Perbaharui" }
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
              </div>
          {/*</div>*/}
        </>
      ) : null}
    </>
  );
}

UddModal.defaultProps = {}

UddModal.propTypes = {}

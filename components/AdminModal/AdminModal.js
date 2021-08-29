import React, {useState} from "react";
import PropTypes from "prop-types"
import { Formik, Form, Field } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_ADMIN, UPDATE_ADMIN } from "../../services/graphql/mutations/uddMutations";
import { GET_UDD_ADMINS } from "../../services/graphql/queries/uddQueries";

// COMPONENTS
import RegularInput from "../Inputs/RegularInput";
import TextareaInput from "../Inputs/TextareaInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import DropdownInput from "../Inputs/DropdownInput";

export default function AdminModal({ showModal, setShowModal, modalType, admin }) {

  const mutation = modalType === "add" ? CREATE_ADMIN : UPDATE_ADMIN
  const [createAdmin, {data, loading, error}] = useMutation(mutation);
  const [status, setStatus] = useState(false);
  const roles = {
    "superadminpusat" : "Super Admin Pusat",
    "superadmincabang" : "Super Admin Cabang",
    "adminreguler" : "Admin Reguler"
  }
  const options = [roles.adminreguler, roles.superadmincabang, roles.superadminpusat];

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
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
                adminName: admin.fullname || '',
                adminEmail: admin.email || '',
                adminPassword: admin.password || '',
                adminRole: admin.role || '',
                adminStatus: admin.status || false
              }}
              onSubmit={(values, { setSubmitting }) => {
                const { adminName, adminEmail, adminPassword, adminRole, adminStatus } = values;
                createAdmin({
                  variables: {
                    adminId: admin.id,
                    branchId: admin.uddId,
                    fullName: adminName,
                    email: adminEmail,
                    password: adminPassword,
                    role: adminRole,
                    status: adminStatus
                  },
                  refetchQueries: [{
                    query: GET_UDD_ADMINS,
                    variables: {
                      uddId: admin.uddId
                    }
                  }]
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
                        {modalType === "add" ? "Tambah Admin" : "Ubah Admin"}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => {
                          setShowModal(false)
                        }}
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
                              name="adminName"
                              label="Nama Admin"
                              placeholder="Nama Admin"
                              showLabel={true}
                            />
                            <RegularInput
                              inputType="email"
                              name="adminEmail"
                              label="Email Admin"
                              placeholder="test@example.com"
                              showLabel={true}
                            />
                            <RegularInput
                              inputType="password"
                              name="adminPassword"
                              label="Password Admin"
                              placeholder="********"
                              showLabel={true}
                            />
                            {/* TODO : CREATE DROPDOWN */}
                            <DropdownInput
                                label="Role Admin"
                                name="adminRole"
                                id="adminRole"
                                options={options}
                            />
                            <CheckboxInput
                                label="Keaktifan"
                                name="adminStatus"
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

AdminModal.defaultProps = {}

AdminModal.propTypes = {}

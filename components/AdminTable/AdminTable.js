import React from "react";
import PropTypes from "prop-types"
import Link from "next/link";

export default function AdminTable({ color }) {

    const AdminTableHeaderRow = () => {
      return (
        <tr>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Nomor
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Nama Admin
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Email
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Tipe
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Status
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
            }
          >
            Aksi
          </th>
        </tr>
      );
    }
    const AdminTableRow = (props) => {
      const { index, adminName, adminMail, adminType, adminStatus} = props;
      return (
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            {index}
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {adminName}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {adminMail}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="flex">
              <span
                className={"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" + (adminType == "Superadmin" ? "text-lightBlue-600 bg-lightBlue-200" : "text-orange-500 bg-orange-200")}>
                  {adminType}
              </span>
            </div>
          </td>
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left p-4">
            <i className={"fas fa-circle mr-2 " + (adminStatus == "Aktif" ? "text-emerald-500" : "text-red-500")}></i> {adminStatus}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <Link href='/admin/tables'>
              <a className="get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-yellow-500 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                <i className="far fa-edit"></i>
              </a>
            </Link>
          </td>
        </tr>
      );
    }

    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                UDDP
                            </h3>
                            <p className="mt-1">Jalan Joe No.7, Kel Jl. Joe No.1, RT.1/RW.6, Lenteng Agung, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12610</p>
                            <div className="flex mt-2">
                                <span
                                    className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                    Besar
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Udds List Table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <AdminTableHeaderRow/>
                        </thead>
                        <tbody>
                        <AdminTableRow
                          index="1"
                          adminName="Asep Saefudin"
                          adminMail="asep.saefudin@uddp.pmi@gmail.com"
                          adminType="Superadmin"
                          adminStatus="Aktif"
                        />
                        <AdminTableRow
                          index="2"
                          adminName="Atikah"
                          adminMail="atikah@uddp.pmi@gmail.com"
                          adminType="Admin Reguler"
                          adminStatus="Tidak Aktif"
                        />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

AdminTable.defaultProps = {}

AdminTable.propTypes = {}

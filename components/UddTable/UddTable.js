import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

export default function UddTable({ color, data }) {

  const router = useRouter();
  const UddTableHeaderRow = () => {
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
          Nama
        </th>
        <th
          className={
            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
          }
        >
          Provinsi
        </th>
        <th
          className={
            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
          }
        >
          Nomor Telepon
        </th>
        <th
          className={
            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
          }
        >
          Ukuran
        </th>
        <th
          className={
            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
          }
        >
          Jumlah Admin
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
      </tr>
    )
  }
  const UddTableRow = (props) => {
    const { index, uddName, uddProvince, uddPhone, uddSize, uddAdminCount, uddStatus } = props;
    return (
      <Link href="/admin/udd/[uddid]" as={`/admin/udd/${index}`}>
        <tr>
          <th
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
            {index}
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {uddName}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {uddProvince}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {uddPhone}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="flex">
              <span
                className={"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1 " + (uddSize == "Besar" ? "text-lightBlue-600 bg-lightBlue-200" : "text-orange-500 bg-orange-200")}>
                  {uddSize}
              </span>
            </div>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {uddAdminCount}
          </td>
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left p-4">
            <i className={"fas fa-circle mr-2 " + (uddStatus == "Aktif" ? "text-emerald-500" : "text-red-500")}></i> {uddStatus}
          </td>
        </tr>
      </Link>
    );
  }
  // const handleOnRowClick = (props) => {
  //   console.log('===props', props);
  //   Router.push({
  //     path: `admin/udd/${props.uddName}`,
  //     query: { uddName: props.uddName }
  //   });
  // }
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
                Unit Donor Darah
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Udds List Table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
            <UddTableHeaderRow/>
            </thead>
            <tbody>
            {
              data.map(udd =>
                <UddTableRow
                  index="1"
                  uddName={udd.branchName}
                  uddProvince={udd.id}
                  uddPhone="-"
                  uddSize={udd.branchSize}
                  uddAdminCount="-"
                  uddStatus="Aktif"
                />
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

UddTable.defaultProps = {}

UddTable.propTypes = {}

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("currentUser"));
  }, [role]);

  const router = useRouter();

  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              PMI Admin
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown/>
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div
              className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      PMI Admin
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {/* UDD & PENDONOR */}
              { role == "superadminpusat" || role == "superadmincabang" || role == "adminreguler"
                ? <>
                    <li className="items-center">
                      <Link href={{ pathname: "/admin/udd", query: { role }}}>
                        <a
                          href="#pablo"
                          className={
                            "text-xs uppercase py-3 font-bold block " +
                            (router.pathname.indexOf("/admin/udd") !== -1
                              ? "text-red-500 hover:text-red-600"
                              : "text-blueGray-700 hover:text-blueGray-500")
                          }
                        >
                          <i
                            className={
                              "fas fa-plus-square mr-2 text-sm " +
                              (router.pathname.indexOf("/admin/udd") !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          UDD
                        </a>
                      </Link>
                    </li>
                    <li className="items-center">
                      <Link href={{ pathname: "/admin/donor", query: { role }}}>
                        <a
                          href="#pablo"
                          className={
                            "text-xs uppercase py-3 font-bold block " +
                            (router.pathname.indexOf("/admin/donor") !== -1
                              ? "text-red-500 hover:text-red-600"
                              : "text-blueGray-700 hover:text-blueGray-500")
                          }
                        >
                          <i
                            className={
                              "fas fa-id-card mr-2 text-sm " +
                              (router.pathname.indexOf("/admin/donor") !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          Pendonor
                        </a>
                      </Link>
                    </li>
                    <hr className="my-4 md:min-w-full"/>
                  </>
                : <></>
              }
              {/* WAWANCARA, TES DARAH, DONOR PLASMA */}
              { role == "superadmincabang" || role == "adminreguler"
                ? <>
                  <li className="items-center">
                    <Link href="/admin/process/interview">
                      <a
                        href="#pablo"
                        className={
                          "text-xs uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/admin/process/interview") !== -1
                            ? "text-red-500 hover:text-red-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-comment-medical mr-2 text-sm " +
                            (router.pathname.indexOf("/admin/process/interview") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Wawancara
                      </a>
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link href="/admin/process/blood-test">
                      <a
                        href="#pablo"
                        className={
                          "text-xs uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/admin/process/blood-test") !== -1
                            ? "text-red-500 hover:text-red-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-vial mr-2 text-sm " +
                            (router.pathname.indexOf("/admin/process/blood-test") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Tes Darah
                      </a>
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link href="/admin/process/plasma-donor">
                      <a
                        href="#pablo"
                        className={
                          "text-xs uppercase py-3 font-bold block " +
                          (router.pathname.indexOf("/admin/process/plasma-donor") !== -1
                            ? "text-red-500 hover:text-red-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-hand-holding-medical mr-2 text-sm " +
                            (router.pathname.indexOf("/admin/process/plasma-donor") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Donor Plasma
                      </a>
                    </Link>
                  </li>
                  <hr className="my-4 md:min-w-full"/>
                </>
                : <></>
              }
              { role == "superadmincabang"
                ? <li className="items-center">
                  <Link href="/admin/settings/setting">
                    <a
                      href="#pablo"
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (router.pathname.indexOf("/admin/settings/setting") !== -1
                          ? "text-red-500 hover:text-red-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      <i
                        className={
                          "fas fa-cog mr-2 text-sm " +
                          (router.pathname.indexOf("/admin/settings/setting") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Pengaturan
                    </a>
                  </Link>
                </li>
                : <></>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

}


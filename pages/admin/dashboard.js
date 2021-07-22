import React from "react";
import PropTypes from "prop-types";
import client from "../apollo-client";
import {gql} from "@apollo/client";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import CardTable from "../../components/Cards/CardTable";


export default function Dashboard({udds, color}) {
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
                            Daftar PMI
                        </h3>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                <tr>
                    <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                        }
                    >
                        Nama PMI
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    udds.map((udd) => {
                        const { udd_name: uddName } = udd
                        return <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <td>
                                {uddName}
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            </div>
            </div>
          {/*<div className="flex flex-wrap">*/}
          {/*  <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">*/}
          {/*    <CardLineChart />*/}
          {/*  </div>*/}
          {/*  <div className="w-full xl:w-4/12 px-4">*/}
          {/*    <CardBarChart />*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="flex flex-wrap mt-4">*/}
          {/*  <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">*/}
          {/*    <CardPageVisits />*/}
          {/*  </div>*/}
          {/*  <div className="w-full xl:w-4/12 px-4">*/}
          {/*    <CardSocialTraffic />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </>
      );
}

Dashboard.layout = Admin;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query getAllUddsQuery {
          getAllUdds {
            id
            udd_name
          }
        }
      `,
    });

    return {
        props: {
            udds: data.getAllUdds,
        },
    };
}

CardTable.defaultProps = {
    color: "light",
};

CardTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BLOODTEST_ACTIVITIES } from "../../../services/graphql/queries/activityQueries";
import { UPDATE_BLOODTEST } from "../../../services/graphql/mutations/activityMutations";

// COMPONENTS
import Admin from "layouts/Admin"
import TableContainer from "../../../components/Table/TableContainer";
import TableTitle from "../../../components/Table/TableTitle";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import TableHead from "../../../components/Table/TableHead";
import TableBody from "../../../components/Table/TableBody";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";

export default function BloodTest() {

    const [antibody, setAntibody] = useState("");
    const { data, loading, error } = useQuery(GET_BLOODTEST_ACTIVITIES);

    const [updateBloodTest, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(UPDATE_BLOODTEST)

    if (loading) {
        return <h2>Loading</h2>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const listBloodTest = data.getActivityForBloodTest;

    console.log('===bloodtest list', listBloodTest);

    const onActionButtonClick = (activityId, passBloodTest) => {
        const timestamp = new Date().toISOString();
        console.log('===timestamp', timestamp);
        updateBloodTest({
            variables: {
                activityId: activityId,
                antibodyLevel: antibody,
                didBloodTestStatus: true,
                passBloodTestDate: timestamp,
                passBloodTestStatus: passBloodTest,
                passBloodTestShow: true,
            },
            refetchQueries: [{query: GET_BLOODTEST_ACTIVITIES}]
        })
    };

    const ActionButtons = ({activityId, passBloodTestStatus}) => {

        return(
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            onClick={(e) => e.stopPropagation()}
          >
              <button
                className={(passBloodTestStatus == true ? "cursor-not-allowed bg-blueGray-400 active:bg-blueGray-500 " : "bg-emerald-500 active:bg-emerald-500 ")+"get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"}
                onClick={() => {
                    if (passBloodTestStatus == false) {
                        onActionButtonClick(activityId,true)
                    }
                }}
              >
                  Lolos
              </button>
              <button
                className={(passBloodTestStatus == true ? "cursor-not-allowed bg-red-400 active:bg-red-500 " : "bg-red-500 active:bg-red-500 ")+"get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"}
                onClick={() => {
                    if (passBloodTestStatus == false) {
                        onActionButtonClick(activityId,false)
                    }
                }}
              >
                  Gagal
              </button>
          </td>
        );
    }

    // TODO : fix onChange, re-renders & out of focus after every input
    const InputCell = ({type, disabled, size}) => {
        return(
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              onClick={(e) => e.stopPropagation()}>
              <input
                type={type}
                value={antibody}
                className={ (disabled === true ? "bg-blueGray-100 " : "bg-white ") + (size === "small" ? "px-2 py-1" : "px-3 py-3") + " placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"}
                onChange={(e) => {
                    e.preventDefault();
                    // console.log('===e.target.value', e.target.value);
                    setAntibody(e.target.value);
                }}
              />
          </td>
        )
    }

    // TODO : SORT BY 'didBloodTestAt'
    return(
      <div>
          <TableContainer>
              <TableTitle
                titleText="Daftar Pendonor Tes Darah"
                showButton={false}
              />
              <Table>
                  <TableHeader>
                      <TableHead title="Nomor Antrian"/>
                      <TableHead title="Nama"/>
                      <TableHead title="Jam Kedatangan"/>
                      <TableHead title="Jenis Kelamin"/>
                      <TableHead title="Golongan Darah"/>
                      <TableHead title="Status"/>
                      <TableHead title="Titer Antibodi"/>
                      <TableHead title="Aksi"/>
                  </TableHeader>
                  <TableBody>
                      {
                          listBloodTest.map((activity, index) => {
                              const { id, didBloodTest, didBloodTestAt, passBloodTest, passBloodTestAt, pendonor, antibodyLevel } = activity;
                              const { fullName, pendonorDetails: { sex, dateOfBirth, bloodType }} = pendonor;
                              const date = new Date(didBloodTestAt).toTimeString().slice(0,5);
                              const status = !didBloodTest
                                ? "Menunggu Tes Darah"
                                : !passBloodTest
                                  ? "Gagal Tes Darah"
                                  : "Lolos Tes Darah"
                              return (
                                <TableRow key={id} onClick={() => console.log('===table row clicked')}>
                                    <TableCell value={++index} type="text"/>
                                    <TableCell value={fullName} type="text"/>
                                    <TableCell value={date} type="text"/>
                                    <TableCell value={sex} type="text"/>
                                    <TableCell value={bloodType} type="text"/>
                                    <TableCell value={status} type="label"/>
                                    <InputCell disabled={passBloodTest !== null} type="text"/>
                                    <ActionButtons activityId={id} passBloodTestStatus={passBloodTest}/>
                                </TableRow>
                              );
                          })
                      }
                  </TableBody>
              </Table>
          </TableContainer>
      </div>
    );
}

BloodTest.layout = Admin;

BloodTest.defaultProps = {
    color: "light",
    showCards: true,
    navigationTitle: "Tes Darah"
};

BloodTest.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

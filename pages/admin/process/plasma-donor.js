import React from "react";
import PropTypes from "prop-types";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PLASMADONOR_ACTIVITIES } from "../../../services/graphql/queries/activityQueries";
import { UPDATE_DONOR_PLASMA} from "../../../services/graphql/mutations/activityMutations";

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

export default function PlasmaDonor() {

    const { data, loading, error } = useQuery(GET_PLASMADONOR_ACTIVITIES);

    const [updateDonorPlasma, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(UPDATE_DONOR_PLASMA)

    if (loading) {
        return <h2>Loading</h2>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const listDonotPlasma = data.getActivityForDonor;

    const onActionButtonClick = (activityId, didDonor) => {
        console.log('===fjevkev');
        const timestamp = new Date().toISOString();
        updateDonorPlasma({
            variables: {
                activityId: activityId,
                didDonorStatus: didDonor,
                didDonorDate: timestamp,
                didDonorShow: true
            },
            refetchQueries: [{query: GET_PLASMADONOR_ACTIVITIES}]
            })
    };

    const ActionButtons = ({activityId, didDonorStatus}) => {
        return(
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            onClick={(e) => e.stopPropagation()}
          >
              <button
                className={( didDonorStatus == false ? "cursor-not-allowed bg-blueGray-400 active:bg-blueGray-500 " : "bg-lightBlue-500 active:bg-lightBlue-500 ")+"get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"}
                onClick={() => {
                    if (!didDonorStatus) {
                        onActionButtonClick(activityId,true)
                    }
                }}
              >
                  Selesai
              </button>
          </td>
        );
    }

    return(
      <div>
          <TableContainer>
              <TableTitle
                titleText="Daftar Pendonor Donor Plasma"
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
                      <TableHead title="Aksi"/>
                  </TableHeader>
                  <TableBody>
                      {
                          listDonotPlasma.map((activity, index) => {
                              const { id, didScheduleTest, didScheduleTestAt, didDonor, didDonorAt, pendonor} = activity;
                              const { fullName, pendonorDetails: { sex, dateOfBirth, bloodType }} = pendonor;
                              const date = new Date(didDonorAt).toTimeString().slice(0,5);
                              const status = !didDonor
                                ? "Menunggu Donor"
                                : "Sudah Donor"
                              return (
                                <TableRow key={id} onClick={() => console.log('===table row clicked')}>
                                    <TableCell value={++index} type="text"/>
                                    <TableCell value={fullName} type="text"/>
                                    <TableCell value={date} type="text"/>
                                    <TableCell value={sex} type="text"/>
                                    <TableCell value={bloodType} type="text"/>
                                    <TableCell value={status} type="label"/>
                                    <ActionButtons activityId={id} didDonorStatus={didDonor}/>
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

PlasmaDonor.layout = Admin;

PlasmaDonor.defaultProps = {
    color: "light",
    showCards: true,
    navigationTitle: "Donor Plasma"
};

PlasmaDonor.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

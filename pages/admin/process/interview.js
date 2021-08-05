import React from "react";
import PropTypes from "prop-types"
import { useQuery, useMutation } from "@apollo/client";
import { GET_INTERVIEW_ACTIVITIES } from "../../../services/graphql/queries/activityQueries";
import { UPDATE_INTERVIEW } from "../../../services/graphql/mutations/activityMutations";

// COMPONENTS
import Admin from "layouts/Admin"
import TableTitle from "../../../components/Table/TableTitle";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import TableHead from "../../../components/Table/TableHead";
import TableBody from "../../../components/Table/TableBody";
import TableContainer from "../../../components/Table/TableContainer";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";

export default function Interview() {

    const { data, loading, error } = useQuery(GET_INTERVIEW_ACTIVITIES);

    const [updateInterview, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(UPDATE_INTERVIEW)

    if (loading) {
        return <h2>Loading</h2>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const listInterview = data.getActivityForInterview;

    console.log('===interview list', listInterview);

    const onActionButtonClick = (activityId, passInterview) => {
        const timestamp = new Date().toISOString();
        updateInterview({
            variables: {
                activityId: activityId,
                didInterviewStatus: true,
                passInterviewDate: timestamp,
                passInterviewStatus: passInterview,
                passInterviewShow: true,
            },
            refetchQueries: [{query: GET_INTERVIEW_ACTIVITIES}]
        })
    };

    const ActionButtons = ({activityId, passInterviewStatus}) => {

        return(
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            onClick={(e) => e.stopPropagation()}
          >
              <button
                className={(passInterviewStatus !== null ? "cursor-not-allowed bg-blueGray-400 active:bg-blueGray-500 " : "bg-emerald-500 active:bg-emerald-500 ")+"get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"}
                onClick={() => {
                    if (passInterviewStatus == null) {
                        onActionButtonClick(activityId,true)
                    }
                }}
              >
                  Lolos
              </button>
              <button
                className={(passInterviewStatus !== null ? "cursor-not-allowed bg-red-400 active:bg-red-500 " : "bg-red-500 active:bg-red-500 ")+"get-started text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"}
                onClick={() => {
                    if (passInterviewStatus == null) {
                        onActionButtonClick(activityId,false)
                    }
                }}
              >
                  Gagal
              </button>
          </td>
        );
    }

    // TODO : SORT BY 'didInterviewAt'
    return(
        <div>
            <TableContainer>
                <TableTitle
                  titleText="Daftar Pendonor Wawancara"
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
                        {/*<TableHead title="Catatan"/>*/}
                        <TableHead title="Aksi"/>
                    </TableHeader>
                    <TableBody>
                        {
                            listInterview.map((activity, index) => {
                                const { id, didInterview, didInterviewAt, passInterview, passInterviewAt, pendonor } = activity;
                                const { fullName, pendonorDetails: { sex, dateOfBirth, bloodType }} = pendonor;
                                const date = new Date(didInterviewAt).toTimeString().slice(0,5);
                                const status = !didInterview
                                  ? "Menunggu Interview"
                                  : !passInterview
                                    ? "Gagal Interview"
                                    : "Lolos Interview"
                                return (
                                  <TableRow key={id} onClick={() => console.log('===table row clicked')}>
                                      <TableCell value={++index} type="text"/>
                                      <TableCell value={fullName} type="text"/>
                                      <TableCell value={date} type="text"/>
                                      <TableCell value={sex} type="text"/>
                                      <TableCell value={bloodType} type="text"/>
                                      <TableCell value={status} type="label"/>
                                      // TODO : add button that opens modal to update interview notes
                                      <ActionButtons activityId={id} passInterviewStatus={passInterview}/>
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

Interview.layout = Admin;

Interview.defaultProps = {
    color: "light",
    showCards: true,
    navigationTitle: "Wawancara"
};


Interview.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

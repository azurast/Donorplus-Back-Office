import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"
import { useQuery } from "@apollo/client";
import { GET_ALL_DONORS } from "../../../services/graphql/queries/donorQueries";

// COMPONENTS
import TableContainer from "../../../components/Table/TableContainer";
import Table from "../../../components/Table/Table";
import TableTitle from "../../../components/Table/TableTitle";
import TableHead from "../../../components/Table/TableHead";
import TableHeader from "../../../components/Table/TableHeader";
import TableBody from "../../../components/Table/TableBody";
import TableCell from "../../../components/Table/TableCell";

import Link from "next/link";

export default function Index() {

    const { data, loading, error } = useQuery(GET_ALL_DONORS);

    if (loading) {
        return <h2>Loading</h2>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const donors = data.getAllPendonor;
    console.log("===donors", donors);

    const DonorTableRow = (props) => {
        const { index, uddName, uddProvince, uddPhone, uddSize, uddAdminCount, uddStatus } = props;
        return (
          <Link href="/admin/udd/[uddid]" as={`/admin/udd/${index}`}>
              <tr>
                  <TableCell label={index} type="text"/>
                  <TableCell label={uddName} type="text"/>
                  <TableCell label={uddProvince} type="text"/>
                  <TableCell label={uddPhone} type="text"/>
                  <TableCell label={uddSize} type="label"/>
                  <TableCell label={uddAdminCount} type="text"/>
                  <TableCell label={uddStatus} type="status"/>
              </tr>
          </Link>
        );
    }

    return(
        <div>
            <TableContainer>
                <TableTitle
                    titleText="Daftar Pendonor"
                    showButton={false}
                />
                <Table>
                    <TableHeader>
                        <TableHead title="Nomor"/>
                        <TableHead title="Nama"/>
                        <TableHead title="Jenis Kelamin"/>
                        <TableHead title="Golongan Darah"/>
                        <TableHead title="Umur"/>
                        <TableHead title="NIK"/>
                    </TableHeader>
                    <TableBody>
                        {
                            // donors.map(donor => {
                            //     const {}
                            // })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

Index.layout = Admin;

Index.defaultProps = {
    color: "light",
    showCards: false,
    navigationTitle: "Pendonor"
};

Index.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

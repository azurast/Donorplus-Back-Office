import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_ALL_DONORS } from "../../../services/graphql/queries/donorQueries";

// COMPONENTS
import Admin from "layouts/Admin";
import TableContainer from "../../../components/Table/TableContainer";
import Table from "../../../components/Table/Table";
import TableRow from "../../../components/Table/TableRow";
import TableTitle from "../../../components/Table/TableTitle";
import TableHead from "../../../components/Table/TableHead";
import TableHeader from "../../../components/Table/TableHeader";
import TableBody from "../../../components/Table/TableBody";
import TableCell from "../../../components/Table/TableCell";

import Link from "next/link";

export default function Donors() {

  const router = useRouter();
  const { role } = router.query;
  console.log('===role', role);

  const {data, loading, error} = useQuery(GET_ALL_DONORS);

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error);
    return null;
  }

  const donors = data.getAllPendonor;
  console.log("===donors", donors);

  const convertToAge = (dateOfBirth) => {

  }

  const onTableRowClick = (id) => {
    console.log('===kepencet with id', id);
    router.push({
      pathname: "/admin/donor/[donorid]",
      query: {
        donorid: id
      }
    }, `/admin/donor/${id}`);
  }

  return (
    <>
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
              donors.map((donor, index) => {
                const {id, fullName, pendonorDetails} = donor;
                const {sex, dateOfBirth, bloodType, nik} = pendonorDetails;
                const age = dateOfBirth;
                return (
                  <TableRow key={id} onClick={() => onTableRowClick(id)}>
                    <TableCell value={++index} type="text"/>
                    <TableCell value={fullName} type="text"/>
                    <TableCell value={sex} type="label"/>
                    <TableCell value={bloodType} type="label"/>
                    <TableCell value={age} type="text"/>
                    <TableCell value={nik} type="text"/>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

Donors.layout = Admin;

Donors.defaultProps = {
  color: "light",
  showCards: false,
  navigationTitle: "Pendonor"
};

Donors.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  showCards: PropTypes.bool,
  navigationTitle: PropTypes.string
};


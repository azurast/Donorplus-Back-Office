import React, { useState } from "react";
import PropTypes from "prop-types"
import { useQuery } from "@apollo/client"
import { GET_ALL_UDDS } from "../../../services/graphql/queries/uddQueries";

// COMPONENTS
import Admin from "layouts/Admin"
import TableContainer from "../../../components/Table/TableContainer";
import TableTitle from "../../../components/Table/TableTitle";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import TableHead from "../../../components/Table/TableHead";
import TableBody from "../../../components/Table/TableBody";
import Link from "next/link";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";
import UddModal from "../../../components/UddModal/UddModal";

export default function Udds() {

  const [showModal, setShowModal] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_UDDS);

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error);
    return null;
  }

  const udds = data.getAllPmi
  console.log('===udds', udds)


  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return(
    <>
      <TableContainer>
        <TableTitle
          titleText="Daftar Unit Donor Darah"
          showButton={true}
          buttonText="Tambah UDD"
          buttonColor="emerald"
          handleButtonClick={handleShowModal}
        />
        <Table>
          <TableHeader>
            <TableHead title="Nomor"/>
            <TableHead title="Nama"/>
            <TableHead title="Alamat"/>
            <TableHead title="Ukuran"/>
            <TableHead title="Aksi"/>
          </TableHeader>
          <TableBody>
            {
              udds.map(udd => {
                const {index, branchName: uddName, branchAddress: uddProvince, branchSize: uddSize} = udd;
                return (
                  <>
                    <Link href="/admin/udd/[uddid]" as={`/admin/udd/${index}`}>
                      <TableRow>
                        <TableCell label={index} type="text"/>
                        <TableCell label={uddName} type="text"/>
                        <TableCell label={uddProvince} type="text"/>
                        <TableCell label={uddSize} type="label"/>
                      </TableRow>
                    </Link>
                  </>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <UddModal
        showModal={showModal}
        setShowModal={setShowModal}
        mode="add"
      />
    </>
  );
}

Udds.layout = Admin;

Udds.defaultProps = {
    color: "light",
    showCards: false,
    navigationTitle: "Unit Donor Darah"
};

Udds.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};
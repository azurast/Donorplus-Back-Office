import React, { useState } from "react";
import PropTypes from "prop-types"
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_UDD_ADMINS } from "../../../services/graphql/queries/uddQueries";

import Admin from "layouts/Admin"
import AdminTable from "../../../components/AdminTable/AdminTable";
import TableContainer from "../../../components/Table/TableContainer";
import TableTitle from "../../../components/Table/TableTitle";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import TableHead from "../../../components/Table/TableHead";
import TableBody from "../../../components/Table/TableBody";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";
import AdminModal from "../../../components/AdminModal/AdminModal";

export default function UddDetail() {
  const router = useRouter();
  const { props, role, uddid, uddName } = router.query;
  console.log('===role', role);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedAdmin, setSelectedAdmin] = useState("");

  const { loading, error, data } = useQuery(GET_UDD_ADMINS, {
    variables: { uddId: uddid },
  });

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error)
    return null;
  }

  const onTableRowClick = () => {

  }

  const uddAdmins = data.getAdminPmiByBranch;
  console.log('===uddAdmins')

  return(
      <>
        <AdminModal
          showModal={showModal}
          setShowModal={setShowModal}
          admin={{
            uddId: uddid,
            ...selectedAdmin
          }}
          modalType={modalType}
        />
        <TableContainer>
          <TableTitle
            titleText={uddName}
            showButton={role === "superadminpusat"}
            buttonText="Tambah Admin"
            buttonColor="emerald"
            handleButtonClick={() => {
              setSelectedAdmin({})
              setModalType("add");
              setShowModal(true);
            }}
          />
          <Table>
            <TableHeader>
              <TableHead title="Nomor"/>
              <TableHead title="Nama"/>
              <TableHead title="Email"/>
              <TableHead title="Status"/>
              { role === "superadminpusat" ? <TableHead title="Aksi"/> : <></> }
            </TableHeader>
            <TableBody>
              {
                uddAdmins.map((admin, index) => {
                  const {id, fullname: fullName, email, status} = admin;
                  return (
                    <>
                      <TableRow key={id} onClick={() => onTableRowClick(id)}>
                        <TableCell value={++index} type="text"/>
                        <TableCell value={fullName} type="text"/>
                        <TableCell value={email} type="text"/>
                        <TableCell value={status} type="status"/>
                        {
                          role === "superadminpusat"
                            ? <TableCell
                                onTdClick={(e) => e.stopPropagation()}
                                type="button"
                                buttonColor="yellow"
                                buttonIcon="fa-edit"
                                onButtonClick={() => {
                                  setModalType("edit");
                                  setShowModal(true)
                                  setSelectedAdmin(admin);
                                }}
                            />
                            : <></>
                        }
                      </TableRow>
                    </>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </>
  );
}

UddDetail.layout = Admin;

UddDetail.defaultProps = {}

UddDetail.propTypes = {}

// TODO : with the ID from the previous page, fetch admin data

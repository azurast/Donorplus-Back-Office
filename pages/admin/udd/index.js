import React, { useState } from "react";
import PropTypes from "prop-types"
import { useRouter } from "next/router";
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
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";
import UddModal from "../../../components/UddModal/UddModal";

export default function Udds() {

  const router = useRouter();
  const { role } = router.query;
  console.log('===role', role);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedUdd, setSelectedUdd] = useState('');
  const { data, loading, error } = useQuery(GET_ALL_UDDS);

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error);
    return null;
  }

  const udds = data.getAllPmi;

  const onTableRowClick = (id, uddName) => {
    if(role === "superadminpusat") {
      router.push({
        pathname: "/admin/udd/[uddid]",
        query: {
          udd: id,
          uddName,
          role
        }
      }, `/admin/udd/${id}`);
    }
  }

  return(
    <>
      <UddModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        udd={selectedUdd}
      />
      <TableContainer>
        <TableTitle
          titleText="Daftar Unit Donor Darah"
          showButton={role === "superadminpusat"}
          buttonText="Tambah UDD"
          buttonColor="emerald"
          handleButtonClick={() => {
            console.log('===add button clicked');
            setModalType("add")
            setShowModal(true);
          }}
        />
        <Table>
          <TableHeader>
            <TableHead title="Nomor"/>
            <TableHead title="Nama"/>
            <TableHead title="Alamat"/>
            <TableHead title="Ukuran"/>
            { role === "superadminpusat" ? <TableHead title="Aksi"/> : <></> }
          </TableHeader>
          <TableBody>
            {
              udds.map((udd, index) => {
                const {id, branchName: uddName, branchAddress: uddAddress, branchSize: uddSize} = udd;
                return (
                  <>
                    <TableRow key={id} onClick={() => onTableRowClick(id, uddName)}>
                      <TableCell value={++index} type="text"/>
                      <TableCell value={uddName} type="text"/>
                      <TableCell value={uddAddress} type="text"/>
                      <TableCell value={uddSize} type="label"/>
                      {
                        role === "superadminpusat"
                          ? <TableCell
                              onTdClick={(e) => e.stopPropagation()}
                              type="button"
                              buttonColor="yellow"
                              buttonIcon="fa-edit"
                              onButtonClick={() => {
                                console.log('===edit button clicked');
                                setModalType("edit")
                                setSelectedUdd(udd);
                                setShowModal(true);
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

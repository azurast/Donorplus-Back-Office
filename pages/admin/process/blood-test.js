import React from "react";
import PropTypes from "prop-types";

import Admin from "layouts/Admin"
import TableContainer from "../../../components/Table/TableContainer";
import TableTitle from "../../../components/Table/TableTitle";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import TableHead from "../../../components/Table/TableHead";
import TableBody from "../../../components/Table/TableBody";

export default function BloodTest() {

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
                      <TableHead title="Aksi"/>
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

import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"
import TableTitle from "../../../components/Table/TableTitle";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import TableHead from "../../../components/Table/TableHead";
import TableBody from "../../../components/Table/TableBody";
import TableContainer from "../../../components/Table/TableContainer";

export default function Interview() {

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

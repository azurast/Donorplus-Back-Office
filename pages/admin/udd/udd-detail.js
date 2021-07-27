import React from "react";
import PropTypes from "prop-types"
import Admin from "layouts/Admin"
import AdminTable from "../../../components/AdminTable/AdminTable";

export default function UddDetail() {
    return(
        <>
            <AdminTable color="light"/>
        </>
    );
}

UddDetail.layout = Admin;

UddDetail.defaultProps = {}

UddDetail.propTypes = {}

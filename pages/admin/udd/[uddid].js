import React from "react";
import PropTypes from "prop-types"
import Admin from "layouts/Admin"
import AdminTable from "../../../components/AdminTable/AdminTable";
import Router, { useRouter } from "next/router";

export default function UddDetail() {
  const router = useRouter();
  const { props, uddName } = router.query;
  // console.log('===props', props);

  return(
      <>
          <h1>{uddName}</h1>
          <AdminTable color="light"/>
      </>
  );
}

UddDetail.layout = Admin;

UddDetail.defaultProps = {}

UddDetail.propTypes = {}

// TODO : with the ID from the previous page, fetch admin data

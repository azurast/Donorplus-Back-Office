import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_DONOR_DETAIL } from "../../../services/graphql/queries/donorQueries";
import Admin from "../../../layouts/Admin";

export default function DonorDetail() {

  const router = useRouter();
  const { props, donorid } = router.query;

  const { loading, error, data } = useQuery(GET_DONOR_DETAIL, {
    variables: { donorId: donorid },
  });

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error);
    return null;
  }

  const donorsDetail = data.getPendonorDetail;
  console.log("===donorsDetail", donorsDetail);

  return(
    <>
      <h1>{donorsDetail.fullName}</h1>
    </>
  );
}

DonorDetail.layout = Admin;

DonorDetail.defaultProps = {}

DonorDetail.propTypes = {}

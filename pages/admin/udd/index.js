import React from "react";
import PropTypes from "prop-types"
import { gql } from "@apollo/client"
import client from "../../../apollo-client"
import App from "next/app"

import Admin from "layouts/Admin"
import UddTable from "../../../components/UddTable/UddTable";

export default function Udds({ udds }) {

    return(
        <UddTable
          color={"light"}
          data={udds}
        />
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

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query getAllUdd {
        getAllPmi {
          id
          branchName
          branchSize
        }
      }
    `
  });

  console.log('===data', data);

  return {
    props: {
      udds: data.getAllPmi
    }
  }
}

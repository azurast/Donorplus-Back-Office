import React from "react";
import PropTypes from "prop-types"
import { gql } from "@apollo/client"
import client from "../../../apollo-client"
import { GET_ALL_UDDS } from "../../../services/graphql/queries/uddQueries";

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
      query: GET_ALL_UDDS
    // query: gql`
    //   query getAllUdd {
    //     getAllPmi {
    //       id
    //       branchName
    //       branchSize
    //     }
    //   }
    // `
  });

  return {
    props: {
      udds: data.getAllPmi
    }
  }
}

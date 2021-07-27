import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"
import UddTable from "../../../components/UddTable/UddTable";

export default function Udds() {

    return(
        <UddTable color={"light"}/>
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

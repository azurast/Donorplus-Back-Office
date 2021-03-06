import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"

export default function PlasmaDonor() {

    return(
        <div>Test</div>
    );
}

PlasmaDonor.layout = Admin;

PlasmaDonor.defaultProps = {
    color: "light",
    showCards: true,
    navigationTitle: "Donor Plasma"
};

PlasmaDonor.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

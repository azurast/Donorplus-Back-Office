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
};

PlasmaDonor.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

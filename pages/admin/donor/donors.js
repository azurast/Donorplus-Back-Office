import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"

export default function Donors() {

    return(
        <div>Test</div>
    );
}

Donors.layout = Admin;

Donors.defaultProps = {
    color: "light",
    showCards: false,
    navigationTitle: "Pendonor"
};

Donors.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

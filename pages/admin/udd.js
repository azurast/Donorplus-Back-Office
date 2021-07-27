import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"

export default function UDD() {

    return(
        <div>Test</div>
    );
}

UDD.layout = Admin;

UDD.defaultProps = {
    color: "light",
    showCards: false,
    navigationTitle: "Unit Donor Darah"
};

UDD.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

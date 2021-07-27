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
};

UDD.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

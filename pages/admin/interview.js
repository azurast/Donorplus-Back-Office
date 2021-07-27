import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"

export default function Interview() {

    return(
        <div>Test</div>
    );
}

Interview.layout = Admin;

Interview.defaultProps = {
    color: "light",
};

Interview.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

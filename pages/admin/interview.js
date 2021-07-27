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
    showCards: true,
    navigationTitle: "Wawancara"
};


Interview.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

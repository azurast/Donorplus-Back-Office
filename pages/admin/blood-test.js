import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"

export default function BloodTest() {

    return(
        <div>Test</div>
    );
}

BloodTest.layout = Admin;

BloodTest.defaultProps = {
    color: "light",
    showCards: true,
    navigationTitle: "Tes Darah"
};

BloodTest.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

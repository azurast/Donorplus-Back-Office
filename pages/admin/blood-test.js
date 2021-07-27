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
};

BloodTest.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

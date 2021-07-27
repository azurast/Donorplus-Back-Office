import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"

export default function Setting() {

    return(
        <div>Test</div>
    );
}

Setting.layout = Admin;

Setting.defaultProps = {
    color: "light",
    showCards: false,
    navigationTitle: "Pengaturan"
};

Setting.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    showCards: PropTypes.bool,
    navigationTitle: PropTypes.string
};

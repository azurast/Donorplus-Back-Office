import React from "react";
import PropTypes from "prop-types"

import Admin from "layouts/Admin"
import SlotTable from "../../../components/Table/SlotTable";

export default function Setting() {

    return(
        <div className="flex">
            <SlotTable/>
            <SlotTable/>
            <SlotTable/>
            <SlotTable/>
            <SlotTable/>
        </div>
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

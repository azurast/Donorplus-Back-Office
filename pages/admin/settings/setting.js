import React from "react";
import PropTypes from "prop-types"
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_UDD_SCHEDULE } from "../../../services/graphql/queries/uddQueries";

import Admin from "layouts/Admin"
import SlotTable from "../../../components/Table/SlotTable";

export default function Setting() {

    const {data, loading, error} = useQuery(GET_UDD_SCHEDULE);

    if (loading) {
        return <h2>Loading</h2>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const allSchedule = data.getAllJadwal
    return(
        <div className="flex">
            {
                allSchedule.map((each) => {
                    return (<SlotTable schedule={each}/>);
                })
            }
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

import React from "react";
import PropTypes from "prop-types"
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_UDD_SCHEDULE } from "../../../services/graphql/queries/uddQueries";

import Admin from "layouts/Admin"
import SlotTable from "../../../components/Table/SlotTable";

export default function Setting() {

    const {data, loading, error} = useQuery(GET_UDD_SCHEDULE);
    var allSchedule = []

    if (loading) {
        return <h2>Loading</h2>
    }

    if (error) {
        console.error(error);
        return null;
    }

    if (data) {
        allSchedule = data.getAllJadwal.slice();
        // var test = allSchedule.slice()
        allSchedule.sort(function(a, b){
            return a.dayInt - b.dayInt;
        });
    }

    return(
        <div className="flex flex-row flex-wrap">
            {
                allSchedule.map((each) => {
                    return (<SlotTable schedule={each} key={each.id}/>);
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

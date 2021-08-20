import React from "react";
import PropTypes from "prop-types"
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_UDD_SCHEDULE } from "../../../services/graphql/queries/uddQueries";

import Admin from "layouts/Admin"
import SlotTable from "../../../components/Table/SlotTable";

export default function Setting() {

    // function sort_days(days) {
    //     var day_of_week = new Date().getDay();
    //     var list = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    //     var sorted_list = list.slice(day_of_week).concat(list.slice(0,day_of_week));
    //     return days.sort(function(a,b) { return sorted_list.indexOf(a) > sorted_list.indexOf(b); });
    // }

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
            <SlotTable
                allSchedule={allSchedule}
            />
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

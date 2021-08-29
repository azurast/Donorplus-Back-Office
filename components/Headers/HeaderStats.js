import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITY_STAGES_COUNT } from "../../services/graphql/queries/activityQueries";
import Cookies from "js-cookie";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({ showCards }) {

  const [branchId, setBranchId] = useState(Cookies.get("branch"));

  const { data, loading, error } = useQuery(GET_ACTIVITY_STAGES_COUNT, {
    variables: {
      branchId: branchId
    }
  });

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error);
    return null;
  }

  const interviewCount = data.getActivityForInterview.length;
  const bloodTestCount = data.getActivityForBloodTest.length;
  const donorCount = data.getActivityForDonor.length;

  const allCount = interviewCount + bloodTestCount + donorCount;

  return (
    <>
      {/* Header */}
      <div className="relative bg-red-500 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
             {/*Card stats*/}
             {
                 showCards ? <div className="flex flex-wrap">
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                         <CardStats
                             statSubtitle="Semua"
                             statTitle={allCount}
                             statArrow="up"
                             statPercent="3.48"
                             statPercentColor="text-emerald-500"
                             statDescripiron="Since last month"
                             statIconName="all"
                             statIconColor="bg-red-500"
                         />
                     </div>
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                         <CardStats
                             statSubtitle="Wawancara"
                             statTitle={interviewCount}
                             statArrow="down"
                             statPercent="3.48"
                             statPercentColor="text-red-500"
                             statDescripiron="Since last week"
                             statIconName="interview"
                             statIconColor="bg-orange-500"
                         />
                     </div>
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                         <CardStats
                             statSubtitle="Tes Darah"
                             statTitle={bloodTestCount}
                             statArrow="down"
                             statPercent="1.10"
                             statPercentColor="text-orange-500"
                             statDescripiron="Since yesterday"
                             statIconName="blood-test"
                             statIconColor="bg-pink-500"
                         />
                     </div>
                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                         <CardStats
                             statSubtitle="Donor Plasma"
                             statTitle={donorCount}
                             statArrow="up"
                             statPercent="12"
                             statPercentColor="text-emerald-500"
                             statDescripiron="Since last month"
                             statIconName="plasma-donor"
                             statIconColor="bg-lightBlue-500"
                         />
                     </div>
                 </div> : <div></div>
             }
          </div>
        </div>
      </div>
    </>
  );
}

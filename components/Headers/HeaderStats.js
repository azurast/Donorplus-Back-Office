import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({ showCards }) {
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
                             statTitle="42"
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
                             statTitle="15"
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
                             statTitle="13"
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
                             statTitle="14"
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

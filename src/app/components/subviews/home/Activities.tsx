import React, { FunctionComponent } from "react";
import ActivityCard from "./ActivityCard";

import { allText, allHeadings } from "@/Config";

type ActivitiesProps = {
  lang: string;
};
const Activites : FunctionComponent<ActivitiesProps> = ({lang}) => {
    return (
        <div>
        <h1 className=" text-center pb-12 text-3xl text-logored font-semibold">
            {allHeadings[lang == "en" ? "en" : "fr"]["activities"]}
        </h1>
        <div className="flex flex-wrap justify-center items-center">
            <div className="mx-4">
            <ActivityCard image="/ActivitiesNight.jpg" 
            title={allHeadings[lang == "en" ? "en" : "fr"]["activitiesNight"]} 
            description={allText[lang == "en" ? "en" : "fr"]["activitiesNight"]} />
            </div>
            <div className="mx-4">
            <ActivityCard image="/RecitalPicture.jpg" 
            title={allHeadings[lang == "en" ? "en" : "fr"]["semesterRecital"]} 
            description={allText[lang == "en" ? "en" : "fr"]["semesterRecital"]} />
            </div>
        </div>
        </div>
    );
}

export default Activites;
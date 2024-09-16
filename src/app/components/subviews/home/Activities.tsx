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
            {/* <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard /> */}
            <div className="mx-4">
            <ActivityCard image="/ActivitiesNight.jpg" title="Activities Night" description="A night of fun and games for students to relax and have fun." />
            </div>
            <div className="mx-4">
            <ActivityCard image="/RecitalPicture.jpg" title="End of Semester Recital" description="At the end of every teaching semester, a fun, low-stake recital is hosted to show off what students have learned." />
            </div>
        </div>
        </div>
    );
}

export default Activites;
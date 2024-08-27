import React from "react";
import ActivityCard from "./ActivityCard";

const Activites = () => {
    return (
        <div>
        <h1 className=" text-center pb-12 text-3xl text-logored font-semibold">What we do</h1>
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
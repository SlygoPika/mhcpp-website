import React from "react";
import Image from "next/image";

const TeamPicture = () => {
    return (
        <div>
            <Image 
            src="/2023Staff.jpg" alt="Staff Picture" 
            width={1920} height={1080}
            className="w-full h-1/2 max-h-[30rem] left-0 object-cover "/>

        </div>
    );
}

export default TeamPicture;
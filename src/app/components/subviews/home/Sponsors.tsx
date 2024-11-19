import React, { FunctionComponent } from "react";
import Image from "next/image";

import { sponsors, allHeadings } from "@/Config";

type SponsorsProps = {
  lang: string;
};
const Sponsors : FunctionComponent<SponsorsProps> = ({lang}) => {
    return (
        <div>
        <h1 className=" text-center pb-12 text-3xl text-logored font-semibold">
            {allHeadings[lang == "en" ? "en" : "fr"]["sponsors"]}
        </h1>

        <div className="flex flex-wrap justify-center items-center">
            {sponsors[lang == "en" ? "en" : "fr"].map((sponsor, index) => {
                return (
                    <div key={index} className="m-4">
                        <a href={sponsor.link} target="_blank">
                            <Image
                                src={"/Sponsors/" + sponsor.logo}
                                alt={sponsor.name}
                                width={500}
                                height={500}
                            />
                        </a>
                    </div>
                );
            })}
        </div>
        </div>
    );
}

export default Sponsors;
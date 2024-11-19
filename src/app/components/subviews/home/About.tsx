import React, { FunctionComponent } from "react";
import { allText, allHeadings } from "@/Config";

type AboutUsProps = {
  lang: string;
};

const About : FunctionComponent<AboutUsProps> = ({lang}) => {
  return (
    <div>
      <h1 className=" text-center pb-12 text-3xl text-logored font-semibold">
        {allHeadings[lang == "en" ? "en" : "fr"]["aboutUs"]}
      </h1>
      <p>
        {
        allText[lang == "en" ? "en" : "fr"]["aboutUs"].map((paragraph: string, index: number) => {
          return (
            <span key={index}>
              {paragraph}
              <br /> <br />
            </span>
          );
        })
        }
      </p>
    </div>
  );
}

export default About;

import React, { FunctionComponent } from "react";
import { allText, allHeadings, allLinks } from "@/Config";

type ContactUsProps = {
  lang: string;
};


const ContactUs : FunctionComponent<ContactUsProps> = ({lang}) => {
    return (
        <div className="my-10">
            <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">
              {allHeadings[lang == "en" ? "en" : "fr"]["contactUsParents"]}
            </h1>
            <p className="text-justify">
              {allText[lang == "en" ? "en" : "fr"]["contactUsParents"]}
            </p>
            <ul className="list-disc mt-6">
              <li className="ml-10"><span className="font-bold">Email:</span> {allLinks["emailContact"]}</li>
            </ul>
          </div>
    );
}

export default ContactUs;
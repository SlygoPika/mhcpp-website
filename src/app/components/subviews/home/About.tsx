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
      aaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
      exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis 
      autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
      vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
  );
}

export default About;

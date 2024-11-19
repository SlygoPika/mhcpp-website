
// Components
import Hero from "../subviews/home/Hero";
import About from "../subviews/home/About";
import Button from "../Button";
import Activities from "../subviews/home/Activities";
import TeamPicture from "../TeamPicture";
import Sponsors from "../subviews/home/Sponsors";

import { allLinks } from "@/Config";

export default function HomeView({lang} : {lang: string}) {

  return (
    <main className="">
      <Hero lang={lang} />
      <div className="mx-[10%] sm:mx-[20%] my-24">
        <div id="aboutus"></div>
        <About lang={lang}/>
        <div className="my-10 grid grid-cols-2 xl:grid-cols-4 content-center">
          <div className="hidden xl:block"/>
          <div className="flex justify-center">
            <a target="_blank" href={allLinks["volunteerApplication"]}>
              <Button text={
                lang == "en" ? "Volunteer with us" : "Devenir bénévole"
              } />
            </a>
          </div>
          <div className="flex justify-center">
            <a target="_blank" href={"mailto:" + allLinks["emailFinance"] + 
              "?subject=Sponsorship Opportunity&cc=" + allLinks["emailContact"]}>
              <Button 
              text={
                lang == "en" ? "Become a Sponsor" : "Devenir un sponsor"
              } />
            </a>
          </div>
        </div>
      </div>
        <TeamPicture />
      <div className="mx-[10%] sm:mx-[20%] my-24">
        <div id="activities"></div>
        <Activities lang={lang}/>
      </div>
      <div className="mx-[10%] sm:mx-[20%] my-24">
        <div id="sponsors"></div>
        <Sponsors lang={lang}/>
      </div>
    </main>
  );
}

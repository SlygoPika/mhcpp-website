"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

// Components
import Hero from "./components/subviews/home/Hero";
import About from "./components/subviews/home/About";
import Button from "./components/Button";
import Modal from "./components/Modal";
import EmailForm from "./components/EmailForm";
import Activities from "./components/subviews/home/Activities";
import Socials from "./components/subviews/home/Socials";
import TeamPicture from "./components/TeamPicture";

import { allText, allHeadings, allLinks } from "@/Config";

export default function Home() {
  const [userLang, setUserLang] = useState("en");
  useEffect(() => {
    if (navigator.language.includes("fr"))
      {
          setUserLang("fr");
      }
  }, []);

  return (
    <main className="">
      <Hero lang={userLang} />
      <div className="mx-[10%] sm:mx-[20%] my-24">
        <div id="aboutus"></div>
        <About lang={userLang}/>
        <div className="my-10 grid grid-cols-2 xl:grid-cols-4 content-center">
          <div className="hidden xl:block"/>
          <div className="flex justify-center">
            <a target="_blank" href={allLinks["volunteerApplication"]}>
              <Button text={
                userLang == "en" ? "Become a Volunteer" : "Devenir un bénévole"
              } />
            </a>
          </div>
          <div className="flex justify-center">
            <a target="_blank" href={"mailto:" + allLinks["emailFinance"] + 
              "?subject=Sponsorship Oppurtunity&cc=" + allLinks["emailContact"]}>
              <Button 
              text={
                userLang == "en" ? "Become a Sponsor" : "Devenir un sponsor"
              } />
            </a>
          </div>
        </div>
      </div>
        <TeamPicture />
      <div className="mx-[10%] sm:mx-[20%] my-24">
        <div id="activities"></div>
        <Activities lang={userLang}/>
      </div>
    </main>
  );
}

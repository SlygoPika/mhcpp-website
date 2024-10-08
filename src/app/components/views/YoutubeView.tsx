"use client"
import { useState, useEffect } from "react";
import VideoCarousel from "../subviews/youtube/VideoCarousel";
import HorizontalRule from "../HorizontalRule";
import SocialIcon from "../footer/SocialIcon";

import { Switch } from "@material-tailwind/react"

import {allText, allHeadings, allLinks, level1EmbedsEN, level1EmbedsFR, level2EmbedsEN, level2EmbedsFR, level3EmbedsEN, level3EmbedsFR } from "@/Config";

export default function Youtube({lang} : {lang: string}) {

    const [levelLang, setLevelLang] = useState({
      level1: lang,
      level2: lang,
      level3: lang
    });

    return (
      <main className="flex min-h-screen flex-col justify-between py-20">
        <div className="flex min-h-screen flex-col items-center mx-[10%] sm:mx-[20%] mt-16 mb-12">
        <h1 className=" text-center pb-12 text-4xl text-logored font-semibold">{allHeadings[lang == "en" ? "en" : "fr"]["youtube"]}</h1>
        <p>
        {allText[lang == "en" ? "en" : "fr"]["youtubeDescription"]}
        </p>

      <div className="mt-3">
      <SocialIcon link={allLinks["youtube"]}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
          <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
        </svg>
      </SocialIcon>
      </div>

      <HorizontalRule />

      <h1 id="level1" className=" text-center pb-6 text-3xl text-logored font-semibold">
        {allHeadings[lang == "en" ? "en" : "fr"]["level1"]}
      </h1>
      <p>
        {allText[lang == "en" ? "en" : "fr"]["level1Text"]}
      </p>
      <div className="mt-5">
      <Switch className="h-full w-full checked:bg-logored"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        label={lang == "en" ? "French" : "Anglais"} crossOrigin={undefined} onClick={() => setLevelLang({
        level1: levelLang.level1 == "en" ? "fr" : "en",
        level2: levelLang.level2,
        level3: levelLang.level3
      })} />
      </div>
      <div className="w-full h-56 md:w-4/5 md:h-72 lg:h-96 my-2">
      <VideoCarousel embedLinks={levelLang.level1 == "en" ? level1EmbedsEN : level1EmbedsFR}/>
      </div>

      <HorizontalRule />

      <h1 id="level2" className=" text-center pb-6 text-3xl text-logored font-semibold">
        {allHeadings[lang == "en" ? "en" : "fr"]["level2"]}
      </h1>
      <p>
        {allText[lang == "en" ? "en" : "fr"]["level2Text"]}
      </p>
      <div className="mt-5">
      <Switch className="h-full w-full checked:bg-logored"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        label={lang == "en" ? "French" : "Anglais"} crossOrigin={undefined} onClick={() => setLevelLang({
        level1: levelLang.level1,
        level2: levelLang.level2 == "en" ? "fr" : "en",
        level3: levelLang.level3
      })} />
      </div>
      <div className="w-full h-56 md:w-4/5 md:h-72 lg:h-96 my-2">
      <VideoCarousel embedLinks={levelLang.level2 == "en" ? level2EmbedsEN : level2EmbedsFR}/>
      </div>

      <HorizontalRule />

      <h1 id="level3" className=" text-center pb-6 text-3xl text-logored font-semibold">
        {allHeadings[lang == "en" ? "en" : "fr"]["level3"]}
      </h1>
      <p>
        {allText[lang == "en" ? "en" : "fr"]["level3Text"]}
      </p>
      <div className="mt-5">
      <Switch className="h-full w-full checked:bg-logored"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        label={lang == "en" ? "French" : "Anglais"} crossOrigin={undefined} onClick={() => setLevelLang({
        level1: levelLang.level1,
        level2: levelLang.level2,
        level3: levelLang.level3 == "en" ? "fr" : "en"
      })} />
      </div>
      <div className="w-full h-56 md:w-4/5 md:h-72 lg:h-96 my-2">
      <VideoCarousel embedLinks={levelLang.level3 == "en" ? level3EmbedsEN : level3EmbedsFR}/>
      </div>
        </div>
      </main>
    );
  }
  
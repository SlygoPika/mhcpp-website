"use client"
import ImageCarousel from "../ImageCarousel";
import React, { useEffect, useState } from "react";
import ContactUs from "../ContactUs";
import HorizontalRule from "../HorizontalRule";
import { allText, allHeadings, roughCalendar } from "@/Config";

function uniqueItems(array: string[]) {
  return Array.from(new Set(array));
}

export default function VolunteersView({lang} : {lang: string}) {

  const [imgArray, setImgArray] = useState<string[]>([]);

  useEffect(() => {
    var bCheckEnabled = true;
    var bFinishCheck = false;

    var img : HTMLImageElement;
    var i = 1;

    var myInterval = setInterval(loadImage, 10);

    function loadImage() {

        if (bFinishCheck) {
            clearInterval(myInterval);
            return;
        }

        if (bCheckEnabled) {

            bCheckEnabled = false;

            img = new Image();
            img.onload = fExists;
            img.onerror = fDoesntExist;
            img.src = '/VolunteerImages/' + i + '.JPG';
        }

    }

    function fExists() {
        if (imgArray.length < i) {
          setImgArray(imgArray => [...imgArray, img.src]);
        }
        
        i++;
        bCheckEnabled = true;
    }

    function fDoesntExist() {
        bFinishCheck = true;
    }

  }, []);

  function highlightText(text: any, highlight: string) {
    let textarr = text.split(highlight);

    return [textarr[0], <span key={Math.random() * 99999} className="text-logored font-bold">{highlight}</span>, textarr[1]];
  }


    return (
      <main className="flex min-h-screen flex-col justify-between py-20">
        <div className="flex min-h-screen flex-col items-center mx-[10%] sm:mx-[20%] mt-16 mb-12">
          <h1 className=" text-center pb-12 text-4xl text-logored font-semibold">
            {allHeadings[lang == "en" ? "en" : "fr"]["volunteers"]}
          </h1>

          <div className="mb-16">
            <h1 id="whyvolunteer" className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">
              {allHeadings[lang == "en" ? "en" : "fr"]["whyVolunteer"]}
            </h1>
            <p className="text-justify">
              {allText[lang == "en" ? "en" : "fr"]["whyVolunteer"]}
            </p>
            <div className="w-full flex flex-row justify-center">
              <div className="w-full lg:w-4/6 h-60 md:h-80 m-2">
                <ImageCarousel images={uniqueItems(imgArray)}/>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 id="becometeacher" className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">
              {allHeadings[lang == "en" ? "en" : "fr"]["becomeTeacher"]}
            </h1>
            <p className="text-justify mb-6">
                {allText[lang == "en" ? "en" : "fr"]["becomeTeacher"]}
            </p>
          </div>
          <h1 className="text-center sm:text-left pb-8 text-2xl text-logored font-semibold">
            {allHeadings[lang == "en" ? "en" : "fr"]["roughCalendar"]}
          </h1>
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {lang == "en" ? "September" : "Septembre"}
              </p>
              <ul className="list-disc">
                <li className="ml-6">
                  {
                    highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["September"][0], lang == "en" ? "Recruitment" : "Recrutement")
                  }
                </li>
                <li className="ml-6">
                  {
                    highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["September"][1], "Orientation")
                  }
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {lang == "en" ? "October-November" : "Octobre-Novembre"}
              </p>
              <ul className="list-disc">
                <li className="ml-6">
                  {
                    highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["October-November"][0], lang == "en" ? "lessons" : "Leçons")
                  }
                </li>
                <li className="ml-6">
                  {roughCalendar[lang == "en" ? "en" : "fr"]["October-November"][1]}
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {lang == "en" ? "December" : "Décembre"}
              </p>
              <p>
                {
                  highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["December"][0], lang == "en" ? "recital" : "Récital")
                }
              </p>
            </div>
            <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {lang == "en" ? "January" : "Janvier"}
              </p>
              <ul className="list-disc">
                <li className="ml-6">
                  {
                    highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["January"][0], lang == "en" ? "Recruitment" : "Recrutement")
                  }
                </li>
                <li className="ml-6">
                  {
                    highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["January"][1], "Orientation")
                  }
                </li>
              </ul>
            </div>
            <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {lang == "en" ? "February-March" : "Février-Mars"}
              </p>
              <ul className="list-disc">
                <li className="ml-6">
                  {
                    highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["February-March"][0], lang == "en" ? "lessons" : "Leçons")
                  }
                </li>
                <li className="ml-6">
                  {roughCalendar[lang == "en" ? "en" : "fr"]["February-March"][1]}
                </li>
              </ul>
            </div>
            <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {lang == "en" ? "April" : "Avril"}
              </p>
              <p>
                {
                  highlightText(roughCalendar[lang == "en" ? "en" : "fr"]["April"][0], lang == "en" ? "recital" : "Récital")
                }
              </p>
            </div>
          </div>
          <HorizontalRule />
          <div id="contactus" className="w-full">
            <ContactUs lang={lang} />
          </div>
        </div>
      </main>
    );
  }
  
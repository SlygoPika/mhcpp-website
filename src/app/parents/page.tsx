"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContactUs from "../components/ContactUs";
import Button from "../components/Button";
import HorizontalRule from "../components/HorizontalRule";
import ImageCarousel from "../components/ImageCarousel";
import { allText, allHeadings, allLinks } from "@/Config";

function uniqueItems(array: string[]) {
  return Array.from(new Set(array));
}

export default function Parents() {
  const [userLang, setUserLang] = useState("en");
    useEffect(() => {
    if (navigator.language.includes("fr"))
      {
          setUserLang("fr");
      }
    }, []);

  const [imgArray, setImgArray] = useState<string[]>([]);

  useEffect(() => {
    var bCheckEnabled = true;
    var bFinishCheck = false;

    var img : HTMLImageElement;
    var i = 1;

    var myInterval = setInterval(loadImage, 1);

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
            img.src = '/ParentsImages/' + i + '.JPG';
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

    return (
      <main className="flex min-h-screen flex-col justify-between py-20">
        <div className="flex min-h-screen flex-col items-center mx-[10%] sm:mx-[20%] mt-16 mb-12">
          <h1 id="resources" className=" text-center pb-12 text-4xl text-logored font-semibold">
            {allHeadings[userLang == "en" ? "en" : "fr"]["parents"]}
          </h1>
          <div className="mb-16">
              <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">
                {allHeadings[userLang == "en" ? "en" : "fr"]["resources"]}
              </h1>
              <h1 className="text-center sm:text-left pb-6 text-xl text-black font-semibold">
                {allHeadings[userLang == "en" ? "en" : "fr"]["registration"]}
              </h1>
              <p className="text-justify">
                {allText[userLang == "en" ? "en" : "fr"]["registration"]}
              </p>

              <div className="w-full flex flex-row justify-center">
                <div className="w-full sm:w-4/6 h-60 sm:h-80 m-2">
                  <ImageCarousel images={uniqueItems(imgArray)}/>
                </div>
              </div>
              <h1 className="text-center sm:text-left pt-8 pb-6 text-xl text-black font-semibold">
                {allHeadings[userLang == "en" ? "en" : "fr"]["keyboard"]}
              </h1>
              <p className="text-justify">
                {allText[userLang == "en" ? "en" : "fr"]["keyboardLending"]}
              </p>

              <h1 className="text-center sm:text-left pt-8 pb-6 text-xl text-black font-semibold">
                {allHeadings[userLang == "en" ? "en" : "fr"]["youtubeParents"]}
              </h1>
              <p className="text-justify mb-12">
                {allText[userLang == "en" ? "en" : "fr"]["youtubeParents"]}
              </p>
              <div className="w-full flex flex-row justify-center my-6">
                <Link href="/youtube">
                  <Button text={userLang == "en" ? "Check out our YouTube" : "Visitez notre chaîne"}
                  onClick={() => {}} />
                </Link>
              </div>
              
            </div>
            <HorizontalRule />
            <div id="contactus" className="w-full">
              <ContactUs lang={userLang} />
            </div>
        </div>

      </main> 
    );
  }
  
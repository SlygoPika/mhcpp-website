"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContactUs from "../components/ContactUs";
import Button from "../components/Button";
import HorizontalRule from "../components/HorizontalRule";
import ImageCarousel from "../components/ImageCarousel";
import { allText } from "@/Config";

function uniqueItems(array: string[]) {
  return Array.from(new Set(array));
}

export default function Parents() {
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
        <div className="flex min-h-screen flex-col items-center mx-[20%] mt-16 mb-12">
          <h1 id="resources" className=" text-center pb-12 text-4xl text-logored font-semibold">To Parents</h1>
          <div className="mb-16">
              <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">Resources</h1>
              <h1 className="text-center sm:text-left pb-8 text-xl text-black font-semibold">Registration</h1>
              <p className="text-justify">
                {allText["en"]["registration"]}
              </p>

              <div className="w-full flex flex-row justify-center">
                <div className="w-4/6 h-80 m-2">
                  <ImageCarousel images={uniqueItems(imgArray)}/>
                </div>
              </div>
              <h1 className="text-center sm:text-left py-8 text-xl text-black font-semibold">Keyboard Lending</h1>
              <p className="text-justify">
                {allText["en"]["keyboardLending"]}
              </p>
              <div className="w-full flex flex-row justify-center my-6">
                <a href="/">
                  <Button text="Apply for Keyboard" onClick={() => {}} />
                </a>
              </div>

              <h1 className="text-center sm:text-left pb-8 text-xl text-black font-semibold">Youtube Page</h1>
              <p className="text-justify mb-12">
                {allText["en"]["youtubeParents"]}
              </p>
              <div className="w-full flex flex-row justify-center my-6">
                <a href="/">
                  <Button text="Check out our Youtube" onClick={() => {}} />
                </a>
              </div>
              
            </div>
            <HorizontalRule />
            <div id="contactus"></div>
            <ContactUs />
        </div>

      </main> 
    );
  }
  
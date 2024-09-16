"use client"
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import ContactUs from "../components/ContactUs";
import HorizontalRule from "../components/HorizontalRule";
import { allText, allHeadings } from "@/Config";

function uniqueItems(array: string[]) {
  return Array.from(new Set(array));
}

export default function Volunteers() {
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

    return (
      <main className="flex min-h-screen flex-col justify-between py-20">
        <div className="flex min-h-screen flex-col items-center mx-[20%] mt-16 mb-12">
          <h1 className=" text-center pb-12 text-4xl text-logored font-semibold">
            {allHeadings[userLang == "en" ? "en" : "fr"]["volunteers"]}
          </h1>

          <div className="mb-16">
            <h1 id="whyvolunteer" className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">
              {allHeadings[userLang == "en" ? "en" : "fr"]["whyVolunteer"]}
            </h1>
            <p className="text-justify">
            aaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 

      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 

      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
            </p>
            <div className="w-full flex flex-row justify-center">
              <div className="w-full lg:w-2/3 h-80 m-2">
                <ImageCarousel images={uniqueItems(imgArray)}/>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 id="becometeacher" className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">
              {allHeadings[userLang == "en" ? "en" : "fr"]["becomeTeacher"]}
            </h1>
            <p className="text-justify">
                      aaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 

                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 

                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
            </p>
            <div className="w-full flex flex-row justify-center">
              <a href="/">
                <Button text="Follow Our Calendar" onClick={() => {}} />
              </a>
            </div>
          </div>
          <h1 className="text-center sm:text-left pb-8 text-2xl text-logored font-semibold">
            {allHeadings[userLang == "en" ? "en" : "fr"]["roughCalendar"]}
          </h1>
          <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
            <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {userLang == "en" ? "September" : "Septembre"}
              </p>
              <ul className="list-disc">
                <li className="ml-6">Fall Semester <span className="text-logored font-bold">Recruitment</span>. Register at our booth during club day</li>
                <li className="ml-6"> <span className="text-logored font-bold">Activities Night</span>. Follow <a target="_blank" href="https://www.instagram.com/ssmuaeum/" className="text-blue-600 hover:underline">SSMU</a> on instagram to be up to date.</li>
              </ul>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {userLang == "en" ? "October-November" : "Octobre-Novembre"}
              </p>
              <p>Fall Semester Teaching</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {userLang == "en" ? "December" : "Décembre"}
              </p>
              <p>Fall Semester Recital.</p>
            </div>
            <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {userLang == "en" ? "January" : "Janvier"}
              </p>
              <ul className="list-disc">
                <li className="ml-6">Winter Semester <span className="text-logored font-bold">Recruitment</span>. Register at our booth during club day</li>
                <li className="ml-6"> <span className="text-logored font-bold">Activities Night</span>. Follow <a target="_blank" href="https://www.instagram.com/ssmuaeum/" className="text-blue-600 hover:underline">SSMU</a> on instagram to be up to date.</li>
              </ul>
            </div>
            <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {userLang == "en" ? "February-March" : "Février-Mars"}
              </p>
              <p>Winter Semester Teaching</p>
            </div>
            <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-full mb-4" role="alert">
              <p className="font-bold">
                {userLang == "en" ? "April" : "Avril"}
              </p>
              <p>Winter Semester Recital</p>
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
  
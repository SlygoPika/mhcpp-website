"use client"
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import ContactUs from "../components/ContactUs";
import HorizontalRule from "../components/HorizontalRule";

import { userLang } from "@/Config";

function uniqueItems(array: string[]) {
  return Array.from(new Set(array));
}

export default function Volunteers() {
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
          <h1 className=" text-center pb-12 text-4xl text-logored font-semibold">To Our Volunteers</h1>

          <div className="mb-16">
            <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">Why Volunteer?</h1>
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
              <div className="w-4/6 h-80 m-2">
                <ImageCarousel images={uniqueItems(imgArray)}/>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">Become a Teacher</h1>
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
          <h1 className="text-center sm:text-left pb-8 text-xl text-logored font-semibold">Rough Year Calendar</h1>
          <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-2/3 mb-4" role="alert">
            <p className="font-bold">September</p>
            <p>Fall Semester Recruitment. You may register at our booth during club day</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-2/3 mb-4" role="alert">
            <p className="font-bold">October-November</p>
            <p>Fall Semester Teaching</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 text-black p-4 w-2/3 mb-4" role="alert">
            <p className="font-bold">December</p>
            <p>Fall Semester Recital.</p>
          </div>
          <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-2/3 mb-4" role="alert">
            <p className="font-bold">January</p>
            <p>Winter Semester Recruitment. You may register at our booth during club day</p>
          </div>
          <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-2/3 mb-4" role="alert">
            <p className="font-bold">February-April</p>
            <p>Winter Semester Recruitment. You may register at our booth during club day</p>
          </div>
          <div className="bg-light-blue-50 border-l-4 border-light-blue-300 text-black p-4 w-2/3 mb-4" role="alert">
            <p className="font-bold">May</p>
            <p>Winter Semester Recruitment. You may register at our booth during club day</p>
          </div>
          <HorizontalRule />
          <ContactUs />
        </div>
      </main>
    );
  }
  
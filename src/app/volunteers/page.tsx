"use client"
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel";
import React, { useEffect, useState } from "react";

import { userLang } from "@/Config";

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
      <main className="flex min-h-screen flex-col justify-between p-24">
        <div className="flex min-h-screen flex-col items-center mx-[20%] mt-16 mb-12">
          <h1 className=" text-center pb-12 text-4xl text-logored font-semibold">To Our Volunteers</h1>

          <div className="">
            <h1 className="text-center sm:text-left pb-12 text-3xl text-logored font-semibold">Why Volunteer?</h1>
            <div className="flex flex-col sm:flex-row justify-between">
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
          </div>
          <div className="w-4/5 h-96 my-2">
            <ImageCarousel images={imgArray.filter((img, index) => {return index % 2 == 0})}/>
            </div>
          
        </div>
      </main>
    );
  }
  
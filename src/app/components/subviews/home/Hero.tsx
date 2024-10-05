import React, { FunctionComponent } from "react";
import { allHeadings } from "@/Config";
import Image from 'next/image'

type HeroProps = {
  lang: string;
};

// This is a simple component that will be used to display a hero section on the home page.
// background image image that spans the entire width of the screen. Centered title and logo image
const Hero : FunctionComponent<HeroProps> = ({lang}) => {
  return (
    <div className=" bg-black/[.9] text-white relative z-0">
        <Image 
          height={1080} width={1920}
          src="/SpringConcert1.jpg" 
          alt="Spring Concert" 
          className="w-full h-full object-cover absolute opacity-20 blur-sm"
        />
        <div className='z-10 h-[100vh] sm:h-[66vh]'>
            <section className="p-20 h-full flex justify-center items-center text-center flex-wrap sm:flex-nowrap z-30">
                <h1 className='mx-10 sm:mr-36 text-center sm:text-left sm:w-1/3 text-5xl uppercase subpixel-antialiased'>
                {allHeadings[lang == "en" ? "en" : "fr"]["home"]}
                </h1>
                <Image
                src="/Logo_Transparent.png"
                alt="Logo"
                width={200}
                height={200}
                className="z-30 w-1/5 min-w-48"
                />
            </section>
        </div>
    </div>
  )
}

export default Hero;
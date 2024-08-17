"use client"
import React, { FunctionComponent } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel : FunctionComponent<ImageCarouselProps> = ({images}) => {
  return (
    <Carousel className="rounded-xl my-2" placeholder="Image carousel"
    loop={true}
    autoplay={true}
    autoplayDelay={8000}
    prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
      {images.map((image, index) => (
        <div className="h-full flex flex-row justify-around">
            <img className="h-full" src={image} key={index}/>
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
"use client"
import React, { FunctionComponent } from "react";
import { Carousel } from "@material-tailwind/react";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel : FunctionComponent<ImageCarouselProps> = ({images}) => {
  return (
    <Carousel className="rounded-xl my-2" placeholder="Image carousel">
      {images.map((image, index) => (
        <img src={image} key={index}/>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
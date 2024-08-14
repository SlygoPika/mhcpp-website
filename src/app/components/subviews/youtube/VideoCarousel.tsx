"use client"
import React, { FunctionComponent } from "react";
import { Carousel } from "@material-tailwind/react";
import VideoEmbed from "../../VideoEmbed";
 
type VideoCarouselProps = {
  embedLinks: string[];
};

const VideoCarousel : FunctionComponent<VideoCarouselProps> = ({embedLinks}) => {
  return (
    
    <Carousel className="rounded-xl my-2" placeholder="Youtube video playlist">
      {embedLinks.map((link, index) => (
        <VideoEmbed link={link} key={index}/>
      ))}
    </Carousel>
  );
}

export default VideoCarousel;
// "use client"
// import React, { FunctionComponent } from "react";
// import { EmblaOptionsType } from 'embla-carousel'
// import useEmblaCarousel from 'embla-carousel-react'

// type CarouselProps = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

// const Carousel : FunctionComponent<CarouselProps>= (props) => {
//   const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)


//   return (
//     <section className="max-w-3xl m-auto">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex touch-pan-y touch-pinch-zoom">
//           {slides.map((index) => (
//             <div className="flex-shrink-0 flex-grow-0 min-w-0 pl-[100]" key={index}>
//               <div className="shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)]
//   rounded-[1.8rem]
//   text-[4rem]
//   font-semibold
//   flex
//   items-center
//   justify-center
//   h-[var(--slide-height)]
//   select-none">{index + 1}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Carousel;

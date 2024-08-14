import React, { FunctionComponent } from "react";

type VideoEmbedProps = {
    link : string;
};

const VideoEmbed : FunctionComponent<VideoEmbedProps> = ({link}) => {
    return (
            <iframe 
                className="w-full h-full rounded-xl"
                src={link} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
            />
    );
}

export default VideoEmbed;
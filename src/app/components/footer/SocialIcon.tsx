import React, { FunctionComponent } from "react";

type SocialIconProps = {
    link : string;
    color?: string;
    children: React.ReactNode;
};

const SocialIcon : FunctionComponent<SocialIconProps> = ({link, color, children}) => {
    const colorVariants: { [key: string]: string } = {
        blue: "hover:bg-blue-400/50",
        red: "hover:bg-red-400/50",
        lightblue: "hover:bg-light-blue-400/50",
        pink: "hover:bg-pink-400/50",
    };

    return (
        <a target="_blank" href={link}>
            <div className={`transition ease-in-out duration-300 hover:cursor-pointer w-30 h-30 p-2 flex justify-center items-center 
                ${color == null ? colorVariants["red"] : colorVariants[color]} rounded-3xl`}>
                {children}
            </div>
        </a>
    );
}

export default SocialIcon;
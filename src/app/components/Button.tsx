import Link from "next/link";
import React, { FunctionComponent } from "react";

type ButtonProps = {
    text: string;
    textSize?: string;
    onClick?: () => void;
};

const Button : FunctionComponent<ButtonProps> = ({text, textSize, onClick}) => {
  return (
    <div>
      <button className=" text-lg bg-gradient-to-r from-logored to-red-700 hover:from-red-600 
      hover:to-red-500 text-white font-bold py-2 px-6 rounded-full text-wrap max-w-40"
      onClick={onClick}>
        {textSize ? <span className={"text-" + textSize}>{text}</span> : text}
      </button>
    </div>
  );
}

export default Button;
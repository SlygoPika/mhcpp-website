"use client"
import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";
import React, { FunctionComponent } from "react";
import Image from "next/image";

type ActivityCardProps = {
    title: string;
    description: string;
    image: string;
};

const ActivityCard : FunctionComponent<ActivityCardProps> = ({title, description, image}) => {
    return (
      <Card placeholder={<></>} className=" min-w-[16rem] sm:max-w-[22rem] overflow-hidden">
        <CardHeader placeholder={<></>}
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
          />
        </CardHeader>
        <CardBody placeholder={<></>}>
          <p className="text-xl text-logored font-semibold mb-3">
            {title}
          </p>
          <p className="text-black">
            {description}
          </p>
        </CardBody>
      </Card>
    );
  }

  export default ActivityCard;
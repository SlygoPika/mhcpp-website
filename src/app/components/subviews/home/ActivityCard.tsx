"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import React, { FunctionComponent } from "react";

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
          <img
            src={image}
            alt={title}
          />
        </CardHeader>
        <CardBody placeholder={<></>}>
          <p className="text-xl text-logored font-semibold mb-3">
            {title}
          </p>
          {/* <Typography placeholder={<></>} variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography> */}
          <p className="text-black">
            {description}
          </p>
        </CardBody>
      </Card>
    );
  }

  export default ActivityCard;
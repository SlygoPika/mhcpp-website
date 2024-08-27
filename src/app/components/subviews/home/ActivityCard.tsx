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
      <Card placeholder={<></>} className="max-w-[22rem] overflow-hidden">
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
          <p className="text-xl text-logored font-semibold">
            {title}
          </p>
          <Typography placeholder={<></>} variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default ActivityCard;
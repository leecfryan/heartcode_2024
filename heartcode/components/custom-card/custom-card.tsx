"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { CardFooter } from "../ui/card";

interface CustomCardProps {
  title: string;
  content: string;
  image: string | StaticImageData;
  link?: string; // Optional link prop
}

export function CustomCard({ title, content, image, link }: CustomCardProps) {
  return (
    <Link href={link || "#"} className="flex h-[24rem] max-w-full">
      <CardContainer className="inter-var">
        <CardBody className="flex flex-col justify-center items-center bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] min-h-full w-full rounded-xl p-6 border">
          <CardItem translateZ="100">
            <Image
              src={image}
              height={500}
              width={500}
              className="w-[18rem] h-[10rem] object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {content}
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
}

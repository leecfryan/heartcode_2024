"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface CustomCardProps {
  title: string;
  content: string;
  image: string | StaticImageData;
  link?: string; // Optional link prop
}

export function CustomCard({ title, content, image, link }: CustomCardProps) {
  return (
    <Link href={link || "#"} className="block group">
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full">
            <Image
              src={image}
              height={500}
              width={1000}
              className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
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

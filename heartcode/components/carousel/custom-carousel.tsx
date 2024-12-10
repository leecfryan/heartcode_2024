"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CustomCard } from "@/components/custom-card/custom-card";
import { StaticImageData } from "next/image";

interface CardData {
  title: string;
  content: string;
  image: string | StaticImageData;
  link?: string; // Optional link
}

interface CustomCarouselProps {
  cards: CardData[];
}

export function CustomCarousel({ cards }: CustomCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-lg"
    >
      <CarouselContent className="flex space-x-4">
        {cards.map((card, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full sm:w-1/3">
            <CustomCard {...card} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext/>
    </Carousel>
  );
}


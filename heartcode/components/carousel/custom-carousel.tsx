"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      // className="w-screen h-[30rem] px-4 pr-20 bg-red-200 flex items-center justify-center"
    >
      <CarouselContent className="pb-7">
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/3 md:basis-1/2 sm:basis-1 flex-shrink-0 max-h-[30rem] w-full p-x-10"
          >
            <div className="h-full">
              <CustomCard {...card} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

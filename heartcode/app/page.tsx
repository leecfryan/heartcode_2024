"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { CustomCarousel } from "@/components/carousel/custom-carousel";
import { CustAlertDialog } from "@/components/alert-dialog/alert-dialog";
import { ChartComponent } from "@/components/chart/custom-chart";

const cards = [
  {
    title: "Coke",
    content: "This causes a huge rush in dopamine levels.",
    image: "/assets/Coke.png",
    link: "https://google.com",
  },
  {
    title: "Crystal",
    content:
      "It can induce effects such as euphoria, increased alertness and energy, and enhanced self-esteem.",
    image: "/assets/Crystal.png",
    link: "https://example.com/crystal",
  },
  {
    title: "Marijuana",
    content:
      "It produces euphoria, relief of anxiety, sedation and drowsiness.",
    image: "/assets/Marijuana.png",
    link: "https://example.com/marijuana",
  },
  {
    title: "Pill",
    content:
      "A life-saving medicine however overdosage can lead to consequences..",
    image: "/assets/pill.png",
    link: "https://example.com/pill",
  },
  {
    title: "Alcohol",
    content:
      "A classic drink for social occasions however it may cause liver failure after overconsumption.",
    image: "/assets/image_2024-12-10_14-56-20.png",
    link: "https://example.com/alcohol",
  },
];

export default function Home() {
  return (
    <div className="w-[calc(100vw-50px)]">
      <div className="h-lvh relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Substance Abuse
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Framer motion is the best animation library ngl
        </p>
      </div>
      <h1 className="text-xl text-center p-12">Types Of Substances</h1>
      <div className="flex w-full justify-center">
        <CustomCarousel cards={cards} />
      </div>
      <CustAlertDialog />
      <div className="w-1/2">
        <ChartComponent />
      </div>
      <div>
      <CustAlertDialog />
      </div>
    </div>
  );
}

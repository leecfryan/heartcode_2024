"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import girl from "@/app/assets/girl.png";
import girl1 from "@/app/assets/girl1.jpg";
const people = [
  {
    id: 1,
    name: "Cheyenne",
    designation: "Software Engineer",
    image: girl.src,
  },
  {
    id: 2,
    name: "Megan",
    designation: "Product Manager",
    image: girl1.src,
  },
];
export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-32 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
export default AnimatedTooltipPreview; // Make sure to export it like this

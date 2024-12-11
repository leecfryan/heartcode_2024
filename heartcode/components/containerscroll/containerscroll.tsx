"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import gl from "@/app/assets/girl.png";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Meet
              <br />
              <span className="text-2xl md:text-[4rem] font-bold mt-1 leading-none">
                Megan & Cheyenne
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={gl}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
export default HeroScrollDemo;

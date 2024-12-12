"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { CustomCarousel } from "@/components/carousel/custom-carousel";
import { CustAlertDialog } from "@/components/alert-dialog/alert-dialog";
import { CustAlertDialog1 } from "@/components/alert-dialog/alert-dialog_1";
import { CustAlertDialog2 } from "@/components/alert-dialog/alert-dialog_2";
import { ChartComponent } from "@/components/chart/custom-chart";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Circle } from "lucide-react";

const cards = [
  {
    title: "Coke",
    content: "This causes a huge rush in dopamine levels.",
    image: "/assets/Coke.png",
    link: "https://www.bing.com/ck/a?!&&p=d3a788bc49bb063717b0addc127eb30852032203924dd05b2ed244c5e0d8903eJmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b2a275-a6e1-627f-0f48-b727a7e063bb&psq=cocaine+effects+on+body&u=a1aHR0cHM6Ly9kcnVnYWJ1c2UuY29tL2RydWdzL2NvY2FpbmUvZWZmZWN0cy11c2Uv&ntb=1",
  },
  {
    title: "Crystal",
    content:
      "It can induce effects such as euphoria, increased alertness and energy, and enhanced self-esteem.",
    image: "/assets/Crystal.png",
    link: "https://www.bing.com/ck/a?!&&p=945e11136764a0c324c110a9124365ccc85a16831f52a9e568afeea87e61e70eJmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b2a275-a6e1-627f-0f48-b727a7e063bb&psq=meth+effects+on+the+body&u=a1aHR0cHM6Ly9kcnVnYWJ1c2UuY29tL2ZlYXR1cmVkL3RoZS1lZmZlY3RzLW9mLW1ldGgtb24teW91ci1ib2R5Lw&ntb=1",
  },
  {
    title: "Marijuana",
    content:
      "It produces euphoria, relief of anxiety, sedation and drowsiness.",
    image: "/assets/Marijuana.png",
    link: "https://www.bing.com/ck/a?!&&p=933dc5eadd98ddfd41a61274816597fc5eb7f130febc0d5fc5bb258a985d428bJmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b2a275-a6e1-627f-0f48-b727a7e063bb&psq=marijuana+effects+on+the+body&u=a1aHR0cHM6Ly93d3cuaGVhbHRobGluZS5jb20vaGVhbHRoL2VmZmVjdHMtb2YtY2FubmFiaXMtb24tYm9keQ&ntb=1",
  },
  {
    title: "Pill",
    content:
      "A life-saving medicine however overdosage can lead to consequences..",
    image: "/assets/pill.png",
    link: "https://www.bing.com/ck/a?!&&p=f324e448ee68275920b96a84d246d6200a5f73d3028f2a3310b88ec2e9cc2fbbJmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b2a275-a6e1-627f-0f48-b727a7e063bb&psq=pill+overdose+effects&u=a1aHR0cHM6Ly9jYW5hZGlhbmNlbnRyZWZvcmFkZGljdGlvbnMub3JnL3doYXQtaGFwcGVucy13aGVuLXlvdS1vdmVyZG9zZS1vbi1waWxscy8&ntb=1",
  },
  {
    title: "Alcohol",
    content:
      "A classic drink for social occasions however it may cause liver failure after overconsumption.",
    image: "/assets/image_2024-12-10_14-56-20.png",
    link: "https://www.bing.com/ck/a?!&&p=6cb08ec29719eeed046cdd9122ba1cf565426073876f98674547e5441bc3e326JmltdHM9MTczMzc4ODgwMA&ptn=3&ver=2&hsh=4&fclid=14b2a275-a6e1-627f-0f48-b727a7e063bb&psq=alcohol+poisoning&u=a1aHR0cHM6Ly93d3cubWF5b2NsaW5pYy5vcmcvZGlzZWFzZXMtY29uZGl0aW9ucy9hbGNvaG9sLXBvaXNvbmluZy9zeW1wdG9tcy1jYXVzZXMvc3ljLTIwMzU0Mzg2&ntb=1",
  },
];

export default function Home() {
  return (
    <div className="lg:w-[calc(100vw-50px)] md:w-screen font-mono">
      <div className="h-lvh relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Substance Abuse
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Is it worth it?
        </p>
      </div>
      <div>
        <h1 className="text-5xl pt-12 text-center mb-10">
          Types Of Substances
        </h1>
        <div className="flex w-full justify-center">
          <CustomCarousel cards={cards} />
        </div>
      </div>
      <h1 className="flex items-center justify-center font-semibold text-2xl">
        WHAT DIFFERENCE DOES IT MAKE?
      </h1>
      <div className="flex items-center justify-center p-5">
        <div className="mx-2">
          <CustAlertDialog />
        </div>
        <div className="mx-2">
          <CustAlertDialog1 />
        </div>
        <div className="mx-2">
          <CustAlertDialog2 />
        </div>
      </div>
      <div className=" w-full flex align-middle justify-center mt-10">
        <div className="w-1/2">
          <div className="chart-header text-center">
            <p className="text-lg">The increase from 2022 to 2023</p>
            <p className="text-md flex justify-center">
              <Circle style={{color:'hsl(var(--chart-1))'}} size={24} />:2022- <Circle style={{color:'hsl(var(--chart-2))'}} size={24} />:2023
            </p>
          </div>
          <ChartComponent />
        </div>
      </div>

      <h1 className="flex items-center justify-center font-semibold mt-8 mb-2 text-2xl">
        WHY PEOPLE DO DRUGS?
      </h1>
      <div className="flex items-center justify-center font-mono">
        <div>
          <HoverCard>
            <HoverCardTrigger className="text-xl">Depression,</HoverCardTrigger>
            <HoverCardContent>
              They abuse substances as a way to increase their dopamine levels, to feel happy even though the drug/substance
              will stop working after consuming so much of it.
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mx-1">
          <HoverCard>
            <HoverCardTrigger className="text-xl">Stress,</HoverCardTrigger>
            <HoverCardContent>
              They abuse substances as an escape from reality not realising
              their actions will lead to the destruction of their own body
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mx-1 ">
          <HoverCard>
            <HoverCardTrigger className="text-xl">
              Influence and Upbringing,
            </HoverCardTrigger>
            <HoverCardContent>
              They abuse substances because they were told it was right. Since
              many others do it around them without questioning if it was right
              or not.
            </HoverCardContent>
          </HoverCard>
        </div>
      </ div>

      <h1 className="flex items-center justify-center font-semibold mt-8 mb-2 text-2xl">WHAT THEY CAN DO INSTEAD?</h1>
      <p className="flex items-center justify-center">(Hover over the words)</p>
      <div className="flex items-center justify-center">
        <div>
          <HoverCard>
            <HoverCardTrigger className="text-xl">Seek professional help,</HoverCardTrigger>
            <HoverCardContent>
              People who are facing hard times due to or are contemplating reaching out to substances because of it can call the helplines and seek support from profesionals who are trained to help others who are troubled
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mx-1">
          <HoverCard>
            <HoverCardTrigger className="text-xl">Get Regular Exercise,</HoverCardTrigger>
            <HoverCardContent>
              Getting regular exercise helps to clear the mind and strengthen the body which supports the mind.
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mx-1">
          <HoverCard>
            <HoverCardTrigger className="text-xl">Have friends who are positive influences,</HoverCardTrigger>
            <HoverCardContent>
              Having people who are positive influences allows one to not fall into temptation
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div>
        <h1 className="text-2xl flex items-center justify-center font-semibold mt-10 mb-2 font-mono">HOTLINES:</h1>
      </div>
      <div className="flex items-center justify-center font-mono">
        <p>
          National Addictions Management Service (NAMS) General Enquiries . Tel:
          6389 2000.{" "}
        </p>
      </div>
      <div className="flex items-center justify-center font-mono">
        <p>Appointments. Tel: 6389 2200</p>
      </div>
      <div className="flex items-center justify-center font-mono">
        <p>Mental Health Helpline. Tel: 6389 2222</p>
      </div>
    </div>
  );
}

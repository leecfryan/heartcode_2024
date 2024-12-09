"use client"
 
import * as React from "react"
// import Link from "next/link"
import { NavigationMenuDemo } from "./components/navbar/navigation-menu"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <NavigationMenuDemo/>
    </div>
  );
}

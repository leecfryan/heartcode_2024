"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Drug",
        },
        {
            text: "Abuse",
        },
        {
            text: "Awareness",
        },
        {
            text: "Resources",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
            <TypewriterEffect words={words} />
    );
}

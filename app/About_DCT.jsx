"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import {cn} from "@/lib/utils";

export default function About() {
  return (
    <div className="h-96 mt-20 relative w-full mb-24 overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg" id="contact">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      This is About Section
      </h1>
    </div>
  );
}

"use client";

import React from "react";
import AnimatedPoster from "./AnimatedPoster";
import ProductCategories from "./ProductCategories";
import WhyChooseVastro from "./WhyChooseVastro";
import IndustriesWeServe from "./IndustriesWeServe";
import InstallationProcess from "./InstallationProcess";
import FinalCTA from "./FinalCTA";
import ProjectsShowcase from "./ProjectsShowcase";
import Link from "next/link";
import { Phone } from "lucide-react";
import { MessageSquare } from "lucide-react";

export const MainPage = () => {
  return (
    <>
      <AnimatedPoster />
      <ProductCategories />
      <WhyChooseVastro />
      <IndustriesWeServe />
      <ProjectsShowcase />
      <InstallationProcess />
      <FinalCTA />
      <Link
        className="fixed bottom-5 right-5 z-50 text-3xl p-2 rounded-xl bg-green-400"
        href={"tel:+918076942798"}
      >
        <Phone />
      </Link>
      <Link
        className="fixed bg-[#00df73] font-semibold z-50 p-2 right-5 rounded-md bottom-20"
        href={"https://wa.me/918076942798"}
      >
        <MessageSquare />
      </Link>
    </>
  );
};

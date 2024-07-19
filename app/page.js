'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    }, [])
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Services/>
    </main>
  );
}

import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntropiuX War Within",
  // other metadata
  description: "Primer servidor de World of Warcraft The War Within",
  keywords: "EntropiuX, War Within, WoW, World of Warcraft, servidor privado",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <FunFact />
      <Feature />
      <Integration />
      <CTA />
      <Testimonial />
    </main>
  );
}

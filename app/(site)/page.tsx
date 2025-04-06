import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Server Wow",
  // other metadata
  description: "xx",
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

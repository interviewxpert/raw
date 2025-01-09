
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Plans from "@/components/Plans";
import Pricing from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CollaborationFeatures } from "@/components/CollaborationFeatures";
import { BlogCards } from "@/components/BlogCards";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    
    <>
    <Header />
    <Hero />
    <Trust />
    <Plans />
    <Pricing />
    <Testimonials />
    <FAQ />
    <CollaborationFeatures />
    {/* <BlogCards /> */}
    <CTASection />
    <Footer />
    </>

  );
}
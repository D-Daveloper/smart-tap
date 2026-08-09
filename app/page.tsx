import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatTheySee } from "@/components/sections/WhatTheySee";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { Formats } from "@/components/sections/Formats";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonial } from "@/components/sections/Testimonial";
import { Faq } from "@/components/sections/Faq";
import { LeadCapture } from "@/components/sections/LeadCapture";

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", background: "var(--color-bg)" }}>
      <SiteHeader />
      <main>
        <Hero />
        <hr className="hr mx-auto max-w-[1160px]" />
        <HowItWorks />
        <WhatTheySee />
        <WhyItMatters />
        <Formats />
        <Pricing />
        <Testimonial />
        <Faq />
        <LeadCapture />
      </main>
      <SiteFooter />
    </div>
  );
}

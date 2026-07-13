import { Hero } from "@/components/home/Hero";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Differentiators } from "@/components/home/Differentiators";
import { EngagementTeaser } from "@/components/home/EngagementTeaser";
import { TrustSection } from "@/components/home/TrustSection";
import { ClosingCta } from "@/components/home/ClosingCta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Managed IT, Industrial OT & AI Automation for Growing Businesses",
  description:
    "Golden Data Systems is a managed technology partner for small and midsized businesses — combining managed IT support, industrial/OT infrastructure experience, and practical AI automation.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <ServicesGrid />
      <Differentiators />
      <EngagementTeaser />
      <TrustSection />
      <ClosingCta />
    </>
  );
}

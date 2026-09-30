import Hero from "@/components/hero/Hero";
import Statistics from "@/components/statistics/Statistics";
import ClientLogos from "@/components/clients/ClientLogos";
import WorkSamples from "@/components/portfolio/WorkSamples";
import Industries from "@/components/industries/Industries";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import PageBackground from "@/components/layout/PageBackground";

export default function Home() {
  return (
    <PageBackground>
      <main>
        <Hero />
        <Statistics />
        <WorkSamples />
        <ClientLogos />
        <Industries />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
      </main>
    </PageBackground>
  );
}

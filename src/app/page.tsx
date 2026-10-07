import Hero from "@/components/hero/Hero";
import Statistics from "@/components/statistics/Statistics";
import ClientLogos from "@/components/clients/ClientLogos";
import WorkSamples from "@/components/portfolio/WorkSamples";
import Awards from "@/components/awards/Awards";
import Industries from "@/components/industries/Industries";
import WhyMaple from "@/components/why-maple/WhyMaple";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Statistics />
        <WorkSamples />
        <Awards />
        <ClientLogos />
        <Industries />
        <WhyMaple />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
      </main>
    </>
  );
}

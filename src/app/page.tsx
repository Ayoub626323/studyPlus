import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import { ProgramSection } from "@/components";
import CoursesCategories from "./courses-categories";
import { KpiStatsSection } from "@/components/home/KpiStatsSection";
import PricingPacks from "./pricing-packs";
import StudentsFeedback from "./students-feedback";
import Testimonial from "./testimonial";
import ContactUs from "./contact-us";
import TeamProfesseurs from "./team-professeurs";
import FAQ from "./faq";
import { FeaturesSection } from "./features-section";
import { SmartOverviewSection } from "@/components/home/SmartOverviewSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <ProgramSection />
        <SmartOverviewSection />
        <FeaturesSection />
        <CoursesCategories />
        <KpiStatsSection />
        <PricingPacks />
        <StudentsFeedback />
        <Testimonial />
        <TeamProfesseurs />
        <FAQ />
        <ContactUs />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

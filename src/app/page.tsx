import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import { ProgramSection } from "@/components";
import CoursesCategories from "./courses-categories";
import OutImpressiveStats from "./out-impressive-stats";
import PricingPacks from "./pricing-packs";
import StudentsFeedback from "./students-feedback";
import Testimonial from "./testimonial";
import ContactUs from "./contact-us";
import TeamProfesseurs from "./team-professeurs";
import FAQ from "./faq";
import { FeaturesSection } from "./features-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <ProgramSection />
        <FeaturesSection />
        <CoursesCategories />
        <OutImpressiveStats />
        <PricingPacks />
        <StudentsFeedback />
        <Testimonial />
        <TeamProfesseurs />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import { ProgramSection } from "@/components";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import OutImpressiveStats from "./out-impressive-stats";
import PricingPacks from "./pricing-packs";
import StudentsFeedback from "./students-feedback";
import Testimonial from "./testimonial";
import ContactUs from "./contact-us";
import TeamProfesseurs from "./team-professeurs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <ProgramSection />
        <CoursesCategories />
        <ExploreCourses />
        <OutImpressiveStats />
        <PricingPacks />
        <StudentsFeedback />
        <Testimonial />
        <TeamProfesseurs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

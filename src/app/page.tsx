import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import { ProgramSection } from "@/components";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Events from "./events";
import OutImpressiveStats from "./out-impressive-stats";
import StudentsFeedback from "./students-feedback";
import Testimonial from "./testimonial";
import TrustedCompany from "./trusted-companies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProgramSection />
        <CoursesCategories />
        <ExploreCourses />
        <Events />
        <OutImpressiveStats />
        <StudentsFeedback />
        <Testimonial />
        <TrustedCompany />
      </main>
      <Footer />
    </>
  );
}

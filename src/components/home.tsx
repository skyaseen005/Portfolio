import NavBar from "@/components/portfolio/NavBar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import WorkSection from "@/components/portfolio/WorkSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import CustomCursor from "@/components/portfolio/CustomCursor";

function Home() {
  return (
    <div
      className="grain-overlay min-h-screen"
      style={{ background: "#F5F0E8", color: "#1C1A17", cursor: "none" }}
    >
      {/* Custom cursor */}
      <CustomCursor />

      {/* Fixed navigation */}
      <NavBar />

      {/* Page sections */}
      <main>
        <HeroSection />

        {/* Separator */}
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto h-[1px] bg-[#1C1A17]/8" />
        </div>

        <AboutSection />

        {/* Separator */}
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto h-[1px] bg-[#1C1A17]/8" />
        </div>

        <WorkSection />

        <SkillsSection />

        {/* Separator */}
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto h-[1px] bg-[#1C1A17]/8" />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;

import ParticleGrid from "@/components/ParticleGrid";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleGrid />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;

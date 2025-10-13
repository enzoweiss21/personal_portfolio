import { PortfolioNav } from "@/components/portfolio-nav"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSkillsSection } from "@/components/about-skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { LinkedInSection } from "@/components/linkedin-section"
import { XSection } from "@/components/x-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <PortfolioNav />

      {/* Theme toggle in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* About & Skills Section */}
      <AboutSkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      <LinkedInSection />

      {/* X (Twitter) Section */}
      <XSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Github, Code, Database, Globe, Brain, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  image: string
  images?: string[]
  category: string
  icon: React.ReactNode
  gradient: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Financial Health Advisor",
    description: "LPL Financial Hackathon winner - AI-powered financial analysis tool",
    longDescription:
      "Engineered prompts for Anthropic's Claude 3.5 model to analyze user bank statements and provide tailored financial feedback and recommendations. Integrated AWS Bedrock and Lambda with DynamoDB for scalable storage and real-time personalized insights.",
    technologies: ["Python", "JavaScript", "AWS", "Claude 3.5", "DynamoDB", "Lambda"],
    githubUrl: "https://github.com/enzoweiss21",
    image: "/ai-financial-advisor-dashboard-interface.jpg",
    images: [
      "/ai-financial-advisor-investment-selection.jpg", 
      "/ai-financial-advisor-dashboard-analysis.jpg",
      "/ai-financial-advisor-upload-interface.jpg",
      "/ai-financial-advisor-loading-state.jpg",
      "/ai-financial-advisor-interface-5.jpg",
      "/ai-financial-advisor-interface-6.jpg"
    ],
    category: "AI/ML",
    icon: <Brain className="w-5 h-5" />,
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
  },
  {
    id: 2,
    title: "NLP Customer Analysis Pipeline",
    description: "Stealth Company - Processing 10,000+ customer conversations weekly",
    longDescription:
      "Developed NLP pipelines to analyze customer conversations across 5 digital platforms, applying classification and sentiment analysis to uncover pain points and detect trends for banking clients. Built React dashboard and iOS app for real-time insights.",
    technologies: ["Python", "React", "Swift", "NLP", "scikit-learn", "iOS"],
    githubUrl: "https://github.com/enzoweiss21",
    image: "/nlp-sentiment-analysis-dashboard-with-charts.jpg",
    category: "AI/ML",
    icon: <Database className="w-5 h-5" />,
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  },
  {
    id: 3,
    title: "Voodies Profile System",
    description: "Full-stack profile management with SQL validation",
    longDescription:
      "Developed and deployed Edit Profile feature with SQL-based validation for usernames/emails, reducing failed profile updates by 99%. Optimized Profile page UX with infinite scroll, extending average session duration by 115%.",
    technologies: ["Python", "JavaScript", "SQL", "React", "Backend APIs"],
    githubUrl: "https://github.com/enzoweiss21",
    image: "/voodies1.jpeg",
    images: [
      "/voodies1.jpeg",
      "/voodies2.jpeg", 
      "/voodies3.jpeg",
      "/voodies4.jpeg"
    ],
    category: "Full-Stack",
    icon: <Globe className="w-5 h-5" />,
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
  },
  {
    id: 4,
    title: "Mentor Magic - Techstars",
    description: "Automated mentor-founder matching platform for Techstars San Diego",
    longDescription:
      "Designed and deployed a React web application hosted on Vercel with a Supabase backend for Techstars San Diego, automating mentor–founder matching for 12 companies, 31 founders, and 100+ mentors in the 2025 cohort.",
    technologies: ["React", "Supabase", "Vercel", "JavaScript", "Web Development", "Database"],
    githubUrl: "https://github.com/enzoweiss21",
    image: "/techstars.jpeg",
    category: "Full-Stack",
    icon: <Code className="w-5 h-5" />,
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
  },
]

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: {
      opacity: { duration: 0.3 },
      scale: { duration: 0.3, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

function ProjectImageCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length <= 1) {
    return (
      <img
        src={images[0] || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-contain bg-slate-50 dark:bg-slate-800 transition-transform duration-300 group-hover:scale-105"
      />
    )
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-contain bg-slate-50 dark:bg-slate-800 transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      
      {/* Image indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects from internships and hackathons, featuring AI/ML, full-stack development, and mobile
            apps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div className="relative w-full rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  style={{
                    background: project.gradient,
                  }}
                />

                <Card className="relative w-full border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-0 flex flex-col">
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      {project.images && project.images.length > 1 ? (
                        <ProjectImageCarousel 
                          images={project.images} 
                          title={project.title} 
                        />
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-contain bg-slate-50 dark:bg-slate-800 transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-primary">{project.icon}</span>
                        <span className="text-sm font-medium">{project.category}</span>
                      </div>
                      {project.images && project.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-xs text-muted-foreground">
                            {project.images.length} images
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col">
                      <h3 className="text-xl font-bold font-montserrat mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.longDescription}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-800 text-white text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent w-full"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-xl bg-transparent"
            asChild
          >
            <a href="https://github.com/enzoweiss21" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

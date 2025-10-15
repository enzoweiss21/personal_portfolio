"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  type: "work" | "education" | "project"
  companyUrl?: string
}

const experiences: Experience[] = 
  [
  {
    "id": 1,
    "title": "Software Engineer Intern",
    "company": "Stealth Company",
    "location": "Remote",
    "period": "Aug 2025 – Present",
    "type": "work",
    "companyUrl": "",
    "description": [
      "Developing NLP pipeline to analyze 10,000 customer conversations weekly across 5 digital platforms, applying classification and sentiment analysis to uncover pain points, detect trends, and generate insights for a banking client.",
      "Implementing a React dashboard and iOS app to deliver analysis and insights from the NLP models, enabling stakeholders to explore customer sentiment and trends in real time."
    ],
    "technologies": ["Python", "scikit-learn", "React", "Swift", "NLP"]
  },
  {
    "id": 2,
    "title": "AI/ML Fellow",
    "company": "Break Through Tech (Cornell University)",
    "location": "Remote",
    "period": "May 2025 – Present",
    "type": "work",
    "companyUrl": "",
    "description": [
      "Engineered end-to-end ML pipelines using Python, scikit-learn, and Pandas across tabular and NLP datasets, achieving an AUC of 0.903 and reducing data preparation time by 30% through feature selection and pipeline automation.",
      "Presented sentiment-analysis and classification models (Logistic Regression, Neural Networks) to peers and mentors, demonstrating 81% F1-score on real-world book review data and driving adoption in follow-up projects."
    ],
    "technologies": ["Python", "scikit-learn", "Pandas", "Logistic Regression", "Neural Networks"]
  },
  {
    "id": 3,
    "title": "Software Engineer Intern",
    "company": "Zip Launch Pad",
    "location": "San Diego, CA",
    "period": "Aug 2025 – Present",
    "type": "work",
    "companyUrl": "https://ziplaunchpad.sdsu.edu/",
    "description": [
      "Designing software solutions for startup teams and staff clients in SDSU’s ZIP Launchpad, a program supporting 500+ ventures and 1,000+ students.",
      "Engineering websites and iOS applications in Python, JavaScript, React, and Swift to turn client concepts into deployable, user-ready MVPs."
    ],
    "technologies": ["Python", "JavaScript", "React", "Swift"]
  },
  {
    "id": 4,
    "title": "Full Stack Engineer Intern",
    "company": "Voodies",
    "location": "San Diego, CA",
    "period": "Feb 2025 – May 2025",
    "type": "work",
    "companyUrl": "",
    "description": [
      "Developed and deployed Edit Profile feature with SQL-based validation for usernames/emails, reducing failed profile updates by 99% and improving reliability for 600+ early users in the April 2025 cohort.",
      "Optimized Profile page UX by implementing infinite scroll, reducing navigation clicks to zero and extending average session duration by up to 115%."
    ],
    "technologies": ["SQL", "React", "Node.js"]
  }
]


const typeColors = {
  work: "text-blue-500",
  education: "text-green-500",
  project: "text-purple-500",
}

const typeBackgrounds = {
  work: "bg-blue-500/10",
  education: "bg-green-500/10",
  project: "bg-purple-500/10",
}

const typeLabels = {
  work: "Work",
  education: "Education",
  project: "Project",
}

export function ExperienceSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Enzo_Weiss_Resume.pdf"
    link.download = "Enzo_Weiss_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through education, work experiences, and personal projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${typeBackgrounds[experience.type]} ${typeColors[experience.type]}`}
                              >
                                {typeLabels[experience.type]}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold font-montserrat mb-1">{experience.title}</h3>
                            <div className="flex items-center gap-2 text-primary font-medium mb-2">
                              {experience.companyUrl ? (
                                <a
                                  href={experience.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 hover:underline"
                                >
                                  {experience.company}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                experience.company
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {experience.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {experience.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {experience.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl"
          >
            Download Full Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

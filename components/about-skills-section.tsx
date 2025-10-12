"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  gradient: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    skills: ["Python", "Java", "C/C++", "JavaScript", "Flutter", "Swift", "SQL", "HTML/CSS", "MIPS"],
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    skills: ["React", "Pandas", "scikit-learn", "VS Code", "Xcode", "Git", "AWS", "Google Cloud Platform"],
  },
]

export function AboutSkillsSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Computer Science student with a love for creating innovative digital solutions. My
              journey in technology started with curiosity about how things work, and has evolved into a deep
              appreciation for clean code, user experience, and problem-solving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date
              with the latest industry trends.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-montserrat text-center mb-12">Technical Skills</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-2 rounded-3xl z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: category.gradient }}
                />

                <Card className="relative z-10 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">{category.icon}</div>
                      <h4 className="text-xl font-bold font-montserrat">{category.title}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-white text-sm font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "20+", label: "Projects Completed" },
            { number: "3+", label: "Years Learning" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Passion for Code" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
            >
              <div className="text-3xl font-black font-montserrat text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Enzo_Weiss_Resume.pdf"
    link.download = "Enzo_Weiss_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient with reduced opacity for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/3" />

      {/* Animated background elements with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <img src="/enzo-headshot.jpg" alt="Enzo Weiss" className="w-full h-full rounded-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-black font-montserrat mb-4 text-primary">Enzo Weiss</h1>
            <h2 className="text-xl md:text-2xl text-foreground font-medium">
              Computer Science Student & Software Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            SDSU Computer Science major with experience in AI/ML, full-stack development, and leadership. Currently
            building NLP pipelines and React applications at multiple internships.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-xl bg-background/80 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 mb-16"
          >
            <motion.a
              href="https://github.com/enzoweiss21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/enzoweiss/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:eweiss5244@sdsu.edu"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-foreground/70 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="p-2 rounded-full border border-primary/50 bg-background/50 backdrop-blur-sm"
            >
              <ArrowDown className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LinkedInSection() {
  return (
    <section id="linkedin" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest from LinkedIn</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Follow my professional journey and insights</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-full max-w-[650px] bg-card rounded-xl shadow-xl border border-border overflow-hidden">
            {/* LinkedIn Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-card">
              <Linkedin className="w-7 h-7 text-[#0A66C2]" />
              <span className="text-xl font-semibold text-foreground">LinkedIn</span>
            </div>

            {/* Embedded Post */}
            <div className="bg-card">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7373405217398202369?collapsed=1"
                height="655"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Embedded LinkedIn post"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <a
              href="https://linkedin.com/in/enzoweiss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              View All Posts on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Linkedin, ExternalLink, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function LinkedInSection() {
  useEffect(() => {
    // Load X (Twitter) widgets script once on client
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://platform.twitter.com/widgets.js"]')
    if (!existing) {
      const s = document.createElement("script")
      s.async = true
      s.src = "https://platform.twitter.com/widgets.js"
      s.charset = "utf-8"
      document.body.appendChild(s)
    } else if ((window as any).twttr && (window as any).twttr.widgets) {
      ;(window as any).twttr.widgets.load()
    }
  }, [])

  return (
    <section id="linkedin" className="py-20 px-4 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest from Enzo</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Follow my professional journey and updates</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* LinkedIn Card */}
            <div className="w-full lg:col-span-2 bg-card rounded-xl shadow-xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-card">
                <Linkedin className="w-7 h-7 text-[#0A66C2]" />
                <span className="text-xl font-semibold text-foreground">LinkedIn</span>
              </div>
              <div className="bg-card">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7373405217398202369?collapsed=1"
                  height="600"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Embedded LinkedIn post"
                  className="w-full"
                />
              </div>
            </div>

            {/* X Card */}
            <div className="w-full bg-card rounded-xl shadow-xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-card">
                <svg className="w-7 h-7 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xl font-semibold text-foreground">X</span>
              </div>
              <div className="bg-card">
                <blockquote 
                  className="twitter-tweet" 
                  data-theme="light"
                  data-width="100%"
                  style={{ width: '100%', maxWidth: 'none', margin: 0 }}
                >
                  <p lang="en" dir="ltr">
                    Large language model-powered AI systems achieve self-replication with no human intervention<a href="https://t.co/Mlj9tWSQrU">https://t.co/Mlj9tWSQrU</a><br />
                    .....
                  </p>
                  &mdash; Enzo Weiss (@weiss_enzo) <a href="https://twitter.com/weiss_enzo/status/1979006928408735892?ref_src=twsrc%5Etfw">October 17, 2025</a>
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All Posts Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <a
              href="https://linkedin.com/in/enzoweiss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              View on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <a
              href="https://x.com/weiss_enzo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Twitter className="w-5 h-5" />
              View on X
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

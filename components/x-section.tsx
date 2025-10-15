"use client"

import { motion } from "framer-motion"
import { Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function XSection() {
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

    // Add custom CSS to make Twitter embed fill container
    const style = document.createElement('style')
    style.textContent = `
      .twitter-tweet {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
      }
      .twitter-tweet iframe {
        width: 100% !important;
        max-width: none !important;
        min-width: 100% !important;
      }
      .twitter-tweet-rendered {
        width: 100% !important;
        max-width: none !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section id="x" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest on X</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Follow my updates and announcements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-full max-w-[500px] bg-card rounded-xl shadow-xl border border-border overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-card">
              <Twitter className="w-7 h-7 text-[#1DA1F2]" />
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
                  Take me back to when this excited me <a href="https://twitter.com/hashtag/Python?src=hash&amp;ref_src=twsrc%5Etfw">#Python</a> <a href="https://twitter.com/hashtag/Coding?src=hash&amp;ref_src=twsrc%5Etfw">#Coding</a> <a href="https://twitter.com/hashtag/helloworldn?src=hash&amp;ref_src=twsrc%5Etfw">#helloworldn</a> <a href="https://t.co/WHZcftifVT">pic.twitter.com/WHZcftifVT</a>
                </p>
                &mdash; Enzo Weiss (@weiss_enzo) <a href="https://twitter.com/weiss_enzo/status/1978195634290143293?ref_src=twsrc%5Etfw">October 14, 2025</a>
              </blockquote>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
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

"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-600/30 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Hero Content with card divider */}
      <motion.div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900/60 to-slate-900/60 rounded-3xl border border-purple-700/40 shadow-2xl p-12 md:p-20 mb-12" style={{ y, opacity }}>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Discover Inspiring</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Developer Portfolios
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of 130+ stunning portfolios to inspire your next project. Explore designs, tech stacks,
            and source code.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px rgba(168, 85, 247, 0.25)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/portfolio-table"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                See Portfolios <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="https://github.com"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 shadow-lg transition-all duration-200"
              >
                <Github size={20} /> View on GitHub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

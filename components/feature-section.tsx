"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Code2, ImageIcon, Github } from "lucide-react"

const features = [
  {
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    title: "💜 The Best Resource",
    description: "Access 130+ handpicked portfolio inspirations from top developers and designers worldwide.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "⚛️ Technologies Used",
    description: "Discover which frameworks and libraries were used to build each impressive portfolio.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-green-400" />,
    title: "📷 Portfolio Screenshot",
    description: "Preview how each portfolio looks with high-quality screenshots before visiting.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Github className="w-8 h-8 text-amber-400" />,
    title: "🥑 Source Code",
    description: "Get direct links to GitHub repositories to study the code behind these amazing portfolios.",
    color: "from-amber-500 to-orange-500",
  },
]

export default function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
  <section className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl" />
      </div>

  <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900/60 to-slate-900/60 rounded-3xl border border-purple-700/40 shadow-2xl p-12 md:p-20 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Everything You Need
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto font-light">
            Discover what makes our portfolio collection the ultimate resource for your inspiration
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12, scale: 1.04, boxShadow: "0 8px 32px 0 rgba(168,85,247,0.15)", borderColor: "#a855f7" }}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:border-purple-400/40 transition-all duration-200 shadow-lg hover:shadow-2xl flex flex-col items-center text-center"
    >
      <motion.div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
        whileHover={{ scale: 1.12, rotate: 8 }}
        whileTap={{ scale: 0.95 }}
      >
        {feature.icon}
      </motion.div>

      <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">{feature.title}</h3>
      <p className="text-gray-300 text-lg font-light leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes our portfolio collection the ultimate resource for your inspiration
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
    >
      <motion.div
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        {feature.icon}
      </motion.div>

      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  )
}

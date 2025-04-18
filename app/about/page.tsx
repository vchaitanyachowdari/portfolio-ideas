"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Team member data
const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    bio: "Alex is a full-stack developer with over 10 years of experience building web applications. He founded Portfolio Ideas to help developers showcase their work and find inspiration.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:alex@example.com",
    },
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Sarah brings 8 years of design experience to the team. She's passionate about creating beautiful, intuitive interfaces that help developers showcase their work effectively.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sarah@example.com",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Content Curator",
    bio: "Michael has a keen eye for quality and spends his time finding the best developer portfolios to feature on the platform. He's always on the lookout for unique and inspiring work.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Emily Zhang",
    role: "Community Manager",
    bio: "Emily manages our growing community of developers and designers. She organizes events, moderates discussions, and ensures everyone feels welcome and supported.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:emily@example.com",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-950 text-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Portfolio Ideas
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to inspire developers and designers by showcasing the best portfolio websites from
                around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Portfolio Ideas began in 2020 when our founder, Alex, was struggling to find inspiration for his own
                    portfolio website. After hours of searching, he realized there wasn't a centralized resource for
                    developer portfolio inspiration.
                  </p>
                  <p>
                    What started as a small collection of bookmarked sites quickly grew into a curated platform
                    featuring over 130 outstanding portfolios from developers and designers worldwide.
                  </p>
                  <p>
                    Today, Portfolio Ideas helps thousands of developers find inspiration, learn about different tech
                    stacks, and discover new ways to showcase their work effectively.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our team working together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                We believe that great design should be shared and celebrated. Our mission is to:
              </p>

              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Inspire</h3>
                  <p className="text-gray-300">
                    Help developers and designers find inspiration for their next portfolio project.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Educate</h3>
                  <p className="text-gray-300">
                    Showcase different technologies and approaches to building effective portfolio websites.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Connect</h3>
                  <p className="text-gray-300">
                    Build a community of developers and designers who can learn from each other.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Meet Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The passionate people behind Portfolio Ideas who work tirelessly to bring you the best portfolio
                inspiration.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function TeamMember({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <div className="flex space-x-3">
            <SocialIconLink href={member.social.twitter} icon={<Twitter size={18} />} />
            <SocialIconLink href={member.social.github} icon={<Github size={18} />} />
            <SocialIconLink href={member.social.linkedin} icon={<Linkedin size={18} />} />
            <SocialIconLink href={member.social.email} icon={<Mail size={18} />} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-purple-400 mb-3">{member.role}</p>
        <p className="text-gray-300 text-sm">{member.bio}</p>
      </div>
    </motion.div>
  )
}

function SocialIconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  )
}

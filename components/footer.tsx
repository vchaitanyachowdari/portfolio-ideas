"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <motion.div className="text-3xl font-extrabold drop-shadow-lg" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Portfolio Ideas
                </span>{" "}
                <span className="text-purple-400">💜</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md text-lg font-light">
              A curated collection of 130+ stunning developer and designer portfolios to inspire your next project.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={22} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={22} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={22} />} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/portfolio-table">Portfolios</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/contribution-guidelines">Contribution Guidelines</FooterLink>
              <FooterLink href="https://github.com">GitHub Repo</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 text-lg">
            Made with <Heart size={18} className="text-pink-500" /> by Portfolio Ideas
          </p>
          <p className="mt-3 text-base">
            © {new Date().getFullYear()} Portfolio Ideas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white/20 hover:text-white transition-colors"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

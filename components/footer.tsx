"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Portfolio Ideas
                </span>{" "}
                <span className="text-purple-400">💜</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A curated collection of 130+ stunning developer and designer portfolios to inspire your next project.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/portfolio-table">Portfolios</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/contribution-guidelines">Contribution Guidelines</FooterLink>
              <FooterLink href="https://github.com">GitHub Repo</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-pink-500" /> by Portfolio Ideas
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Portfolio Ideas. All rights reserved.</p>
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

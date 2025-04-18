"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div className="text-xl md:text-2xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Portfolio Ideas
            </span>{" "}
            <span className="text-purple-400">💜</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/portfolio-table">Portfolios</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/documentation">Docs</NavLink>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white transition-colors">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-800 border-white/10">
              <DropdownMenuItem className="focus:bg-white/10">
                <Link href="/contribution-guidelines" className="w-full">
                  Contribution Guidelines
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10">
                <Link href="/privacy-policy" className="w-full">
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10">
                <Link href="/terms-of-service" className="w-full">
                  Terms of Service
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/contact">Contact</NavLink>

          <motion.a
            href="/portfolio-table"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-slate-800/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/portfolio-table" onClick={() => setIsMenuOpen(false)}>
              Portfolios
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/documentation" onClick={() => setIsMenuOpen(false)}>
              Documentation
            </MobileNavLink>
            <MobileNavLink href="/contribution-guidelines" onClick={() => setIsMenuOpen(false)}>
              Contribution Guidelines
            </MobileNavLink>
            <MobileNavLink href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>
              Privacy Policy
            </MobileNavLink>
            <MobileNavLink href="/terms-of-service" onClick={() => setIsMenuOpen(false)}>
              Terms of Service
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <motion.a
              href="/portfolio-table"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

function NavLink({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} target={target} className="text-gray-300 hover:text-white transition-colors">
        {children}
      </Link>
    </motion.div>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors block py-2 text-center"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

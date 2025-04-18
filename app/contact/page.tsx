"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      subject: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      // For demo purposes, we'll just show success
      setFormStatus("success")
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

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
                Get in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Have questions, feedback, or want to contribute to Portfolio Ideas? We'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">hello@portfolioideas.com</p>
                      <p className="text-gray-300">support@portfolioideas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Office</h3>
                      <p className="text-gray-300">123 Portfolio Street</p>
                      <p className="text-gray-300">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                  <p className="text-gray-300 mb-6">
                    Follow us on social media to stay updated with the latest portfolio inspirations and news.
                  </p>
                  <div className="flex space-x-4">
                    <SocialButton label="Twitter" href="https://twitter.com" />
                    <SocialButton label="GitHub" href="https://github.com" />
                    <SocialButton label="LinkedIn" href="https://linkedin.com" />
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                {formStatus === "success" && (
                  <Alert className="mb-6 bg-green-500/20 border-green-500/50 text-white">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your message has been sent successfully! We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                {formStatus === "error" && (
                  <Alert className="mb-6 bg-red-500/20 border-red-500/50 text-white">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>There was an error sending your message. Please try again.</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select value={formState.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/10">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="contribute">Portfolio Submission</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="min-h-[150px] bg-white/5 border-white/10"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions about Portfolio Ideas.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <FaqItem
                question="How can I submit my portfolio to be featured?"
                answer="You can submit your portfolio by filling out our submission form on the Contact page. Please include your name, portfolio URL, and a brief description of the technologies used."
              />
              <FaqItem
                question="Is Portfolio Ideas free to use?"
                answer="Yes, Portfolio Ideas is completely free to use. We believe in making inspiration accessible to everyone in the developer community."
              />
              <FaqItem
                question="How often do you add new portfolios?"
                answer="We add new portfolios weekly. Our curation team is constantly searching for unique and inspiring work to showcase."
              />
              <FaqItem
                question="Can I filter portfolios by specific technologies?"
                answer="Yes, on our Portfolio Table page, you can filter by various technologies including React, Vue, Angular, and more to find inspiration relevant to your tech stack."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function SocialButton({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.a>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-semibold mb-3">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </motion.div>
  )
}

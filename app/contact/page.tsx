"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { sendContactEmail, checkEmailConfiguration } from "@/app/actions/contact"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [isEmailConfigured, setIsEmailConfigured] = useState<boolean | null>(null)

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Check email configuration on component mount
  useEffect(() => {
    const checkConfig = async () => {
      try {
        const configured = await checkEmailConfiguration()
        setIsEmailConfigured(configured)
      } catch (error) {
        console.error("Error checking email configuration:", error)
        setIsEmailConfigured(false)
      }
    }
    checkConfig()
  }, [])

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long"
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    // Subject validation
    if (!formData.subject) {
      errors.subject = "Please select a subject"
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }))

    // Clear subject error when user selects
    if (formErrors.subject) {
      setFormErrors((prev) => ({
        ...prev,
        subject: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    // Check if EmailJS is configured
    if (!isEmailConfigured) {
      setFormStatus("error")
      setSubmitMessage("Email service is not configured. Please check the setup instructions.")
      setTimeout(() => {
        setFormStatus("idle")
        setSubmitMessage("")
      }, 5000)
      return
    }

    setFormStatus("submitting")
    setSubmitMessage("")

    try {
      // Send email using server action
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormStatus("success")
        setSubmitMessage(result.message)

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus("idle")
          setSubmitMessage("")
        }, 5000)
      } else {
        setFormStatus("error")
        setSubmitMessage(result.message)

        // Reset error status after 5 seconds
        setTimeout(() => {
          setFormStatus("idle")
          setSubmitMessage("")
        }, 5000)
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setFormStatus("error")
      setSubmitMessage("An unexpected error occurred. Please try again.")

      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setSubmitMessage("")
      }, 5000)
    }
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

                {/* Configuration Status */}
                {isEmailConfigured === false && (
                  <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-yellow-400">📧 EmailJS Setup Required</h3>
                    <div className="text-sm text-gray-300 space-y-2">
                      <p>To enable email functionality, please:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li>
                          Create an account at{" "}
                          <a
                            href="https://emailjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline"
                          >
                            emailjs.com
                          </a>
                        </li>
                        <li>Set up an email service (Gmail, Outlook, etc.)</li>
                        <li>Create an email template</li>
                        <li>Update the values in your .env.local file</li>
                      </ol>
                    </div>
                  </div>
                )}

                {isEmailConfigured === true && (
                  <div className="mt-12 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-green-400">✅ EmailJS Configured</h3>
                    <p className="text-sm text-gray-300">
                      Email service is properly configured and ready to receive messages.
                    </p>
                  </div>
                )}
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

                {/* Success Alert */}
                {formStatus === "success" && (
                  <Alert className="mb-6 bg-green-500/20 border-green-500/50 text-white">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>{submitMessage}</AlertDescription>
                  </Alert>
                )}

                {/* Error Alert */}
                {formStatus === "error" && (
                  <Alert className="mb-6 bg-red-500/20 border-red-500/50 text-white">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{submitMessage}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={`bg-white/5 border-white/10 ${
                          formErrors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                      />
                      {formErrors.name && (
                        <p id="name-error" className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={`bg-white/5 border-white/10 ${
                          formErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                      />
                      {formErrors.email && (
                        <p id="email-error" className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <Select value={formData.subject} onValueChange={handleSelectChange} required>
                      <SelectTrigger
                        className={`bg-white/5 border-white/10 ${formErrors.subject ? "border-red-500" : ""}`}
                        aria-invalid={!!formErrors.subject}
                        aria-describedby={formErrors.subject ? "subject-error" : undefined}
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/10">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="contribute">Portfolio Submission</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.subject && (
                      <p id="subject-error" className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you? Please provide as much detail as possible..."
                      required
                      className={`min-h-[150px] bg-white/5 border-white/10 resize-none ${
                        formErrors.message ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                    />
                    <div className="flex justify-between items-center">
                      {formErrors.message ? (
                        <p id="message-error" className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {formErrors.message}
                        </p>
                      ) : (
                        <div />
                      )}
                      <span className="text-xs text-gray-400">{formData.message.length}/1000</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formStatus === "submitting" || isEmailConfigured === false}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Sending Message...
                      </span>
                    ) : isEmailConfigured === false ? (
                      <span className="flex items-center justify-center">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Email Service Not Configured
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>

                  {/* Form Info */}
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-purple-400 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-of-service" className="text-purple-400 hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
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
              <FaqItem
                question="How long does it take to get a response?"
                answer="We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mention it in your message."
              />
              <FaqItem
                question="Can I contribute code to the project?"
                answer="We welcome contributions. Please check our Contribution Guidelines page for detailed instructions on how to contribute."
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

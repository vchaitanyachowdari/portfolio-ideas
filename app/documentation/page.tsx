"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, ChevronRight, BookOpen, Code, Lightbulb, FileText } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState("")

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Everything you need to know about Portfolio Ideas, how to use it, and how to contribute.
              </p>

              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="pl-10 py-6 bg-white/5 border-white/10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 sticky top-24"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-4">Contents</h3>
                  <nav className="space-y-1">
                    <DocNavLink href="#getting-started" label="Getting Started" />
                    <DocNavLink href="#features" label="Features" />
                    <DocNavLink href="#usage" label="Usage Guide" />
                    <DocNavLink href="#api" label="API Reference" />
                    <DocNavLink href="#faq" label="FAQ" />
                  </nav>

                  <h3 className="text-xl font-bold mt-8 mb-4">Resources</h3>
                  <nav className="space-y-1">
                    <DocNavLink href="/contribution-guidelines" label="Contribution Guidelines" />
                    <DocNavLink href="https://github.com" label="GitHub Repository" />
                    <DocNavLink href="/contact" label="Support" />
                  </nav>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="bg-white/5 border border-white/10 p-1 mb-8">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white/10">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="guides" className="data-[state=active]:bg-white/10">
                      Guides
                    </TabsTrigger>
                    <TabsTrigger value="api" className="data-[state=active]:bg-white/10">
                      API
                    </TabsTrigger>
                    <TabsTrigger value="examples" className="data-[state=active]:bg-white/10">
                      Examples
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                    <DocSection
                      id="getting-started"
                      title="Getting Started"
                      icon={<BookOpen className="h-6 w-6 text-purple-400" />}
                    >
                      <p className="text-gray-300 mb-4">
                        Portfolio Ideas is a curated collection of developer and designer portfolios to inspire your
                        next project. Here's how to get started:
                      </p>

                      <div className="space-y-6 mt-8">
                        <DocStep
                          number="01"
                          title="Browse the Collection"
                          description="Visit our portfolio table to browse through our curated collection of developer and designer portfolios."
                        />
                        <DocStep
                          number="02"
                          title="Filter by Technology"
                          description="Use the filters to find portfolios built with specific technologies that match your interests or project requirements."
                        />
                        <DocStep
                          number="03"
                          title="Explore Details"
                          description="Click on any portfolio to see more details, including the technologies used, screenshots, and links to the live site and source code."
                        />
                        <DocStep
                          number="04"
                          title="Get Inspired"
                          description="Use the ideas and inspiration from these portfolios to create your own unique portfolio website."
                        />
                      </div>
                    </DocSection>

                    <DocSection id="features" title="Features" icon={<Lightbulb className="h-6 w-6 text-purple-400" />}>
                      <p className="text-gray-300 mb-6">
                        Portfolio Ideas offers a range of features to help you find the perfect inspiration for your
                        next project:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FeatureCard
                          title="Curated Collection"
                          description="Over 130 handpicked portfolio websites from top developers and designers worldwide."
                        />
                        <FeatureCard
                          title="Technology Filters"
                          description="Filter portfolios by technology stack to find inspiration relevant to your skills."
                        />
                        <FeatureCard
                          title="Source Code Access"
                          description="Direct links to GitHub repositories to study the code behind these amazing portfolios."
                        />
                        <FeatureCard
                          title="Regular Updates"
                          description="New portfolios added weekly to keep the inspiration fresh and current."
                        />
                      </div>
                    </DocSection>

                    <DocSection id="usage" title="Usage Guide" icon={<FileText className="h-6 w-6 text-purple-400" />}>
                      <p className="text-gray-300 mb-6">
                        Learn how to make the most of Portfolio Ideas with our comprehensive usage guide:
                      </p>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-3">Browsing Portfolios</h4>
                          <p className="text-gray-300 mb-4">
                            The main portfolio table allows you to browse through all available portfolios. You can:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Scroll through the paginated list to see all portfolios</li>
                            <li>Click on portfolio cards to see more details</li>
                            <li>Use the search bar to find portfolios by author name</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3">Filtering</h4>
                          <p className="text-gray-300 mb-4">To find portfolios that match specific criteria:</p>
                          <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Click the "Filter by Tech" button to open the filter menu</li>
                            <li>Select one or more technologies to filter the results</li>
                            <li>Clear filters by clicking the "Clear Filters" button</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-3">Submitting Your Portfolio</h4>
                          <p className="text-gray-300 mb-4">Want to have your portfolio featured on Portfolio Ideas?</p>
                          <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Go to the Contact page and fill out the submission form</li>
                            <li>Include your name, portfolio URL, and GitHub repository link</li>
                            <li>Provide a brief description of your portfolio and the technologies used</li>
                            <li>Our team will review your submission and get back to you</li>
                          </ul>
                        </div>
                      </div>
                    </DocSection>

                    <DocSection id="api" title="API Reference" icon={<Code className="h-6 w-6 text-purple-400" />}>
                      <p className="text-gray-300 mb-6">
                        Portfolio Ideas provides a public API for developers who want to integrate our data into their
                        applications:
                      </p>

                      <div className="bg-slate-800 rounded-lg p-6 mb-6 overflow-x-auto">
                        <pre className="text-gray-300">
                          <code>
                            {`// Example API request
fetch('https://api.portfolioideas.com/v1/portfolios')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                          </code>
                        </pre>
                      </div>

                      <p className="text-gray-300 mb-4">Available endpoints:</p>

                      <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-mono text-purple-400 mb-2">GET /v1/portfolios</h4>
                          <p className="text-gray-300">Returns a list of all portfolios with pagination support.</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-mono text-purple-400 mb-2">GET /v1/portfolios/:id</h4>
                          <p className="text-gray-300">Returns detailed information about a specific portfolio.</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-mono text-purple-400 mb-2">GET /v1/technologies</h4>
                          <p className="text-gray-300">Returns a list of all available technologies for filtering.</p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button className="bg-purple-600 hover:bg-purple-700">View Full API Documentation</Button>
                      </div>
                    </DocSection>

                    <DocSection
                      id="faq"
                      title="Frequently Asked Questions"
                      icon={<Lightbulb className="h-6 w-6 text-purple-400" />}
                    >
                      <div className="space-y-6">
                        <FaqItem
                          question="How do I submit my portfolio to be featured?"
                          answer="You can submit your portfolio through our Contact page. Fill out the form with your details and portfolio information, and our team will review your submission."
                        />
                        <FaqItem
                          question="How often are new portfolios added?"
                          answer="We add new portfolios on a weekly basis. Our curation team is constantly looking for unique and inspiring work to showcase."
                        />
                        <FaqItem
                          question="Is there a cost to use Portfolio Ideas?"
                          answer="No, Portfolio Ideas is completely free to use. We believe in making inspiration accessible to everyone in the developer community."
                        />
                        <FaqItem
                          question="Can I use the API for commercial purposes?"
                          answer="Our API is available for both personal and commercial use. Please refer to our Terms of Service for more details on API usage limits and requirements."
                        />
                      </div>
                    </DocSection>
                  </TabsContent>

                  <TabsContent value="guides">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
                      <h3 className="text-2xl font-bold mb-4">Detailed Guides Coming Soon</h3>
                      <p className="text-gray-300 mb-6">
                        We're working on comprehensive guides to help you make the most of Portfolio Ideas. Check back
                        soon for step-by-step tutorials and best practices.
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700">Subscribe for Updates</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="api">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
                      <h3 className="text-2xl font-bold mb-4">API Documentation</h3>
                      <p className="text-gray-300 mb-6">
                        Detailed API documentation is available for developers who want to integrate Portfolio Ideas
                        data into their applications.
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700">View API Docs</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
                      <h3 className="text-2xl font-bold mb-4">Example Projects</h3>
                      <p className="text-gray-300 mb-6">
                        Check out example projects that use Portfolio Ideas data and API. More examples coming soon!
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700">Explore Examples</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function DocNavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="flex items-center py-2 text-gray-300 hover:text-white transition-colors">
      <ChevronRight className="h-4 w-4 mr-2 text-purple-400" />
      {label}
    </a>
  )
}

function DocSection({
  id,
  title,
  icon,
  children,
}: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="mb-16 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-purple-500/20 p-3 rounded-lg mr-4">{icon}</div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

function DocStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
          {number}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h4 className="text-xl font-semibold mb-2">{question}</h4>
      <p className="text-gray-300">{answer}</p>
    </div>
  )
}

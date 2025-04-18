"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GitPullRequest, Users, Code, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContributionGuidelinesPage() {
  // Remove the experimental useEffectEvent import

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
              <div className="inline-flex items-center justify-center p-3 bg-purple-500/20 rounded-full mb-6">
                <GitPullRequest className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contribution{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Guidelines
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn how to contribute to Portfolio Ideas and help us grow our collection of inspiring portfolios.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Guidelines Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-12 bg-purple-500/20 border-purple-500/50">
                <HelpCircle className="h-4 w-4 text-purple-400" />
                <AlertDescription>
                  Thank you for your interest in contributing to Portfolio Ideas! These guidelines will help you
                  understand how to submit portfolios, report issues, or contribute to our codebase.
                </AlertDescription>
              </Alert>

              <div className="space-y-16">
                <GuidelineSection
                  icon={<Users className="h-8 w-8 text-purple-400" />}
                  title="Submitting Portfolios"
                  description="Help us grow our collection by submitting outstanding portfolio websites."
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Submission Criteria</h3>
                    <p className="text-gray-300">
                      We're looking for high-quality, creative, and inspiring portfolio websites from developers and
                      designers. Before submitting, please ensure the portfolio meets the following criteria:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <CriteriaCard
                        title="Design Quality"
                        description="The portfolio should demonstrate good design principles, be visually appealing, and provide a good user experience."
                        icon={<CheckCircle className="h-5 w-5 text-green-400" />}
                      />
                      <CriteriaCard
                        title="Technical Implementation"
                        description="The code should be well-structured, follow best practices, and demonstrate technical proficiency."
                        icon={<CheckCircle className="h-5 w-5 text-green-400" />}
                      />
                      <CriteriaCard
                        title="Originality"
                        description="The portfolio should showcase creativity and originality in its approach to presenting the developer's work."
                        icon={<CheckCircle className="h-5 w-5 text-green-400" />}
                      />
                      <CriteriaCard
                        title="Accessibility"
                        description="The portfolio should follow accessibility best practices to ensure it's usable by everyone."
                        icon={<CheckCircle className="h-5 w-5 text-green-400" />}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mt-8">How to Submit</h3>
                    <p className="text-gray-300">To submit a portfolio for consideration, please follow these steps:</p>

                    <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                      <li>
                        <strong>Fill out the submission form</strong> on our{" "}
                        <a href="/contact" className="text-purple-400 hover:underline">
                          Contact page
                        </a>
                        , selecting "Portfolio Submission" as the subject.
                      </li>
                      <li>
                        <strong>Include the following information:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Portfolio owner's name</li>
                          <li>Live URL of the portfolio</li>
                          <li>GitHub repository URL (if available)</li>
                          <li>Technologies used (e.g., React, Vue, TailwindCSS)</li>
                          <li>Brief description of what makes this portfolio special</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Provide a high-quality screenshot</strong> of the portfolio's homepage or most
                        impressive section.
                      </li>
                    </ol>

                    <Alert className="mt-8 bg-amber-500/20 border-amber-500/50">
                      <AlertCircle className="h-4 w-4 text-amber-400" />
                      <AlertDescription>
                        Please ensure you have permission to submit someone else's portfolio if it's not your own. We
                        respect intellectual property rights and will only feature portfolios with proper attribution.
                      </AlertDescription>
                    </Alert>
                  </div>
                </GuidelineSection>

                <GuidelineSection
                  icon={<Code className="h-8 w-8 text-purple-400" />}
                  title="Contributing to the Codebase"
                  description="Help improve Portfolio Ideas by contributing to our open-source codebase."
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Getting Started</h3>
                    <p className="text-gray-300">
                      Portfolio Ideas is an open-source project, and we welcome contributions from developers of all
                      skill levels. Here's how to get started:
                    </p>

                    <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                      <li>
                        <strong>Fork the repository</strong> on GitHub.
                      </li>
                      <li>
                        <strong>Clone your fork</strong> to your local machine:
                        <pre className="bg-slate-800 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>git clone https://github.com/yourusername/portfolio-ideas.git</code>
                        </pre>
                      </li>
                      <li>
                        <strong>Install dependencies:</strong>
                        <pre className="bg-slate-800 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>cd portfolio-ideas npm install</code>
                        </pre>
                      </li>
                      <li>
                        <strong>Create a new branch</strong> for your feature or bug fix:
                        <pre className="bg-slate-800 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>git checkout -b feature/your-feature-name</code>
                        </pre>
                      </li>
                      <li>
                        <strong>Make your changes</strong> and commit them with descriptive commit messages.
                      </li>
                      <li>
                        <strong>Push your changes</strong> to your fork:
                        <pre className="bg-slate-800 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>git push origin feature/your-feature-name</code>
                        </pre>
                      </li>
                      <li>
                        <strong>Create a pull request</strong> from your fork to the main repository.
                      </li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-8">Code Style and Standards</h3>
                    <p className="text-gray-300">
                      To maintain code quality and consistency, please follow these guidelines:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Follow the existing code style and formatting.</li>
                      <li>Write clear, descriptive commit messages.</li>
                      <li>Include comments for complex logic or functionality.</li>
                      <li>Write tests for new features or bug fixes when applicable.</li>
                      <li>Ensure your code is accessible and responsive.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8">Pull Request Process</h3>
                    <p className="text-gray-300">When submitting a pull request, please:</p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Provide a clear description of the changes and their purpose.</li>
                      <li>Reference any related issues using the GitHub issue number (e.g., "Fixes #123").</li>
                      <li>Ensure all tests pass and there are no conflicts with the main branch.</li>
                      <li>Be responsive to feedback and be prepared to make requested changes.</li>
                    </ul>

                    <Alert className="mt-8 bg-green-500/20 border-green-500/50">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <AlertDescription>
                        We appreciate all contributions, no matter how small! Even fixing a typo or improving
                        documentation is valuable to the project.
                      </AlertDescription>
                    </Alert>
                  </div>
                </GuidelineSection>

                <GuidelineSection
                  icon={<AlertCircle className="h-8 w-8 text-purple-400" />}
                  title="Reporting Issues"
                  description="Help us improve by reporting bugs, suggesting features, or asking questions."
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">How to Report Issues</h3>
                    <p className="text-gray-300">
                      If you encounter a bug, have a feature request, or want to suggest an improvement, please:
                    </p>

                    <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                      <li>
                        <strong>Check existing issues</strong> to see if your problem or suggestion has already been
                        reported.
                      </li>
                      <li>
                        <strong>Create a new issue</strong> on our GitHub repository if your issue hasn't been reported.
                      </li>
                      <li>
                        <strong>Use a descriptive title</strong> that clearly summarizes the issue.
                      </li>
                      <li>
                        <strong>Provide detailed information</strong> about the issue, including:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Steps to reproduce (for bugs)</li>
                          <li>Expected behavior</li>
                          <li>Actual behavior</li>
                          <li>Screenshots or videos (if applicable)</li>
                          <li>Browser and operating system information</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Use issue templates</strong> when available to ensure you provide all necessary
                        information.
                      </li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-8">Feature Requests</h3>
                    <p className="text-gray-300">
                      We welcome suggestions for new features or improvements. When submitting a feature request,
                      please:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Clearly describe the feature and its purpose.</li>
                      <li>Explain how the feature would benefit users of Portfolio Ideas.</li>
                      <li>Provide examples or mockups if possible.</li>
                      <li>Indicate if you're willing to help implement the feature.</li>
                    </ul>

                    <Alert className="mt-8 bg-blue-500/20 border-blue-500/50">
                      <HelpCircle className="h-4 w-4 text-blue-400" />
                      <AlertDescription>
                        Your feedback helps us improve Portfolio Ideas. We review all issues and feature requests,
                        though we may not be able to implement every suggestion immediately.
                      </AlertDescription>
                    </Alert>
                  </div>
                </GuidelineSection>
              </div>

              <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Contribute?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  We're excited to see your contributions! Whether you're submitting a portfolio, reporting an issue, or
                  contributing code, your help makes Portfolio Ideas better for everyone.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    Submit a Portfolio
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function GuidelineSection({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-purple-500/20 p-3 rounded-lg mr-4">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="pl-16">{children}</div>
    </motion.div>
  )
}

function CriteriaCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
      <div className="flex items-start">
        <div className="mr-3 mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

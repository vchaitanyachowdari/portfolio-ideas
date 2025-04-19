"use client"

import { motion } from "framer-motion"
import { FileText, Clock, Users, Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
// Remove any useEffectEvent imports

const TermsSection = ({ title, content }: { title: string; content: string }) => (
  <div className="space-y-3">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default function TermsOfServicePage() {
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
                <FileText className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms carefully before using Portfolio Ideas.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-purple-400" />
                  <span>Last Updated: April 18, 2023</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-purple-400" />
                  <span>Applies to all users</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-2 text-purple-400" />
                  <span>
                    <a href="#" className="underline">
                      Download PDF version
                    </a>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10">
              <div className="space-y-12">
                <TermsSection
                  title="1. Acceptance of Terms"
                  content={`
                    <p>By accessing or using Portfolio Ideas (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.</p>
                    <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. You are advised to review these Terms periodically for any changes.</p>
                  `}
                />

                <TermsSection
                  title="2. Description of Service"
                  content={`
                    <p>Portfolio Ideas is a platform that provides a curated collection of developer and designer portfolios for inspiration. The Service includes:</p>
                    <ul>
                      <li>A browsable collection of portfolio websites</li>
                      <li>Filtering and search functionality</li>
                      <li>Links to external websites and GitHub repositories</li>
                      <li>Information about technologies used in each portfolio</li>
                    </ul>
                    <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.</p>
                  `}
                />

                <TermsSection
                  title="3. User Accounts"
                  content={`
                    <p>Some features of the Service may require you to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.</p>
                    <p>You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date. We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, not current, or incomplete.</p>
                  `}
                />

                <TermsSection
                  title="4. User Content"
                  content={`
                    <p>Our Service allows you to submit, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
                    <p>By posting Content on or through the Service, you represent and warrant that:</p>
                    &lt;ul&gt;
                      &lt;li&gt;The Content is yours (you own it) or you have the rights to use it.&lt;/li&gt;
                    &lt;/ul&gt;
                  `}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

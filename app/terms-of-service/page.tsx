"use client"

import { motion } from "framer-motion"
import { FileText, Clock, Users, Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
                    <ul>
                      <li>The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.</li>
                      <li>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</li>
                    </ul>
                    <p>We reserve the right to remove any Content from the Service at our discretion, without prior notice, for any reason whatsoever, including but not limited to, your violation of these Terms.</p>
                  `}
                />

                <TermsSection
                  title="5. Intellectual Property"
                  content={`
                    <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Portfolio Ideas and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Portfolio Ideas.</p>
                    <p>Portfolio Ideas respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property rights of any person.</p>
                  `}
                />

                <TermsSection
                  title="6. Links to Other Websites"
                  content={`
                    <p>Our Service may contain links to third-party websites or services that are not owned or controlled by Portfolio Ideas. Portfolio Ideas has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
                    <p>You acknowledge and agree that Portfolio Ideas shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
                    <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
                  `}
                />

                <TermsSection
                  title="7. Termination"
                  content={`
                    <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.</p>
                  `}
                />

                <TermsSection
                  title="8. Limitation of Liability"
                  content={`
                    <p>In no event shall Portfolio Ideas, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                    <ul>
                      <li>Your access to or use of or inability to access or use the Service;</li>
                      <li>Any conduct or content of any third party on the Service;</li>
                      <li>Any content obtained from the Service; and</li>
                      <li>Unauthorized access, use or alteration of your transmissions or content.</li>
                    </ul>
                  `}
                />

                <TermsSection
                  title="9. Disclaimer"
                  content={`
                    <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                    <p>Portfolio Ideas, its subsidiaries, affiliates, and its licensors do not warrant that:</p>
                    <ul>
                      <li>The Service will function uninterrupted, secure or available at any particular time or location;</li>
                      <li>Any errors or defects will be corrected;</li>
                      <li>The Service is free of viruses or other harmful components; or</li>
                      <li>The results of using the Service will meet your requirements.</li>
                    </ul>
                  `}
                />

                <TermsSection
                  title="10. Governing Law"
                  content={`
                    <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                  `}
                />

                <TermsSection
                  title="11. Changes to Terms"
                  content={`
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                  `}
                />

                <TermsSection
                  title="12. Contact Us"
                  content={`
                    <p>If you have any questions about these Terms, please contact us:</p>
                    <ul>
                      <li>By email: legal@portfolioideas.com</li>
                      <li>By phone: +1 (555) 123-4567</li>
                      <li>By mail: 123 Portfolio Street, San Francisco, CA 94103</li>
                    </ul>
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

function TermsSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-gray-300 space-y-4" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

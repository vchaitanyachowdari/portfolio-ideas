"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Users, FileText } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
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
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We value your privacy and are committed to protecting your personal information.
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
                  <FileText className="h-4 w-4 mr-2 text-purple-400" />
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

        {/* Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10">
              <div className="space-y-12">
                <PolicySection
                  title="Introduction"
                  content={`
                    <p>Welcome to Portfolio Ideas. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    <p>This privacy policy applies to all users of Portfolio Ideas and explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                  `}
                />

                <PolicySection
                  title="Information We Collect"
                  content={`
                    <p>We may collect several types of information from and about users of our website, including:</p>
                    <ul>
                      <li>Personal identifiable information (such as your name, email address, and contact information) that you voluntarily provide when submitting a contact form or portfolio submission.</li>
                      <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
                      <li>Non-personal identification information, including browser name, type of computer, and technical information about your means of connection to our website.</li>
                    </ul>
                  `}
                />

                <PolicySection
                  title="How We Use Your Information"
                  content={`
                    <p>We may use the information we collect from you for the following purposes:</p>
                    <ul>
                      <li>To present our website and its contents to you.</li>
                      <li>To provide you with information, products, or services that you request from us.</li>
                      <li>To fulfill any other purpose for which you provide it.</li>
                      <li>To notify you about changes to our website or any products or services we offer.</li>
                      <li>To improve our website and user experience.</li>
                      <li>For any other purpose with your consent.</li>
                    </ul>
                  `}
                />

                <PolicySection
                  title="Disclosure of Your Information"
                  content={`
                    <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                    <ul>
                      <li>To our subsidiaries and affiliates.</li>
                      <li>To contractors, service providers, and other third parties we use to support our business.</li>
                      <li>To fulfill the purpose for which you provide it.</li>
                      <li>For any other purpose disclosed by us when you provide the information.</li>
                      <li>With your consent.</li>
                    </ul>
                    <p>We may also disclose your personal information:</p>
                    <ul>
                      <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                      <li>To enforce or apply our terms of use and other agreements.</li>
                      <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Portfolio Ideas, our customers, or others.</li>
                    </ul>
                  `}
                />

                <PolicySection
                  title="Data Security"
                  content={`
                    <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.</p>
                    <p>The safety and security of your information also depends on you. We urge you to be careful about giving out information in public areas of the website. The information you share in public areas may be viewed by any user of the website.</p>
                    <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.</p>
                  `}
                />

                <PolicySection
                  title="Cookies and Tracking Technologies"
                  content={`
                    <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
                    <p>Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our website.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
                  `}
                />

                <PolicySection
                  title="Third-Party Links"
                  content={`
                    <p>Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                  `}
                />

                <PolicySection
                  title="Children's Privacy"
                  content={`
                    <p>Our website is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on the website. We do not knowingly collect personal information from children under 13.</p>
                    <p>If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                  `}
                />

                <PolicySection
                  title="Changes to Our Privacy Policy"
                  content={`
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                  `}
                />

                <PolicySection
                  title="Contact Us"
                  content={`
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul>
                      <li>By email: privacy@portfolioideas.com</li>
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

function PolicySection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-gray-300 space-y-4" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

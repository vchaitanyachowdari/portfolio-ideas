"use server"

import emailjs from "@emailjs/browser"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactResponse {
  success: boolean
  message: string
}

export async function sendContactEmail(formData: ContactFormData): Promise<ContactResponse> {
  try {
    // Get environment variables (server-side only)
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const contactEmail = process.env.CONTACT_EMAIL || "hello@portfolioideas.com"

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        message: "Email service is not properly configured. Please contact the administrator.",
      }
    }

    // Initialize EmailJS
    emailjs.init(publicKey)

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: contactEmail,
      reply_to: formData.email,
    }

    // Send email using EmailJS
    const response = await emailjs.send(serviceId, templateId, templateParams)

    if (response.status === 200) {
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("EmailJS Error:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
    }
  }
}

export async function checkEmailConfiguration(): Promise<boolean> {
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY

  return !!(serviceId && templateId && publicKey)
}

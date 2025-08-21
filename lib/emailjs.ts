import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''

export function sendEmail(templateParams: Record<string, any>) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
}

// Usage example:
// sendEmail({ name: 'John', message: 'Hello!' })

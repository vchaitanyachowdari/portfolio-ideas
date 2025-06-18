# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in the Portfolio Ideas contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

\`\`\`html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent via the Portfolio Ideas contact form.
\`\`\`

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## Step 5: Update Configuration

In `app/contact/page.tsx`, replace these values:

\`\`\`typescript
const EMAILJS_SERVICE_ID = "your_service_id"      // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "your_template_id"    // Replace with your Template ID  
const EMAILJS_PUBLIC_KEY = "your_public_key"      // Replace with your Public Key
\`\`\`

Also update the recipient email:
\`\`\`typescript
to_email: "your-email@example.com", // Replace with your email
\`\`\`

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email for the message
4. Verify the form shows success/error messages correctly

## Template Variables

The following variables are available in your EmailJS template:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Selected subject
- `{{message}}` - User's message
- `{{to_email}}` - Your email (recipient)

## Troubleshooting

### Common Issues:

1. **"User ID is required"** - Make sure you've set the correct Public Key
2. **"Service is not found"** - Verify your Service ID is correct
3. **"Template is not found"** - Check your Template ID
4. **Emails not received** - Check spam folder, verify email service setup

### Rate Limits:

- Free plan: 200 emails/month
- Paid plans available for higher volumes

## Security Notes

- Never expose your Private Key in client-side code
- The Public Key is safe to use in frontend applications
- Consider implementing additional spam protection for production use

## Support

For EmailJS-specific issues, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

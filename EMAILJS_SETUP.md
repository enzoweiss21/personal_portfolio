# EmailJS Setup Guide

To make the contact form work, you need to set up EmailJS (free service that sends emails from frontend).

## 🚀 Quick Setup Steps:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (100 emails/month free)

### 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- **Copy your Service ID** (starts with `service_`)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

- **Copy your Template ID** (starts with `template_`)

### 4. Get Public Key
- Go to "Account" → "General"
- **Copy your Public Key**

### 5. Update the Code
Replace these values in `components/contact-section.tsx`:

```typescript
const serviceId = 'service_your_service_id' // Replace with your Service ID
const templateId = 'template_your_template_id' // Replace with your Template ID  
const publicKey = 'your_public_key' // Replace with your Public Key
```

### 6. Test the Form
- Fill out the contact form
- Submit it
- Check your email for the message!

## 🎯 What Happens:
- User fills out form → EmailJS sends email to your inbox
- You get notified with their message
- User sees success/error message
- No backend needed!

## 💡 Alternative: Use Environment Variables
For security, you can use environment variables:

1. Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use:
```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
```

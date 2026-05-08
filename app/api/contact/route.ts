import { NextResponse } from 'next/server'

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const recipientEmail = process.env.CONTACT_TO_EMAIL ?? 'bharaninagarathinam@gmail.com'
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>'

type DeliveryResult = {
  sent: boolean
  notConfigured?: boolean
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function sendEmail({ name, email, subject, message }: Required<ContactPayload>): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return { sent: false, notConfigured: true }
  }

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipientEmail,
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Resend contact email failed:', response.status, errorText)
  }

  return { sent: response.ok }
}

async function sendSms({ name, email, subject, message }: Required<ContactPayload>) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const fromPhone = process.env.TWILIO_FROM_PHONE
  const toPhone = process.env.CONTACT_TO_PHONE

  if (!accountSid || !authToken || !fromPhone || !toPhone) {
    return false
  }

  const body = [
    'New portfolio contact message',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Message: ${message}`,
  ].join('\n')

  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString('base64')
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      From: fromPhone,
      To: toPhone,
      Body: body.slice(0, 1500),
    }),
  })

  return response.ok
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload
    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const subject = payload.subject?.trim()
    const message = payload.message?.trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Please fill in every field.' }, { status: 400 })
    }

    const emailResult = await sendEmail({ name, email, subject, message })
    const smsSent = await sendSms({ name, email, subject, message })

    if (emailResult.notConfigured) {
      return NextResponse.json(
        {
          code: 'CONTACT_NOT_CONFIGURED',
          error: 'Contact email delivery is not configured yet. Add RESEND_API_KEY to send messages to bharaninagarathinam@gmail.com.',
        },
        { status: 500 },
      )
    }

    if (!emailResult.sent) {
      return NextResponse.json({ error: 'Unable to send email right now. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, emailSent: true, smsSent })
  } catch {
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 })
  }
}

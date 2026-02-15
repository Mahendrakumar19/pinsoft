import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/emailService'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email notification via SMTP first (before database operations)
    try {
      const emailSent = await sendContactEmail({ name, email, subject, message })
      if (emailSent) {
        console.log('Contact form submission email sent successfully')
      } else {
        console.error('Failed to send contact form submission email')
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError)
    }

    // Connect to database and save submission (optional - won't break if fails)
    try {
      const client = await import('@/lib/mongodb')
      const db = (await client.default).db()
      
      const contactSubmission = {
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
        status: 'new', // new, contacted, closed
      }
      
      const result = await db.collection('contacts').insertOne(contactSubmission)
      console.log('Contact form submission saved to database:', result.insertedId)
    } catch (dbError: unknown) {
      console.warn('Database warning (not critical):', (dbError as Error).message || dbError)
      // Continue execution even if DB save fails
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

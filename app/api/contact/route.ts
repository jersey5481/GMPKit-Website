import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple email validation regex
const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('reCAPTCHA secret key is not defined');
      return false;
    }
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    
    // You can adjust the score threshold as needed (0.0 to 1.0)
    // Higher values are more strict (0.5 is moderate, 0.7 is strict)
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

export async function POST(request: NextRequest) {
  try {
    // Get form data
    const formData = await request.json();
    const { firstName, lastName, email, company, jobTitle, phone, interest, message, recaptchaToken } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }
    
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { success: false, message: 'Spam detection triggered. Please try again.' },
        { status: 400 }
      );
    }

    // Here you would typically send the email using a service like SendGrid, AWS SES, etc.
    // For now, we'll just log the data and return a success response
    console.log('Contact form submission:', formData);

    // Example of how you would send an email with a service like SendGrid:
    /*
    const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'your-email@gmpkit.com' }],
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          },
        ],
        from: { email: 'no-reply@gmpkit.com', name: 'GMPKit Website' },
        reply_to: { email: email, name: `${firstName} ${lastName}` },
        content: [
          {
            type: 'text/html',
            value: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Job Title:</strong> ${jobTitle || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Interest:</strong> ${interest || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          },
        ],
      }),
    });
    
    if (!sendgridResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will be in touch shortly.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

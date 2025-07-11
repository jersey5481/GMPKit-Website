# reCAPTCHA Setup for GMPKit Website

This document explains how to set up Google reCAPTCHA v3 for the contact form.

## Step 1: Get reCAPTCHA Keys

1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click on the "+" button to create a new site
4. Fill in the form:
   - Label: GMPKit Website
   - reCAPTCHA type: reCAPTCHA v3
   - Domains: Add your domain(s), e.g., gmpkit.com, www.gmpkit.com, localhost
   - Accept the Terms of Service
   - Click "Submit"
5. You'll receive two keys:
   - Site Key (for client-side)
   - Secret Key (for server-side)

## Step 2: Add Keys to Environment Variables

Create a `.env.local` file in the root of your project with the following content:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

For production deployment, add these environment variables to your hosting platform (Vercel, Netlify, etc.).

## Step 3: Verify Implementation

The reCAPTCHA integration is already set up in the codebase:

- `RecaptchaProvider` wraps the application in `app/layout.tsx`
- Contact form uses `useGoogleReCaptcha` hook to get tokens
- API route verifies tokens before processing form submissions

## Adjusting reCAPTCHA Settings

You can adjust the spam detection threshold in `app/api/contact/route.ts`:

```typescript
// Higher values are more strict (0.5 is moderate, 0.7 is strict)
return data.success && data.score >= 0.5;
```

- 0.0 to 0.3: Low security (more submissions pass)
- 0.4 to 0.6: Moderate security (balanced)
- 0.7 to 1.0: High security (more submissions blocked)

## Testing

reCAPTCHA v3 is invisible to users and assigns a score based on user behavior. For testing:

1. Fill out and submit the contact form normally
2. Check browser console and server logs for any reCAPTCHA errors
3. Use the Google reCAPTCHA admin console to monitor traffic and scores

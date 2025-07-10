# Setting Up Your Sanity.io Blog

This document provides instructions for setting up your Sanity.io blog integration with your Next.js website.

## Getting Started with Sanity.io

1. **Create a Sanity.io Account**
   - Go to [sanity.io](https://www.sanity.io/) and sign up for an account
   - Create a new project from the Sanity dashboard

2. **Get Your Project ID**
   - After creating a project, you'll be given a project ID
   - This ID is needed for connecting your Next.js app to Sanity

3. **Environment Variables Setup**
   - Create a `.env.local` file in your project root with the following variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token  # Only needed for preview mode
   ```

4. **Update the Sanity Configuration**
   - Open `sanity.config.js` and replace `'YOUR_PROJECT_ID'` with your actual Sanity project ID

## Running Your Blog

1. **Start Your Next.js Development Server**
   ```
   npm run dev
   ```

2. **Access the Sanity Studio**
   - Visit `http://localhost:3000/studio` to access your Sanity Studio
   - Log in with your Sanity.io credentials
   - Start creating content!

3. **View Your Blog**
   - Visit `http://localhost:3000/blog` to see your blog posts

## Content Structure

The blog is set up with the following content types:

1. **Blog Posts** - Your main content with title, body, images, etc.
2. **Authors** - Information about post authors
3. **Categories** - Categories to organize your posts

## Need Help?

Refer to the [Sanity Documentation](https://www.sanity.io/docs) for more detailed information on customizing your Sanity setup.

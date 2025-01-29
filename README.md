# Fujiway Dashboard

A modern dashboard application built with Next.js, featuring authentication powered by Supabase.

## Features

- User authentication (sign up, sign in, password reset)
- Protected routes with middleware
- Modern UI with Tailwind CSS
- Responsive sidebar navigation
- KPI monitoring and metrics visualization

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase (Authentication & Database)
- React Icons

## License

MIT 
# Nocfra Solutions Website

Modern, corporate website for Nocfra Solutions Limited built with Next.js 14, Tailwind CSS, and TypeScript.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Add assets under `public/`:
- `nocfra-logo.png` – company logo (used in navbar/footer)
- `og.jpg` – OpenGraph social image (1200x630)

3. Configure email (optional for local dev). Create `.env.local`:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_password
MAIL_FROM="Nocfra Website <no-reply@nocfra.com>"
MAIL_TO=Innocent.Ezeiru@gmail.com
```

If SMTP vars are absent, the API logs emails to the console (dev mode).

4. Run the dev server:

```bash
npm run dev
```

Visit http://localhost:3000

## Tech
- Next.js App Router (v14)
- Tailwind CSS
- TypeScript
- Nodemailer (placeholder)

## Structure
- `app/` – routing, pages, and API
- `components/` – reusable UI sections
- `public/` – static assets

## Brand
- Primary: `#F47A20` (orange)
- Secondary: `#333333` (dark)
- Accent: `#FFFFFF` (white)

Headings use an elegant serif; body uses a clean sans-serif.


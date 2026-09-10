# Vexora website

Marketing site for **Vexora Developers & Consulting Private Limited**, Khairahani-01, Chitwan, Nepal.

- **Framework** — Next.js 16 (App Router) + TypeScript
- **UI** — [HeroUI v3](https://heroui.com) on Tailwind CSS v4
- **Backend** — Supabase (contact-form submissions only)
- **Hosting** — Vercel

## Running it

```bash
npm install
cp .env.example .env.local   # fill in the two Supabase values
npm run dev
```

## Theme

HeroUI's own tokens are overridden in `src/app/globals.css`. Only the base tokens are
set — HeroUI derives hover/soft/secondary shades from them with `color-mix()`. Two
deliberate departures from stock HeroUI:

- the accent is the Vexora green (`#7CD800`) rather than HeroUI's blue, which means
  `--accent-foreground` must be near-black (10.5:1) rather than white;
- `--font-sans` is IBM Plex Sans with Saira for display, rather than Inter.

The overrides are intentionally **unlayered**, so they beat HeroUI's `@layer theme`
defaults without `!important`.

## Content

Everything that appears on more than one page lives in `src/lib/site.ts` — company
details, services, process steps, FAQs. Edit there, not in the pages.

Text in `[SQUARE BRACKETS]` renders green via the `<Todo>` component and marks a real
fact that still needs supplying (prices, PAN, founder names, the case-study outcome).
Search for `[` to find them all.

## Contact form

`POST /api/enquiry` → `public.enquiries` in Supabase.

The route validates server-side, caps field lengths, and drops anything that fills the
hidden `company_website` honeypot. RLS is what actually protects the table: `anon` may
`INSERT` and nothing else, so submissions cannot be read back with the publishable key.
Reading enquiries requires the service role — use the Supabase dashboard.

## Deployment

Pushes to `main` deploy via Vercel. Set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`
in the Vercel project's environment variables.

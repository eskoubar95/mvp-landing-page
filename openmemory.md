# OpenMemory Guide - MVP Landing Page

## Overview
MVP landing page projekt til ansøgning hos Online Minds som AI Growth Hacker. Projektet er en Rentumo-inspireret platform der hjælper boligsøgende med at finde lejeboliger gennem automatiske alerts.

## Architecture

### Tech Stack
- **Frontend:** React 18+ (Vite), Tailwind CSS, Framer Motion
- **Backend:** Serverless functions (Vercel/Netlify)
- **Email:** Resend/SendGrid
- **AI:** OpenAI API (GPT-4/3.5)
- **Hosting:** Vercel eller Netlify
- **Database:** (Optional) Supabase eller JSON/localStorage for MVP

### Project Structure
```
mvp-landing-page/
├── .project/
│   └── PRD.md (Product Requirements Document)
├── openmemory.md (this file)
└── [future: src/, public/, etc.]
```

## User Defined Namespaces
- [Leave blank - user populates]

## Components
*(To be populated as components are built)*

## Patterns
*(To be populated as patterns emerge)*

## Project Info

### Purpose
Demonstrere kompetencer til Online Minds jobansøgning:
- Landing page development og conversion optimization
- Lead generation og email automation
- AI-integration
- Growth hacking teknikker
- Data-driven marketing

### Key Features (Planned)
1. Conversion-optimized landing page
2. Lead capture form med validation
3. Email automation flow (welcome + nurture sequence)
4. AI integration (OpenAI API)
5. Analytics og tracking (GA4)
6. Lead magnet (PDF guide)

### Target Audience
- Primary: Boligsøgende i København (25-35 år)
- Secondary: Online Minds teamet (evaluatorer)

### Success Metrics
- Conversion rate > 3%
- Page load time < 2s
- Email delivery rate > 95%
- Mobile Lighthouse score > 90

### Critical Requirements
- **⚠️ Search Engine Blocking:** Siden må IKKE indekseres (test/ansøgning)
  - Robots.txt med `Disallow: /`
  - Meta robots `noindex, nofollow` på alle sider
  - X-Robots-Tag HTTP header


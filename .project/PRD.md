# Product Requirements Document (PRD)
## MVP Landing Page - Rentumo-Inspireret Projekt

**Version:** 1.0  
**Dato:** 2025-01-27  
**Status:** Draft  
**Formål:** MVP til ansøgning hos Online Minds som AI Growth Hacker

---

## 1. Executive Summary

### 1.1 Projektoversigt
Dette projekt er en MVP (Minimum Viable Product) landing page med fuld funnel-funktionalitet, designet til at demonstrere kompetencer inden for:
- Landing page development og conversion optimization
- Lead generation og email automation
- AI-integration og automation
- Growth hacking teknikker
- Data-driven marketing

### 1.2 Koncept
En Rentumo-inspireret platform der hjælper boligsøgende med at finde lejeboliger hurtigere gennem automatiske alerts og AI-drevet matching.

**Value Proposition:** "Find din drømmebolig før alle andre - automatiske alerts direkte i din indbakke"

### 1.3 ⚠️ Vigtig: Search Engine Indexing
**KRITISK KRAV:** Siden må **IKKE** indekseres af søgemaskiner, da dette kun er en test/ansøgning. 
- Alle sider skal have `noindex, nofollow` meta tags
- Robots.txt skal blokere alle bots
- X-Robots-Tag HTTP header skal være sat
- Se sektion 7.1.1 for detaljerede krav

---

## 2. Projektmål

### 2.1 Primære Mål
1. **Demonstrere tekniske færdigheder:**
   - Moderne, konverterende landing page
   - Funktionel lead capture og email automation
   - AI-integration (OpenAI API)
   - Analytics og tracking setup

2. **Vise Growth Hacker mindset:**
   - Data-driven beslutninger
   - Conversion optimization
   - A/B test readiness
   - Marketing automation flows

3. **Imponere Online Minds:**
   - Viser forståelse af deres brands (Rentumo)
   - Demonstrerer relevante skills fra jobopslaget
   - Producerer et funktionelt, deployable produkt

### 2.2 Success Metrics
- **Tekniske:**
  - Page load time < 2 sekunder
  - Mobile-first, responsive design
  - 100% uptime på demo
  - Zero console errors

- **Marketing:**
  - Conversion rate > 3% (signup rate)
  - Email delivery rate > 95%
  - Lead magnet download rate > 60%
  - Analytics tracking fungerer korrekt

---

## 3. Målgruppe

### 3.1 Primær Målgruppe
**Boligsøgende i København**
- Alder: 25-35 år
- Situation: Søger lejebolig (1-2 værelser)
- Pain points:
  - Mange boligsider at tjekke
  - Mister gode boliger fordi de er for langsomme
  - Frustreret over at søge hver dag
  - Vil have alerts automatisk

### 3.2 Sekundær Målgruppe
- Studerende der søger kollegieværelse
- Par der skal flytte sammen
- Expats der er nye i byen

### 3.3 Jobansøgning Målgruppe
**Online Minds teamet** (de facto evaluatorer)
- Vurderer tekniske færdigheder
- Ser efter growth mindset
- Tjekker forståelse af deres brands

---

## 4. Features og Funktionalitet

### 4.1 Landing Page Features

#### 4.1.1 Hero Section
- **Overskrift:** "Find din drømmebolig før alle andre"
- **Underoverskrift:** "Automatiske alerts om nye lejeboliger direkte i din indbakke"
- **CTA Button:** "Start gratis - Få alerts nu"
- **Visual:** Hero image/video (bolig-relateret, moderne)
- **Trust indicators:** "Allerede hjulpet 500+ boligsøgende"

#### 4.1.2 Problem/Solution Section
**3 Pain Points med ikoner:**
1. "Tjekker du 10+ boligsider hver dag?" → "Vi tjekker dem for dig"
2. "Mister du gode boliger fordi du er for langsom?" → "Få alerts i realtid"
3. "Gider du ikke søge manuelt?" → "Automatisk matching baseret på dine præferencer"

#### 4.1.3 How It Works Section
**3-trins proces:**
1. **Sign up** - Tilmeld dig gratis (30 sekunder)
2. **Sæt præferencer** - Vælg område, størrelse, pris
3. **Få alerts** - Modtag emails når nye boliger matcher

#### 4.1.4 Lead Magnet Section
- **Titel:** "Gratis Guide: Top 10 Hemmelige Boligsider i København"
- **Beskrivelse:** "Download vores eksklusive guide med boligsider du ikke kender"
- **CTA:** "Download gratis guide"
- **Visual:** PDF ikon eller preview

#### 4.1.5 Social Proof Section
- **Testimonials:** 3-4 korte testimonials med navn og by
- **Stats:** "500+ boligsøgende", "1,200+ alerts sendt", "98% tilfredshed"
- **Logos:** (hvis relevant) Partnere eller medier der har omtalt

#### 4.1.6 Features/Benefits Section
**6 nøglefeatures:**
1. ✅ Realtids alerts
2. ✅ AI-drevet matching
3. ✅ Alle boligsider på ét sted
4. ✅ Gratis at starte
5. ✅ Ingen spam - kun relevante alerts
6. ✅ Works på mobil

#### 4.1.7 FAQ Section
**6-8 ofte stillede spørgsmål:**
- Er det virkelig gratis?
- Hvor mange alerts får jeg?
- Hvilke boligsider dækker I?
- Kan jeg annullere når som helst?
- Hvordan virker AI-matching?
- Er mine data sikre?

#### 4.1.8 Final CTA Section
- **Overskrift:** "Klar til at finde din drømmebolig?"
- **CTA Button:** "Start gratis nu - Ingen kreditkort påkrævet"
- **Trust text:** "✓ Gratis forever ✓ Ingen binding ✓ Annuller når som helst"

### 4.2 Lead Capture Form

#### 4.2.1 Form Fields
**Minimum (MVP):**
- Email (required)
- Navn (required)
- By/Område (required dropdown)
- Boligtype (optional: 1-værelse, 2-værelse, etc.)

**Advanced (Nice-to-have):**
- Maks. leje (optional)
- Notifikationspræferencer (email frequency)
- GDPR consent checkbox

#### 4.2.2 Form Validation
- Email format validation
- Required fields validation
- Real-time feedback
- Error messages på dansk

#### 4.2.3 Form Submission
- Loading state på submit button
- Success message/animation
- Redirect til thank you page
- Email sendt automatisk

### 4.3 Thank You Page

#### 4.3.1 Content
- **Overskrift:** "Tak! Tjek din indbakke"
- **Beskrivelse:** 
  - "Vi har sendt dig en bekræftelsesemail"
  - "Download din gratis guide her: [Link]"
  - "Første alerts kommer inden for 24 timer"
- **CTA:** "Download gratis guide" (hvis ikke allerede downloadet)
- **Social sharing:** "Del med venner der også søger bolig"

#### 4.3.2 Next Steps
- Link til guide download
- Link til at opdatere præferencer
- Link til at følge på sociale medier

### 4.4 Email Automation Flow

#### 4.4.1 Welcome Email (Sendt umiddelbart)
**Subject:** "Velkommen! Din første alert kommer snart 🏠"
**Content:**
- Velkomstbesked
- Link til at downloade gratis guide
- Link til at opdatere præferencer
- Hvad du kan forvente (antal alerts, frekvens)

#### 4.4.2 Lead Magnet Email (Sendt 5 min efter)
**Subject:** "Her er din gratis guide: Top 10 Hemmelige Boligsider"
**Content:**
- PDF vedhæftet eller download link
- Kort introduktion til indholdet
- CTA til at dele med venner

#### 4.4.3 Nurture Sequence
**Email 1 (Dag 2):** "Sådan får du mest ud af dine alerts"
- Tips til at optimere søgning
- Link til at opdatere præferencer

**Email 2 (Dag 5):** "Har du set disse nye boliger?"
- Highlight 2-3 nye boliger (mock data)
- CTA til at se flere

**Email 3 (Dag 10):** "Opgrader til Premium?"
- Feature comparison
- CTA til premium (optional - kan være fremtidig feature)

### 4.5 AI Integration Features

#### 4.5.1 AI-Powered Matching (Mock/Concept)
- **Beskrivelse:** "Vores AI analyserer boligopslag og matcher dem med dine præferencer"
- **Visual:** Simple illustration eller diagram
- **Teknisk:** 
  - OpenAI API integration (mock responses)
  - Kan vise "AI Analysis" af en boligopslag
  - Demonstrerer teknisk kompetence

#### 4.5.2 AI Content Generation (Optional)
- Auto-genereret boligbeskrivelser
- AI-oversættelse (hvis relevant)
- Smart kategorisering af boliger

### 4.6 Analytics og Tracking

#### 4.6.1 Implementerede Trackers
- **Google Analytics 4:** Page views, events, conversions
- **Facebook Pixel:** (hvis relevant til demo)
- **Custom Events:**
  - Form submissions
  - Button clicks
  - Scroll depth
  - Time on page
  - Lead magnet downloads

#### 4.6.2 Conversion Tracking
- Primary conversion: Email signup
- Secondary conversion: Lead magnet download
- Micro-conversions: Button clicks, scroll depth

---

## 5. Teknisk Specifikation

### 5.1 Tech Stack

#### 5.1.1 Frontend
- **Framework:** React 18+ (Vite eller Create React App)
  - **Rationale:** Simpler setup, hurtigere development, nok for MVP
  - **Alternativ:** Next.js 14+ (hvis SSR/SSG ønskes, men ikke nødvendigt)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion eller CSS animations
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React eller Heroicons
- **Build Tool:** Vite (anbefalet) eller Create React App

#### 5.1.2 Backend/API
- **API Routes:** Serverless functions
  - **Vercel:** Serverless Functions (fungerer med React)
  - **Netlify:** Netlify Functions
  - **Alternativ:** Next.js API routes (hvis Next.js bruges)
- **Email Service:** 
  - Primary: Resend eller SendGrid
  - Alternative: Mailchimp API
- **Database:** (Optional for MVP)
  - Supabase (PostgreSQL) - gratis tier
  - Vercel Postgres (hvis Vercel bruges)
  - JSON fil eller localStorage (for ultra-simple MVP)
- **File Storage:** 
  - Vercel Blob eller AWS S3 (for lead magnet PDF)
  - Alternativ: GitHub Pages + public folder (for statisk PDF)

#### 5.1.3 AI Integration
- **OpenAI API:** GPT-4 eller GPT-3.5-turbo
- **Use Cases:**
  - Boligopslag analyse
  - Email personalisering
  - Content generation

#### 5.1.4 Hosting & Deployment
- **Platform:** 
  - **Vercel** (anbefalet - gratis, nemt, understøtter React + serverless functions)
  - **Netlify** (alternativ - gratis, nemt, understøtter React + functions)
  - **GitHub Pages** (hvis kun statisk site)
- **Domain:** Custom domain (optional) eller platform subdomain
- **CDN:** Automatisk via hosting platform
- **SSL:** Automatisk via hosting platform

### 5.2 Performance Krav

#### 5.2.1 Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

#### 5.2.2 Page Speed
- **Lighthouse Score:** > 90 (Performance)
- **Mobile-first:** Optimized for mobile devices
- **Image Optimization:** 
  - React: `react-image` eller `next/image` (hvis Next.js)
  - Lazy loading og WebP format
- **Code Splitting:** 
  - React: React.lazy() og Suspense
  - Vite: Automatic code splitting

### 5.3 Security

#### 5.3.1 Data Protection
- **GDPR Compliance:** Cookie consent, privacy policy
- **Email Validation:** Server-side + client-side
- **Rate Limiting:** API route protection
- **Input Sanitization:** All user inputs
- **Search Engine Blocking:** 
  - **KRITISK:** Siden må ikke indekseres (test/ansøgning)
  - Robots.txt med `Disallow: /` for alle bots
  - Meta robots noindex, nofollow tags på alle sider
  - X-Robots-Tag HTTP header i alle responses

#### 5.3.2 Environment Variables
- API keys i `.env.local`
- Never commit secrets
- Use Vercel environment variables for production

### 5.4 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 6. Design Krav

### 6.1 Design System

#### 6.1.1 Farver
- **Primary:** Moderne blå eller grøn (trust-building)
- **Secondary:** Accent farve for CTAs
- **Neutral:** Gråskala for tekst
- **Success:** Grøn for positive states
- **Error:** Rød for fejl

#### 6.1.2 Typografi
- **Headings:** Sans-serif, bold (f.eks. Inter, Poppins)
- **Body:** Sans-serif, regular (readable)
- **CTA Buttons:** Bold, uppercase eller title case

#### 6.1.3 Spacing
- Konsistent spacing system (4px eller 8px grid)
- Generous whitespace
- Mobile-friendly touch targets (min 44x44px)

### 6.2 UI/UX Principper

#### 6.2.1 Conversion Optimization
- **Above the fold:** Clear value proposition + CTA
- **Visual hierarchy:** Guide øjet til CTA
- **Trust signals:** Testimonials, stats, logos
- **Urgency/Scarcity:** (Hvis relevant) "Limited spots"
- **Social proof:** Testimonials, user count

#### 6.2.2 Mobile-First Design
- Touch-friendly buttons
- Readable font sizes
- Thumb-friendly navigation
- Fast loading on mobile

#### 6.2.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- Color contrast ratios
- Alt text på alle billeder

### 6.3 Visual Assets

#### 6.3.1 Billeder
- Hero image/video (bolig-relateret)
- Icons for features
- Testimonial avatars (placeholder eller AI-generated)
- Screenshots/mockups (hvis relevant)

#### 6.3.2 Branding
- Logo (kan være tekst-baseret for MVP)
- Favicon
- Open Graph images for social sharing

---

## 7. Marketing og Growth Strategi

### 7.1 Landing Page Optimization

#### 7.1.1 SEO & Indexing Control
**⚠️ KRITISK: Siden må IKKE indekseres af søgemaskiner (test/ansøgning)**

- **Meta Robots Tags:** 
  - `<meta name="robots" content="noindex, nofollow">` på alle sider
  - `<meta name="googlebot" content="noindex, nofollow">`
- **X-Robots-Tag HTTP Header:** 
  - `X-Robots-Tag: noindex, nofollow` i alle HTTP responses
- **Robots.txt:** 
  - Bloker alle bots: `User-agent: *` + `Disallow: /`
  - Placeres i `/public/robots.txt`
- **Sitemap:** 
  - **IKKE oprette** (ingen sitemap.xml)
- **Meta Tags:** 
  - Title og description (kun til intern brug, ikke til SEO)
- **Open Graph:** 
  - Kan bruges til social sharing, men med noindex tag
- **Structured Data:** 
  - **IKKE inkluder** (da siden ikke skal indekseres)

#### 7.1.2 Conversion Optimization
- A/B test readiness (struktur klar til tests)
- Multiple CTA placements
- Exit-intent popup (optional)
- Scroll-triggered animations

### 7.2 Lead Generation Strategi

#### 7.2.1 Lead Magnet
- **Content:** "Top 10 Hemmelige Boligsider i København"
- **Format:** PDF download
- **Value:** Eksklusiv information ikke tilgængelig andetsteds
- **Delivery:** Via email automation

#### 7.2.2 Email Marketing
- Welcome sequence (3-5 emails)
- Nurture campaign
- Re-engagement emails
- Newsletter (optional)

### 7.3 Paid Advertising (Mock/Concept)

#### 7.3.1 Meta Ads Campaign
- **Creative:** Hero image + value prop
- **Copy:** "Find din drømmebolig før alle andre"
- **Targeting:** 25-35 år, København, interesseret i bolig
- **Objective:** Lead generation
- **Landing Page:** Optimized for conversions

#### 7.3.2 Google Ads (Optional)
- Search ads for "lejebolig københavn"
- Display ads retargeting
- YouTube pre-roll (hvis video content)

### 7.4 Organic Growth

#### 7.4.1 Content Marketing
- Blog posts om boligsøgning (future)
- SEO-optimized content
- Social media posts

#### 7.4.2 Viral Mechanics
- Referral program (future)
- Social sharing incentives
- "Del med venner" CTAs

---

## 8. Success Metrics og KPI'er

### 8.1 Tekniske Metrics

| Metric | Target | Måling |
|--------|--------|--------|
| Page Load Time | < 2s | Lighthouse |
| Mobile Score | > 90 | Lighthouse |
| Uptime | 99.9% | Vercel Analytics |
| Error Rate | < 0.1% | Error tracking |

### 8.2 Marketing Metrics

| Metric | Target | Måling |
|--------|--------|--------|
| Conversion Rate | > 3% | GA4 |
| Email Signup Rate | > 3% | Form submissions |
| Lead Magnet Download | > 60% | Download tracking |
| Email Open Rate | > 25% | Email service |
| Email Click Rate | > 5% | Email service |

### 8.3 User Engagement

| Metric | Target | Måling |
|--------|--------|--------|
| Time on Page | > 2 min | GA4 |
| Scroll Depth | > 75% | GA4 |
| Bounce Rate | < 50% | GA4 |
| Pages per Session | > 2 | GA4 |

---

## 9. Implementation Timeline

### 9.1 Fase 1: Setup og Foundation (Dag 1-2)
- [ ] Projekt setup (React + Vite, dependencies)
- [ ] Design system (Tailwind config, colors, typography)
- [ ] Basic layout og navigation
- [ ] Git repository setup
- [ ] **Search engine blocking setup:**
  - [ ] Robots.txt med `Disallow: /` i `/public/robots.txt`
  - [ ] Meta robots noindex tags i HTML head (index.html eller React Helmet)
  - [ ] X-Robots-Tag HTTP header (via hosting platform eller serverless function)

### 9.2 Fase 2: Landing Page Development (Dag 3-5)
- [ ] Hero section
- [ ] Problem/Solution section
- [ ] How It Works section
- [ ] Features/Benefits section
- [ ] Social Proof section
- [ ] FAQ section
- [ ] Footer

### 9.3 Fase 3: Lead Capture (Dag 6-7)
- [ ] Form component med validation
- [ ] Serverless function/API endpoint for form submission
  - Vercel: `/api` folder med serverless function
  - Netlify: `/netlify/functions` folder
- [ ] Email service integration
- [ ] Thank you page
- [ ] Error handling

### 9.4 Fase 4: Email Automation (Dag 8-9)
- [ ] Welcome email template
- [ ] Lead magnet email template
- [ ] Nurture sequence setup
- [ ] Email service configuration
- [ ] Testing af email flows

### 9.5 Fase 5: AI Integration (Dag 10)
- [ ] OpenAI API setup
- [ ] AI matching feature (mock)
- [ ] AI content generation (optional)
- [ ] UI for AI features

### 9.6 Fase 6: Analytics og Optimization (Dag 11)
- [ ] Google Analytics 4 setup
- [ ] Event tracking implementation
- [ ] Conversion tracking
- [ ] Performance optimization

### 9.7 Fase 7: Testing og Polish (Dag 12)
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Performance optimization
- [ ] Bug fixes
- [ ] Content review
- [ ] **Verify search engine blocking:**
  - [ ] Test robots.txt er tilgængelig og korrekt
  - [ ] Verify meta robots tags i HTML source
  - [ ] Check X-Robots-Tag header i HTTP response
  - [ ] Test med Google Search Console (hvis muligt) at siden ikke indekseres

### 9.8 Fase 8: Deployment (Dag 13)
- [ ] Vercel deployment
- [ ] Domain setup (hvis relevant)
- [ ] SSL configuration
- [ ] **Final verification af no-index:**
  - [ ] Robots.txt tilgængelig på production
  - [ ] Meta tags korrekte på production
  - [ ] HTTP headers korrekte på production
- [ ] Final testing på production
- [ ] Documentation

---

## 10. Risici og Mitigation

### 10.1 Tekniske Risici

| Risiko | Impact | Sandsynlighed | Mitigation |
|--------|--------|---------------|------------|
| Email service issues | Høj | Lav | Backup email service |
| API rate limits | Medium | Medium | Caching, rate limiting |
| Performance issues | Høj | Lav | Performance testing, optimization |

### 10.2 Business Risici

| Risiko | Impact | Sandsynlighed | Mitigation |
|--------|--------|---------------|------------|
| Lav conversion rate | Medium | Medium | A/B testing, optimization |
| Email deliverability | Høj | Lav | Proper email setup, SPF/DKIM |
| GDPR compliance | Høj | Lav | Legal review, privacy policy |

---

## 11. Fremtidige Features (Post-MVP)

### 11.1 Phase 2 Features
- User dashboard til at se alerts
- Real bolig data integration (scraping eller API)
- Premium tier med flere features
- Mobile app (React Native)

### 11.2 Phase 3 Features
- AI chat assistant
- Bolig matching algoritme
- Integration med boligsider
- Referral program

---

## 12. Dokumentation

### 12.1 Teknisk Dokumentation
- README.md med setup instruktioner
- API documentation
- Environment variables guide
- Deployment guide

### 12.2 Projekt Dokumentation
- Design decisions log
- Architecture decisions
- Known issues
- Future improvements

---

## 13. Appendices

### 13.1 Referencer
- [Online Minds Website](https://www.onlineminds.io/)
- [Rentumo](https://rentumo.com/)
- [Monetumo](https://monetumo.com/)
- [Printumo](https://printumo.com/da)

### 13.2 Inspiration
- Conversion-optimized landing pages
- Email automation best practices
- AI integration examples
- Growth hacking case studies

---

## 14. Godkendelse

**Status:** Draft - Afventer review  
**Næste Review:** Efter implementering af Fase 1-2  
**Owner:** [Dit navn]  
**Stakeholders:** Online Minds (via ansøgning)

---

**Dokument Version History:**
- v1.0 (2025-01-27): Initial PRD oprettet


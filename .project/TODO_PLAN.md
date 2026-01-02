## TODO-plan for landing page (Rentumo-inspireret MVP)

**Formål:** Plan for sektioner, indhold og næste skridt til at bygge landing page (test/ansøgning, no-index).

### 1) Sektioner der skal med
- Hero: klar value prop, primær CTA, sekundær CTA, highlight-tal (antal sider, nye boliger/dag).
- Trust/metrics: lille række med tal (fx “6.500+ sider”, “24.800 nye/dag”).
- Problem → løsning: to kolonner (rød vs. blå), bullets (manuelt vs. automatiseret).
- How it works: 3 trin (Sign up → Sæt præferencer → Få alerts).
- Features/benefits: 6 ikoner + korte beskrivelser (real-time alerts, AI-match, alle sider ét sted, gratis at starte, ingen spam, mobilvenlig).
- Social proof: testimonial cards (billede, stjerner, citat, navn/by).
- Listing preview (mock): 3-4 property cards med pris/rooms/area + “View more”.
- Pricing teaser: “14 dage for €1” + liste med fordele + CTA.
- FAQ: 6-8 spørgsmål/answers (kort, fold-ud).
- Mission/why: kort tekst + evt. founder-foto.
- Final CTA: “Start gratis nu” + trust badges + no-spam tekst.

### 2) Indhold og copy
- Primær hook: “Få bolig-alerts før alle andre” / “Rental search on autopilot”.
- Sekundær: “Automatiske bots scanner tusindvis af sider og sender dig matches på sekunder”.
- Lead magnet mulighed: “Gratis guide: Top 10 hemmelige boligsider i København”.
- Knap-tekster: “Start gratis”, “Få alerts nu”, “Se boliger”.
- Microcopy: “Ingen spam. Afmeld når som helst.” + “Du kan ikke indeksere siden (noindex)”.

### 3) Visuel stil (fra design system)
- Primær blå `#3B82F6`, mørk tekst `#111827`, grå baggrund `#F3F4F6`.
- Rounded cards (8-12px), subtile skygger, ikon-stregtykkelse ~2px.
- Understregninger/highlights i blå på overskrifter.
- 8px spacing grid; store sektion paddings (5-8rem desktop, 3-4rem mobil).

### 4) Assets
- Illustrationer i blå/hvid stil (egen produktion, ikke direkte kopier).
- Ikoner: Lucide/Heroicons (outline).
- Property billeder: 16:9, objekt-fit cover, lazyload, afrundede hjørner.
- Logo: simpelt tekst- eller cirkellogo i blå.

### 5) Teknisk checkliste
- **No-index krav:** robots.txt `Disallow: /`, meta `noindex,nofollow`, X-Robots-Tag header.
- Setup: React + Vite + Tailwind (fra PRD/design system).
- Components: Button, Card, Section wrapper, IconText, FAQ accordion, PropertyCard, PricingCard, CTA-blok.
- Responsive: 1-kolonne mobil, 2-3 kolonner desktop; touch targets ≥44px.
- Performance: lazyload images, minimale assets, ingen unødvendige scripts.

### 6) Næste skridt (implementering)
- [ ] Opret projektstruktur (Vite + Tailwind) og base layout.
- [ ] Tilføj global styles (font Inter, farver, spacing) + head meta noindex.
- [ ] Implementer Hero + Problem/Løsning + How it works sektioner.
- [ ] Implementer Features + Social proof + Listing preview (mock data).
- [ ] Implementer Pricing teaser + FAQ + Final CTA.
- [ ] Tilføj robots.txt og X-Robots-Tag; verifikations-tjek.
- [ ] Gennemgå mod design system og justér spacing/typografi.



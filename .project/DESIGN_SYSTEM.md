# Design System - MVP Landing Page
## Baseret på Rentumo.com Design

**Version:** 1.0  
**Dato:** 2025-01-27  
**Inspiration:** [Rentumo.com](https://rentumo.com/)

---

## 1. Farvepalette

### 1.1 Primære Farver

#### Primary Blue (Primær Brand Farve)
- **Hex:** `#3B82F6` (eller `#2563EB` - lidt mørkere variant)
- **RGB:** `rgb(59, 130, 246)`
- **Brug:** CTAs, highlights, ikoner, vigtig tekst, links
- **Eksempler:** 
  - Knapper ("Sign up", "Get Started")
  - Understregninger på overskrifter
  - Ikoner og illustrationer
  - Highlighted tekst i overskrifter

#### Dark Grey/Black (Primær Tekst)
- **Hex:** `#1F2937` eller `#111827`
- **RGB:** `rgb(31, 41, 55)`
- **Brug:** Overskrifter, primær tekst
- **Eksempler:**
  - H1, H2, H3 overskrifter
  - Body tekst (høj kontrast)

#### Light Grey (Sekundær Tekst)
- **Hex:** `#6B7280` eller `#9CA3AF`
- **RGB:** `rgb(107, 114, 128)`
- **Brug:** Sekundær tekst, placeholders
- **Eksempler:**
  - Undertekster
  - Metadata
  - Placeholder tekst

#### Background Grey (Baggrund)
- **Hex:** `#F3F4F6` eller `#F9FAFB`
- **RGB:** `rgb(243, 244, 246)`
- **Brug:** Sektionsbaggrunde, cards
- **Eksempler:**
  - Alternerende sektion baggrunde
  - Card baggrunde
  - Divider områder

#### White (Hvid Baggrund)
- **Hex:** `#FFFFFF`
- **RGB:** `rgb(255, 255, 255)`
- **Brug:** Primær baggrund, card baggrunde
- **Eksempler:**
  - Hovedbaggrund
  - Card baggrunde
  - Modal baggrunde

### 1.2 Accent Farver

#### Success Green
- **Hex:** `#10B981` eller `#059669`
- **RGB:** `rgb(16, 185, 129)`
- **Brug:** Success indikatorer, positive bullet points
- **Eksempler:**
  - Checkmarks i "Using Rentumo" sektion
  - Success messages
  - Positive indikatorer

#### Warning/Problem Red
- **Hex:** `#EF4444` eller `#DC2626`
- **RGB:** `rgb(239, 68, 68)`
- **Brug:** Problem indikatorer, negative bullet points
- **Eksempler:**
  - Bullet points i "Searching manually" sektion
  - Error messages
  - Warning indikatorer

#### Star Rating Yellow
- **Hex:** `#FBBF24` eller `#F59E0B`
- **RGB:** `rgb(251, 191, 36)`
- **Brug:** Stjerne ratings i testimonials
- **Eksempler:**
  - 5-stjernet ratings
  - Highlighting

### 1.3 Tailwind CSS Farve Mapping

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',  // Primary Blue
    600: '#2563EB',  // Darker Blue
    700: '#1D4ED8',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',  // Dark Grey/Black
  },
  success: {
    500: '#10B981',
    600: '#059669',
  },
  error: {
    500: '#EF4444',
    600: '#DC2626',
  },
  warning: {
    400: '#FBBF24',
    500: '#F59E0B',
  }
}
```

---

## 2. Typografi

### 2.1 Font Familie

**Primary Font:** Sans-serif, moderne web font
- **Anbefalet:** Inter, Lato, eller system fonts (system-ui, -apple-system)
- **Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

**Font Loading:**
```html
<!-- Google Fonts - Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 2.2 Font Størrelser og Vægte

#### Overskrifter

**H1 - Hero Overskrift**
- **Font Size:** `3.5rem` - `4.5rem` (56px - 72px)
- **Line Height:** `1.1` - `1.2`
- **Font Weight:** `700` (Bold) eller `800` (Extra Bold)
- **Color:** `#111827` (Dark Grey)
- **Mobile:** `2.5rem` - `3rem` (40px - 48px)
- **Eksempel:** "Rental search on autopilot"

**H2 - Sektion Overskrift**
- **Font Size:** `2.5rem` - `3rem` (40px - 48px)
- **Line Height:** `1.2`
- **Font Weight:** `700` (Bold)
- **Color:** `#111827` (Dark Grey)
- **Mobile:** `2rem` - `2.5rem` (32px - 40px)
- **Eksempel:** "Say goodbye to long hours of frustration"

**H3 - Subsektion Overskrift**
- **Font Size:** `1.875rem` - `2.25rem` (30px - 36px)
- **Line Height:** `1.3`
- **Font Weight:** `600` (Semi Bold) eller `700` (Bold)
- **Color:** `#111827` (Dark Grey)
- **Mobile:** `1.5rem` - `1.875rem` (24px - 30px)

**H4 - Card/Feature Overskrift**
- **Font Size:** `1.5rem` - `1.875rem` (24px - 30px)
- **Line Height:** `1.4`
- **Font Weight:** `600` (Semi Bold)
- **Color:** `#111827` (Dark Grey)

#### Body Tekst

**Body Large (Lead Text)**
- **Font Size:** `1.25rem` (20px)
- **Line Height:** `1.6`
- **Font Weight:** `400` (Regular)
- **Color:** `#374151` eller `#6B7280`

**Body Regular**
- **Font Size:** `1rem` (16px)
- **Line Height:** `1.6`
- **Font Weight:** `400` (Regular)
- **Color:** `#374151`

**Body Small**
- **Font Size:** `0.875rem` (14px)
- **Line Height:** `1.5`
- **Font Weight:** `400` (Regular)
- **Color:** `#6B7280`

### 2.3 Typografi Patterns

#### Highlighted Text (i Overskrifter)
- **Color:** `#3B82F6` (Primary Blue)
- **Font Weight:** Samme som overskrift
- **Eksempel:** "Rental search on **autopilot**" (autopilot i blå)

#### Underlined Headings
- **Border Bottom:** `2px solid #3B82F6`
- **Padding Bottom:** `0.5rem`
- **Eksempel:** "Wall of love", "Frequently Asked Questions"

---

## 3. Spacing System

### 3.1 Spacing Scale (8px Grid)

```
0:   0px
1:   4px   (0.25rem)
2:   8px   (0.5rem)
3:   12px  (0.75rem)
4:   16px  (1rem)
5:   20px  (1.25rem)
6:   24px  (1.5rem)
8:   32px  (2rem)
10:  40px  (2.5rem)
12:  48px  (3rem)
16:  64px  (4rem)
20:  80px  (5rem)
24:  96px  (6rem)
32:  128px (8rem)
```

### 3.2 Sektion Spacing

- **Sektion Padding (Vertical):** `80px - 128px` (5rem - 8rem)
- **Sektion Padding (Mobile):** `48px - 64px` (3rem - 4rem)
- **Container Max Width:** `1280px` (80rem)
- **Container Padding (Horizontal):** `24px - 32px` (1.5rem - 2rem)

### 3.3 Component Spacing

- **Card Padding:** `24px - 32px` (1.5rem - 2rem)
- **Button Padding:** `12px 24px` (0.75rem 1.5rem)
- **Form Input Padding:** `12px 16px` (0.75rem 1rem)
- **Gap mellem Cards:** `24px - 32px` (1.5rem - 2rem)

---

## 4. Komponenter

### 4.1 Buttons

#### Primary Button (CTA)
```css
/* Primary CTA Button */
.button-primary {
  background-color: #3B82F6;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.button-primary:hover {
  background-color: #2563EB;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.button-primary:active {
  transform: translateY(0);
}
```

**Tailwind Classes:**
```html
<button class="bg-primary-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-600 hover:shadow-lg transition-all">
  Sign up and get matches now
</button>
```

#### Secondary Button
```css
.button-secondary {
  background-color: transparent;
  color: #3B82F6;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 32px;
  border-radius: 8px;
  border: 2px solid #3B82F6;
  cursor: pointer;
  transition: all 0.2s;
}

.button-secondary:hover {
  background-color: #3B82F6;
  color: #FFFFFF;
}
```

#### Button Sizes
- **Large:** `padding: 16px 40px`, `font-size: 1.125rem`
- **Medium (Default):** `padding: 12px 32px`, `font-size: 1rem`
- **Small:** `padding: 8px 20px`, `font-size: 0.875rem`

### 4.2 Cards

#### Standard Card
```css
.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}
```

**Tailwind Classes:**
```html
<div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
  <!-- Card content -->
</div>
```

#### Property Card (for listings)
- **Image:** `aspect-ratio: 16/9`, `object-fit: cover`
- **Padding:** `0` på image, `24px` på content
- **Border Radius:** `12px` (top corners), `0` (bottom corners) eller `12px` alle
- **Heart Icon:** Top-right corner, `absolute` positioning

### 4.3 Forms

#### Input Fields
```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input::placeholder {
  color: #9CA3AF;
}
```

**Tailwind Classes:**
```html
<input class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="Enter your email">
```

#### Labels
- **Font Size:** `0.875rem` (14px)
- **Font Weight:** `500` (Medium)
- **Color:** `#374151`
- **Margin Bottom:** `8px` (0.5rem)

#### Error States
- **Border Color:** `#EF4444` (Red)
- **Error Text:** `#DC2626`, `font-size: 0.875rem`, `margin-top: 4px`

### 4.4 Icons

#### Icon Styling
- **Size:** `20px - 24px` for standard icons
- **Color:** `#3B82F6` (Primary Blue) eller `#6B7280` (Grey)
- **Stroke Width:** `2px` for outline icons

#### Icon Libraries
- **Lucide React** (anbefalet)
- **Heroicons**
- **Custom SVG icons**

### 4.5 Badges/Tags

```css
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-primary {
  background-color: #DBEAFE;
  color: #1E40AF;
}

.badge-success {
  background-color: #D1FAE5;
  color: #065F46;
}
```

---

## 5. Layout Patterns

### 5.1 Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}
```

### 5.2 Grid System

#### 2-Column Grid (Desktop)
```css
.grid-2-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (max-width: 768px) {
  .grid-2-col {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
```

#### 3-Column Grid (Cards)
```css
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-3-col {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-3-col {
    grid-template-columns: 1fr;
  }
}
```

### 5.3 Hero Section Layout

```css
.hero {
  display: flex;
  align-items: center;
  min-height: 600px;
  padding: 80px 0;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-image {
  flex: 1;
  max-width: 600px;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    min-height: auto;
    padding: 48px 0;
  }
}
```

---

## 6. Visual Elements

### 6.1 Shadows

```css
/* Subtle shadow for cards */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Standard card shadow */
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Hover shadow */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

### 6.2 Border Radius

- **Small:** `4px` (0.25rem) - buttons, small elements
- **Medium:** `8px` (0.5rem) - inputs, cards
- **Large:** `12px` (0.75rem) - large cards, modals
- **Full:** `9999px` - badges, avatars

### 6.3 Transitions

```css
/* Standard transition */
.transition {
  transition: all 0.2s ease-in-out;
}

/* Hover transitions */
.hover-lift:hover {
  transform: translateY(-2px);
  transition: transform 0.2s;
}
```

---

## 7. Sektion-specifikke Patterns

### 7.1 Hero Section

**Layout:**
- Split layout: 50/50 eller 60/40 (content/image)
- Centered content vertically
- Large, bold headline
- Clear CTA button
- Supporting illustration/image

**Styling:**
- Background: White eller light grey
- Headline: Large (3.5rem+), bold, dark grey med blue highlight
- CTA: Primary blue button, prominent

### 7.2 Problem/Solution Section

**Layout:**
- Two-column comparison (Desktop)
- Side-by-side cards
- Left: Problem (white background, red bullets)
- Right: Solution (blue background, green bullets)

**Styling:**
- Problem Card: White background, red accent
- Solution Card: Blue background (`#3B82F6`), white text
- Visual arrows pointing to solution

### 7.3 Testimonials Section

**Layout:**
- 3-column grid (Desktop)
- Card-based layout
- Image + stars + text + name

**Styling:**
- Card: White background, subtle shadow
- Image: Circular, `64px - 80px` diameter
- Stars: Yellow (`#FBBF24`), `20px` size
- Text: Italic, grey
- Name: Bold, dark grey

### 7.4 Features Section

**Layout:**
- 3-column grid (Desktop)
- Icon + heading + description

**Styling:**
- Icon: Blue (`#3B82F6`), `48px - 64px` size
- Heading: H4 size, dark grey
- Description: Body text, grey

### 7.5 Pricing Section

**Layout:**
- Centered content
- Card-based pricing tiers
- Feature list with checkmarks

**Styling:**
- Card: White background, border eller shadow
- Price: Large, bold, blue
- Features: List med blue checkmarks
- CTA: Primary button

### 7.6 FAQ Section

**Layout:**
- Accordion/collapsible items
- Question + arrow icon
- Answer expands below

**Styling:**
- Question: Bold, dark grey, `1.125rem`
- Arrow: Blue, rotates on expand
- Answer: Regular text, grey, padding top

---

## 8. Responsive Design

### 8.1 Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile (< 640px) */

/* Tablet */
@media (min-width: 640px) { /* sm */ }

@media (min-width: 768px) { /* md */ }

/* Desktop */
@media (min-width: 1024px) { /* lg */ }

@media (min-width: 1280px) { /* xl */ }
```

### 8.2 Mobile Optimizations

- **Touch Targets:** Minimum `44px x 44px`
- **Font Sizes:** Slightly smaller on mobile
- **Spacing:** Reduced padding/margins
- **Grid:** Single column on mobile
- **Navigation:** Hamburger menu
- **Images:** Optimized, lazy loading

---

## 9. Animationer og Interaktioner

### 9.1 Hover States

- **Buttons:** Lift effect (`translateY(-2px)`), shadow increase
- **Cards:** Lift effect, shadow increase
- **Links:** Color change, underline

### 9.2 Scroll Animations

- **Fade In:** Elements fade in on scroll
- **Slide Up:** Elements slide up from bottom
- **Stagger:** Sequential animation for lists

### 9.3 Loading States

- **Button Loading:** Spinner, disabled state
- **Skeleton Screens:** For content loading
- **Progress Indicators:** For form steps

---

## 10. Assets og Billeder

### 10.1 Billeder fra Rentumo

**Noter:**
- Billeder skal hentes fra Rentumo.com for inspiration
- Brug kun til reference - ikke direkte kopiering
- Opret egne illustrationer baseret på stil

### 10.2 Illustration Stil

- **Flat Design:** Simple, clean illustrations
- **Color Scheme:** Primarily blue and white
- **Style:** Modern, friendly, professional
- **Icons:** Outline style, consistent stroke width

### 10.3 Property Images

- **Aspect Ratio:** 16:9
- **Object Fit:** Cover
- **Border Radius:** Top corners only (12px)
- **Lazy Loading:** Implementeret

---

## 11. Implementation i React/Tailwind

### 11.1 Tailwind Config Eksempel

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
```

### 11.2 Component Eksempler

#### Button Component
```jsx
// Button.jsx
export const Button = ({ children, variant = 'primary', size = 'medium', ...props }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all'
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg',
    secondary: 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white',
  }
  const sizes = {
    small: 'px-5 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

#### Card Component
```jsx
// Card.jsx
export const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-sm ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all' : ''} ${className}`}>
      {children}
    </div>
  )
}
```

---

## 12. Checklist for Implementation

### Design System Setup
- [ ] Tailwind CSS konfigureret med farver
- [ ] Font (Inter) loaded
- [ ] Base styles defineret
- [ ] Component library oprettet
- [ ] Spacing system implementeret

### Assets
- [ ] Icons valgt og implementeret
- [ ] Illustrationer designet/hentet
- [ ] Placeholder billeder klar
- [ ] Logo designet

### Responsive
- [ ] Mobile breakpoints defineret
- [ ] Grid system implementeret
- [ ] Touch targets verificeret
- [ ] Mobile navigation designet

---

## 13. Referencer

- **Rentumo.com:** [https://rentumo.com/](https://rentumo.com/)
- **Rentumo Pricing:** [https://rentumo.com/pricing-and-how-it-works](https://rentumo.com/pricing-and-how-it-works)
- **Tailwind CSS:** [https://tailwindcss.com/](https://tailwindcss.com/)
- **Inter Font:** [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter)
- **Lucide Icons:** [https://lucide.dev/](https://lucide.dev/)

---

**Dokument Version History:**
- v1.0 (2025-01-27): Initial design system oprettet baseret på Rentumo.com analyse


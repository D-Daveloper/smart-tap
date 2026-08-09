# SmartTap — Next.js port

App Router + TypeScript + Tailwind v4. Every section of the homepage is its own
component so a change to pricing can't break the FAQ.

```
npm install
npm run dev
```

## Layout

```
app/
  layout.tsx          fonts, metadata, no-flash theme script, <LoadingScreen>
  page.tsx            composes the sections in order — the whole page at a glance
  globals.css         Tailwind + keyframes + the Classical component layer
  theme.css           the design tokens (light/dark), from smarttap-theme.css
components/
  layout/             SiteHeader, SiteFooter
  sections/           Hero, HowItWorks, WhatTheySee, PhoneMock, WhyItMatters,
                      Formats, Pricing, Testimonial, Faq, LeadCapture
  motion/             Reveal, CountUp, ScrollProgress
  LoadingScreen.tsx   first-visit splash
  ThemeToggle.tsx     dark/light switch
  Plate.tsx           the matted photograph wrapper
  icons.tsx           inlined Lucide paths — no icon dependency
lib/
  useReveal.ts        the scroll-reveal hook
```

Only four components are client components: `ThemeToggle`, `LeadCapture`,
`LoadingScreen`, and the `motion/` primitives. Everything else renders on the
server, so the page ships as HTML and the motion is layered on top.

## Animation approach

**CSS keyframes + a thin IntersectionObserver hook. No animation library.**

Why, for this design specifically:

1. **The motion here is entrances and micro-states** — reveals, hovers, a
   count-up, a few looping pulses. That is exactly what CSS does natively and
   cheaply. Framer Motion would add ~35kB gzipped and force `"use client"` on
   every section it touched, which would undo the component split's main
   benefit.
2. **Server components stay server components.** `Reveal` is a small client
   wrapper around otherwise-static markup; the content inside it is still
   server-rendered.
3. **It degrades correctly.** This is the part that bit us in the prototype and
   is now a hard rule in the code:

   > The server ships every section **visible**. JS adds the hidden class only
   > once the observer actually holds the node, and always removes it. Stagger
   > is a `setTimeout`, not an `animation-delay`. No keyframe animates opacity
   > with a fill-mode.

   The result: a failed hydration, a throttled tab, an old browser, or
   `prefers-reduced-motion` all leave a perfectly readable page. Nothing can
   get stranded invisible.

**When to reach for Framer Motion instead:** shared-element transitions between
routes, drag interactions, spring-based gesture physics, or exit animations on
unmounting lists — genuine layout animation. If the dashboard grows an animated
chart or reorderable list, that's the moment. Adding it later is a per-component
decision, not a rewrite.

Every animated property is `transform` or `opacity` only, so nothing triggers
layout.

## Loading screen

`components/LoadingScreen.tsx`. It is the colophon page of the design: paper
ground, the NFC mark with its arcs pulsing outward, the wordmark in Cormorant,
and a gold hairline that fills left to right.

Rules it enforces:

- **First visit only** (`sessionStorage`) — a repeat visitor never waits.
- **Minimum 900ms** so it reads as deliberate rather than a flicker.
- **Hard ceiling of 2600ms** — it can never trap the page behind itself.
- Page content is in the DOM underneath the whole time, so crawlers and no-JS
  readers are unaffected.
- Respects `prefers-reduced-motion` (static mark, no rule fill).

Tune `MIN_MS` / `MAX_MS` at the top of the file. To show it on every visit
rather than once per session, delete the two `sessionStorage` lines.

## Theme switching

`theme.css` defines semantic tokens on `:root` and swaps them under
`[data-theme="dark"]`. `@theme inline` re-exports them, so `bg-bg`,
`text-accent-700`, `border-divider` and friends follow the mode with no `dark:`
prefix anywhere. The `dark:` variant is still defined for one-off overrides.

The inline script in `layout.tsx` sets `data-theme` before first paint, so a
dark-mode visitor never sees a white flash.

## Placeholders still open

Prices (₦15,000 / ₦2,500 / ₦25,000), the "40 shops" trust figure, the Tunde A.
testimonial, the phone number, and all photographs (`<Plate>` renders a labelled
placeholder until you pass a `next/image` child).

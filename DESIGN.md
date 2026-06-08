---
version: alpha
name: AI Ecosystem Presentation
description: "Clean, professional presentation theme derived from Good Shepherd Insights brand. Deep teal primary, warm gold accent, crisp white and cream neutrals."

colors:
  primary: "#056251"        # Deep teal -- main background, section headers
  secondary: "#FFFFFF"      # White -- text on dark backgrounds
  accent: "#FFB966"         # Warm gold -- CTAs, highlights, emphasis dots
  dark: "#2B2B2B"           # Near-black -- body text on light slides
  muted: "#6A7282"          # Grey -- secondary text, captions, dividers
  surface: "#FCF3E7"        # Warm cream -- alternate slide background
  surface-alt: "#E6E2DA"    # Darker cream -- card/panel backgrounds
  border: "#0562511a"       # Teal at 10% opacity -- subtle borders

typography:
  h1:
    fontFamily: "Syne"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Syne"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "Jost"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Jost"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Jost"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4

spacing:
  slidePadding: "72px"
  elementGap: "28px"
  contentMaxWidth: "1120px"
  splitGap: "64px"          # Gap between graphic and text columns

components:
  slide-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
  slide-light:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.dark}"
  slide-cream:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.dark}"
  slide-title-accent:
    textColor: "{colors.accent}"
  accent-dot:
    textColor: "{colors.accent}"
  card-panel:
    backgroundColor: "{colors.surface-alt}"
    rounded: "12px"
    padding: "24px"
  code-block:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.secondary}"
    rounded: "8px"
    padding: "20px"
  fragment-highlight:
    textColor: "{colors.accent}"
  divider:
    backgroundColor: "{colors.border}"
  link-text:
    textColor: "{colors.accent}"
  muted-text:
    textColor: "{colors.muted}"
  list-item:
    textColor: "{colors.dark}"

transition:
  type: "slide"
  speed: "default"
  backgroundTransition: "fade"
---

## Overview

Presentation theme for the AI Ecosystem talk. Based on the Good Shepherd Insights brand: deep teal (#056251) as the dominant surface, warm gold (#FFB966) as accent, with Jost and Syne as typefaces. Layout follows a simple split pattern -- graphic on one side, words/title on the other -- with consistent spacing and restrained decoration.

## Colors

- **Primary (#056251):** Deep teal. Used for dark slide backgrounds and section dividers.
- **Secondary (#FFFFFF):** Pure white. Text on dark surfaces.
- **Accent (#FFB966):** Warm gold. Used sparingly for bullet markers, highlights, logos, and CTAs.
- **Dark (#2B2B2B):** Near-black. Body text on light/cream slides.
- **Muted (#6A7282):** Mid-grey. Captions, secondary information, metadata.
- **Surface (#FCF3E7):** Warm cream. Alternate slide background for variety.
- **Surface Alt (#E6E2DA):** Darker cream. Card and panel backgrounds within cream slides.

## Typography

- **Syne** -- Headings (h1, h2). Bold, geometric, distinctive.
- **Jost** -- All body text, captions, UI labels. Clean, readable, professional.
- Clear hierarchy: h1 (2.5rem) > h2 (1.75rem) > h3 (1.25rem) > body (1.125rem) > caption (0.875rem)
- Generous body line-height (1.6) for readability on projected slides.

## Layout Pattern: Split Slide

The standard slide layout is a **two-column split**:

```
+----------------+----------------+
|                |                |
|    GRAPHIC     |     TITLE      |
|   (image,      |                |
|    diagram,    |    subtitle    |
|    logos)      |                |
|                |  supporting    |
|                |  text/icons    |
|                |                |
+----------------+----------------+
```

- Left column (45-50%): visual -- illustration, diagram, logo grid, icon array
- Right column (50-55%): title + subtitle + smaller supporting text/logos below
- The split is consistent across all slides; only the content changes
- Centered single-column layout is acceptable for title slides and section breaks

## Components

- **slide-dark:** Teal background, white text. Default for section openers.
- **slide-light:** White background, dark text. Default for content slides.
- **slide-cream:** Cream background, dark text. Used for variety every 3-4 slides.
- **card-panel:** Rounded cream card for grouping related content inline.
- **accent-dot:** Gold bullet marker (✦ -- matches website's decorative dot).
- **code-block:** Dark panel with white monospace for any code content.

## Transitions

- Global transition: `slide` at default speed.
- Background transition: `fade`.
- Individual slides may override via component props.

## Do's and Don'ts

**Do:**
- Use the split layout (graphic | text) consistently
- Keep slides sparse -- one key idea + visual per slide
- Use accent gold sparingly: bullets, 1-2 highlight words, logo tints
- Alternate slide backgrounds (dark teal / white / cream) for rhythm
- Use fragments for progressive reveals within a slide

**Don't:**
- Never deviate outside the color palette above
- No gradients, glassmorphism, or decorative SVG fluff
- No filler content, fake metrics, or placeholder text
- No emoji, rainbow colors, or generic stock imagery
- No slide without a visual/graphic element on the left side
- Don't cram more than 4-5 bullet points on any slide

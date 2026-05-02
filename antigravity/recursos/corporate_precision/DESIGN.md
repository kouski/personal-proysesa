---
name: Corporate Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424754'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#4d5d73'
  on-tertiary: '#ffffff'
  tertiary-container: '#66768d'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  h1:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: '0'
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  sidebar-width: 260px
  gutter: 20px
---

## Brand & Style

The design system is anchored in a **Corporate/Modern** aesthetic, prioritizing clarity, efficiency, and professional trust. It is designed for HR administrators who manage complex data and require a UI that reduces cognitive load through structured minimalism.

The visual language utilizes heavy whitespace and a restricted color palette to emphasize content over decoration. By blending high-utility layouts with subtle modern touches like soft tonal layering, the design system evokes an emotional response of stability and organizational excellence. It avoids visual clutter, ensuring that the personnel management experience feels intentional and reliable.

## Colors

The palette is dominated by a range of professional blues and cool grays to maintain a calm, authoritative environment. 

- **Primary Blue (#3B82F6):** Used for primary actions, active navigation states, and progress indicators.
- **Deep Navy (#1E293B):** Reserved for sidebar backgrounds and high-level typography to establish hierarchy.
- **Soft Grays (#F8FAFC, #E2E8F0):** Used for application backgrounds and subtle borders to define UI boundaries without adding weight.
- **Semantic Colors:** Green, Red, and Amber are utilized strictly for status indicators (Active, Inactive, Pending) to provide instant visual feedback within data tables and dashboards.

## Typography

This design system utilizes **Inter** for its exceptional legibility and systematic performance in data-heavy environments. 

Typography is organized through a rigorous hierarchy. Headlines use bold weights and tighter letter spacing to command attention, while body text maintains a generous line height to ensure readability in long-form personnel records. Small labels and metadata utilize uppercase styling with increased letter-spacing to differentiate them from interactive text.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a fixed sidebar navigation. The main content area expands to fill the viewport, utilizing a 12-column structure for dashboard widgets and form layouts.

- **Sidebar:** Fixed at 260px, providing a persistent anchor for global navigation.
- **Rhythm:** A 4px baseline grid ensures vertical consistency across all components.
- **Data Tables:** Use a condensed 8px vertical padding for rows to maximize information density while maintaining legibility.
- **Margins:** Consistent 24px margins around main content containers provide "breathing room" in a dense data environment.

## Elevation & Depth

To maintain a minimalist profile, this design system relies on **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

- **Surface 0 (Background):** #F8FAFC (Soft Gray).
- **Surface 1 (Cards/Containers):** #FFFFFF with a 1px solid border in #E2E8F0.
- **Interactive Depth:** Only the primary action buttons and active modals use a very soft, diffused ambient shadow (0px 4px 12px rgba(30, 41, 59, 0.05)) to suggest "lift."
- **Navigation:** The sidebar uses a flat, dark fill (#1E293B) to create a clear structural divide from the content area.

## Shapes

The design system uses a **Soft** shape language. A standard radius of 0.25rem (4px) is applied to buttons, input fields, and small UI widgets. Larger containers, such as dashboard cards and modals, utilize 0.5rem (8px) to soften the professional aesthetic without appearing overly casual. This geometric precision reinforces the "organized" and "trustworthy" brand pillars.

## Components

- **Buttons:** Primary buttons are solid Blue (#3B82F6) with white text. Secondary buttons use a ghost style with a #E2E8F0 border.
- **Data Tables:** Rows feature a hover state of #F1F5F9. Row actions are tucked into a trailing "more options" menu to reduce visual noise.
- **Chips/Badges:** Used for status. They feature a light background tint of the status color with high-contrast text (e.g., Light Green background with Dark Green text).
- **Cards:** Metric cards feature a "H3" value and a "Label-Bold" description. They use the Surface 1 styling (white background, soft border).
- **Input Fields:** Clean white backgrounds with #E2E8F0 borders that transition to #3B82F6 on focus. Labels sit clearly above the input for accessibility.
- **Sidebar Nav:** High-contrast links with #94A3B8 icons. Active states use a subtle left-accent border in Primary Blue.
- **Progress Bars:** Thin, 4px bars used for completion rates or employee onboarding status.
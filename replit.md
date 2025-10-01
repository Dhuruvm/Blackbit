# Blackbit Studio Portfolio Website

## Overview
Production-ready, responsive, accessible, dark-themed marketing and portfolio website for Blackbit Studio. Built with Astro framework using islands architecture for maximum performance.

## Current State
- **Framework**: Astro 5.14.1 (server-rendered with Node adapter)
- **Styling**: Tailwind CSS with custom design tokens
- **CMS**: Sanity headless CMS integration
- **Output Mode**: Server (supports API routes)
- **Deployment**: Configured for Replit VM deployment

## Recent Changes (Oct 1, 2025)
- Imported GitHub repository to Replit
- Installed all npm dependencies
- Configured Vite server for Replit proxy compatibility (allowedHosts: true)
- Fixed output mode from 'static' to 'server' to support API endpoints
- Updated deployment configuration for VM deployment with build and start scripts
- Added .gitignore for Node.js/Astro project

## Project Architecture

### Tech Stack
- **Frontend**: Astro + Tailwind CSS
- **CMS**: Sanity (headless CMS)
- **Images**: Sharp for optimization
- **Deployment**: Replit (VM mode)

### Key Configuration
- **Dev Server**: Runs on 0.0.0.0:5000 (Replit requirement)
- **Output**: Server-rendered (enables API routes)
- **Adapter**: @astrojs/node (standalone mode)

### Environment Variables
All environment variables are configured in astro.config.mjs using Astro's env schema:
- SANITY_PROJECT_ID (optional, server secret)
- SANITY_DATASET (default: "production")
- SANITY_API_VERSION (default: "2024-01-01")
- SANITY_TOKEN (optional, server secret)
- CONTACT_EMAIL (optional, default: "hello@blackbit.studio")
- SITE_URL (public, default: "https://blackbit-studio.replit.app")
- GA_MEASUREMENT_ID (optional, client public)

### Directory Structure
```
/
├─ src/
│  ├─ components/ (atomic components)
│  │  ├─ atomic/ (Button, Card primitives)
│  │  ├─ Footer.astro
│  │  └─ Navigation.astro
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ api/
│  │  │  └─ contact.ts (serverless contact form endpoint)
│  │  ├─ blog/
│  │  │  └─ [slug].astro
│  │  ├─ portfolio/
│  │  │  └─ [slug].astro
│  │  ├─ about.astro
│  │  ├─ blog.astro
│  │  ├─ contact.astro
│  │  ├─ index.astro
│  │  ├─ portfolio.astro
│  │  └─ services.astro
│  ├─ styles/
│  │  ├─ design-tokens.json
│  │  └─ global.css
│  └─ utils/
│     ├─ helpers.ts
│     └─ sanity.server.ts
├─ content/
│  └─ schemas/ (Sanity CMS schemas)
├─ public/
└─ package.json
```

### Pages & Features
- **Home**: Hero section with tagline and CTAs
- **Portfolio**: Project gallery with case study pages
- **Services**: Service offerings with descriptions
- **About**: Agency story and team info
- **Blog**: CMS-driven articles
- **Contact**: Form with server-side validation and honeypot spam protection

## Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start dev server on port 5000
- `npm run build` - Build for production
- `npm start` - Run production server (after build)
- `npm run preview` - Preview production build

## Deployment
Configured for Replit VM deployment:
- **Build**: `npm ci && npm run build`
- **Run**: `npm start`
- **Mode**: VM (always-on for server-rendered app with API routes)

## Requirements Reference
Full requirements documented in: `attached_assets/Pasted-Goal-Build-a-production-ready-responsive-accessible-dark-themed-marketing-portfolio-website-fo-1759294671902_1759294671905.txt`

Key requirements include:
- Performance: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Accessibility: WCAG 2.2 AA compliance
- SEO-friendly with sitemap and structured data
- Headless CMS integration (Sanity)
- Modern dev workflow with Astro + Tailwind

## User Preferences
(To be added as preferences are expressed)

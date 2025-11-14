# Figma to React Showcase

A demonstration of Claude Code's ability to transpose Figma designs into production-quality React TypeScript components using pure route isolation architecture.

## Tech Stack

- **Vite** - Build tool
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Component primitives
- **React Router** - Client-side routing
- **Recharts** - Data visualization

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Documentation

**See [CLAUDE.md](./CLAUDE.md) for complete architecture documentation**, including:
- Project structure and organization
- TypeScript standards
- Component architecture (Atomic Design)
- Styling guidelines
- Figma-to-React workflow
- Implementation checklist

## Architecture Principles

- **Pure route isolation** - Each route is completely self-contained
- **No shared components** - Import Shadcn directly, no wrappers
- **Only create what you need** - No empty directories or unused abstractions
- **Direct Shadcn imports** - Components live in `@/components/ui/`

## Routes

- `/` - Navigation hub
- `/shop` - E-commerce product listing page
- `/dashboard` - SaaS analytics dashboard with charts
- `/art` - Figma Kit cover page with dark theme
- `/about` - Organic food company landing page
- `/overview` - Financial advisor client dashboard

## Implemented Designs

### Shop Page (`/shop`)
E-commerce product listing with filters, navigation, and product grid. Features clean white background with product cards.

### Dashboard Page (`/dashboard`)
SaaS analytics dashboard featuring:
- Sidebar navigation
- Multiple chart types (donut, bar)
- Stats cards with metrics
- Recent orders table

### Art Page (`/art`)
Figma Kit promotional page with:
- Dark gradient background (#161616)
- Large colorful Figma logo pattern
- "FREE" badge with thick borders
- Hero typography and featured mockup image

### About Page (`/about`)
World Peas organic food company featuring:
- Newsreader serif font for headings
- Clean natural aesthetic
- Image grids with captions
- "What We Believe" section

### Overview Page (`/overview`)
Financial advisor dashboard with:
- Dark theme (#1e232e base)
- Donut chart avatar
- Client profile with stats
- Task cards ("Studio" section)
- Recommendations board
- Fixed "Ask anything" input bar

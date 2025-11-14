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
- `/shop` - E-commerce product listing
- `/dashboard` - SaaS analytics dashboard

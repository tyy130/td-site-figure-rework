# TacticDev - Figure.ai Inspired Design System

A dark, minimal, premium Next.js site with a reusable UI system inspired by figure.ai's aesthetic, adapted for the TacticDev ecosystem.

## 🎨 Design Philosophy

This design system embodies:
- **Dark & Minimal**: Pure black backgrounds with subtle gradients
- **Premium Typography**: Carefully scaled type system with Inter font
- **Consistent Spacing**: 8px base rhythm for visual harmony
- **Subtle Motion**: Purposeful animations that enhance UX
- **Glass Morphism**: Translucent UI elements with backdrop blur
- **High Contrast**: Excellent readability with thoughtful color choices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles & custom utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Glass morphism card
│   ├── Container.tsx        # Responsive container
│   ├── Features.tsx         # Features grid section
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero with video background
│   ├── Navigation.tsx       # Sticky nav with scroll behavior
│   └── Projects.tsx         # Projects showcase
├── public/                  # Static assets
├── tailwind.config.ts       # Design tokens & theme
└── tsconfig.json           # TypeScript config
```

## 🎨 Design System

### Colors

```typescript
// Background
background: '#000000'         // Pure black
background-secondary: '#0A0A0A'
background-tertiary: '#121212'

// Foreground
foreground: '#FFFFFF'         // Pure white
foreground-secondary: '#A0A0A0'
foreground-tertiary: '#666666'

// Accent
accent: '#256EFF'            // Primary blue
accent-hover: '#1E5AD4'
```

### Typography Scale

| Token | Size | Usage |
|-------|------|-------|
| `display-xl` | 4.5rem | Hero headlines |
| `display-lg` | 3.5rem | Major sections |
| `display-md` | 2.75rem | Section headers |
| `heading-xl` | 2.25rem | Card titles |
| `heading-lg` | 1.875rem | Subheadings |
| `heading-md` | 1.5rem | Component headers |
| `body-lg` | 1.125rem | Large body text |
| `body-md` | 1rem | Default body text |
| `body-sm` | 0.875rem | Small text |
| `label-lg` | 1rem | Button labels |
| `label-md` | 0.875rem | Form labels |
| `label-sm` | 0.75rem | Tags, badges |

### Spacing Rhythm

All spacing follows an 8px base unit:
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px
- `20` = 80px
- `24` = 96px
- `32` = 128px

### Animations

```css
/* Available animations */
animate-fade-in        // Simple fade in
animate-fade-in-up     // Fade in from bottom
animate-fade-in-down   // Fade in from top
animate-slide-in-right // Slide from left
animate-slide-in-left  // Slide from right
animate-scale-in       // Scale up fade in

/* Custom classes */
.glass                 // Glass morphism effect
.text-gradient         // Premium gradient text
.hover-lift            // Subtle hover lift with shadow
```

## 🧩 Component Usage

### Hero with Video Background

```tsx
import Hero from '@/components/Hero';

// With YouTube video ID (shows "Full Video" CTA)
<Hero videoYouTubeId="lkc2y0yb89U" />

// With local video file
<Hero videoSrc="/videos/background.mp4" />

// Without video (gradient background)
<Hero />
```

### Button

```tsx
import Button from '@/components/Button';

// Primary button
<Button variant="primary" size="lg" href="/path">
  Click Me
</Button>

// Secondary button
<Button variant="secondary" onClick={handleClick}>
  Action
</Button>

// Ghost button
<Button variant="ghost" size="sm">
  Learn More
</Button>
```

### Card

```tsx
import Card from '@/components/Card';

// Basic card
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Hoverable card
<Card hover>
  <h3>Interactive Card</h3>
</Card>
```

### Container

```tsx
import Container from '@/components/Container';

// Default container (max-width: 1440px)
<Container>
  <p>Content</p>
</Container>

// Content container (max-width: 1200px)
<Container size="content">
  <p>Content</p>
</Container>

// Prose container (max-width: 720px)
<Container size="prose">
  <p>Article content</p>
</Container>
```

## 🎬 Video Background Feature

The Hero component supports background video loops with two options:

1. **YouTube Video ID**: Shows a "Full Video" CTA button linking to the full video
   ```tsx
   <Hero videoYouTubeId="lkc2y0yb89U" />
   ```

2. **Local Video File**: Place video in `/public/videos/` directory
   ```tsx
   <Hero videoSrc="/videos/hero-background.mp4" />
   ```

**Video Recommendations**:
- Format: MP4 (H.264 codec)
- Duration: 10-30 seconds for seamless loop
- Resolution: 1920x1080 minimum
- File size: < 5MB for performance
- Content: Subtle, non-distracting motion

## 🔧 Customization

### Adding New Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    DEFAULT: '#YOUR_COLOR',
    hover: '#YOUR_HOVER_COLOR',
  },
}
```

### Modifying Typography

Edit `tailwind.config.ts`:

```typescript
fontSize: {
  'custom-size': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
}
```

### Creating Custom Animations

Add to `app/globals.css`:

```css
@keyframes customAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.animate-custom {
  animation: customAnimation 0.6s ease-out;
}
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

```bash
npm run build
npm start
```

The site is built with Next.js 14 App Router and can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5
- **Font**: Inter (Google Fonts)
- **Animations**: CSS custom properties + Tailwind

## 🎯 Design Principles

1. **Minimal by Default**: Start with less, add only what's needed
2. **Mobile First**: Responsive design from smallest screens up
3. **Performance**: Optimized assets, lazy loading, minimal JS
4. **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
5. **Consistency**: Reusable components, design tokens, spacing rhythm

## 🔗 Related Sites

This design system can be adapted for:
- [tacticdev.com](https://tacticdev.com) - Main hub
- [forgeops.io](https://forgeops.io) - DevOps tools
- Other TacticDev ecosystem projects

## 📝 License

MIT License - Feel free to use this design system for your projects.

## 👤 Author

**Tyler Hill** - Principal Developer @ TacticDev
- GitHub: [@tyy130](https://github.com/tyy130)
- Organization: [Tactic-Dev](https://github.com/Tactic-Dev)

---

> *"Automation isn't about replacing creativity — it's about removing friction."*

For questions, issues, or contributions, visit our [GitHub Discussions](https://github.com/orgs/Tactic-Dev/discussions).

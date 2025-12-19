# Deployment Guide

This guide covers deploying the TacticDev site to various hosting platforms.

## Quick Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and provides the best deployment experience.

### Option 1: GitHub Integration (Easiest)

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import `tyy130/td-site-figure-rework`
6. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: .next (auto-filled)
7. Click "Deploy"

Your site will be live at `your-project.vercel.app` in ~2 minutes!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd /path/to/td-site-figure-rework
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Your account)
# - Link to existing project? No
# - Project name? td-site-figure-rework
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `tacticdev.com`)
3. Configure DNS (Vercel provides instructions)
4. Wait for SSL certificate (automatic)

## Deploy to Netlify

### Option 1: Netlify UI

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select `tyy130/td-site-figure-rework`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20 (set in Environment variables)
6. Click "Deploy site"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init

# Deploy
netlify deploy --prod
```

### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Deploy to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to Pages
3. Click "Create a project"
4. Connect to GitHub
5. Select `tyy130/td-site-figure-rework`
6. Configure:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
7. Click "Save and Deploy"

## Deploy to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect to GitHub
4. Select repository
5. Configure:
   - Build settings: Auto-detected
   - App name: td-site-figure-rework
6. Review and save
7. Click "Deploy"

### amplify.yml Configuration

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Deploy to Your Own Server

### Using Node.js

```bash
# On your server
git clone https://github.com/tyy130/td-site-figure-rework.git
cd td-site-figure-rework

# Install dependencies
npm ci --production

# Build
npm run build

# Start (runs on port 3000)
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "tacticdev" -- start
pm2 save
pm2 startup
```

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./

RUN npm ci --production

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t tacticdev-site .
docker run -p 3000:3000 tacticdev-site
```

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name tacticdev.com www.tacticdev.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

### Required for Video Background (if using local video)

Create `.env.local`:

```bash
# No environment variables required for current implementation
# Add as needed for future features
```

### Optional Environment Variables

```bash
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tacticdev.com

# CMS (if adding in future)
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-access-token

# Form endpoints
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
```

## Custom Domain Setup

### DNS Configuration

#### For Vercel:
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

#### For Netlify:
```
A     @       75.2.60.5
CNAME www     your-site.netlify.app
```

#### For Cloudflare Pages:
Cloudflare automatically handles DNS if domain is on Cloudflare.

### SSL/HTTPS

All recommended platforms (Vercel, Netlify, Cloudflare) provide:
- ✅ Automatic SSL certificates
- ✅ Automatic HTTPS redirect
- ✅ Automatic certificate renewal

## Performance Optimization

### CDN Configuration

All recommended platforms include global CDN by default:
- Vercel: Edge Network (automatic)
- Netlify: Netlify Edge (automatic)
- Cloudflare: Cloudflare CDN (automatic)

### Caching Headers

Next.js automatically sets optimal cache headers for:
- Static assets (1 year cache)
- Pages (on-demand revalidation)
- API routes (configurable)

### Image Optimization

To add image optimization, use `next/image`:

```tsx
import Image from 'next/image';

<Image 
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority
/>
```

## Monitoring & Analytics

### Vercel Analytics

```bash
# Install
npm install @vercel/analytics

# Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

```tsx
// app/layout.tsx
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    `
  }} />
</head>
```

### Plausible Analytics (Privacy-friendly)

```tsx
// app/layout.tsx
<head>
  <script defer data-domain="tacticdev.com" src="https://plausible.io/js/script.js"></script>
</head>
```

## Pre-Deployment Checklist

- [x] Build succeeds locally (`npm run build`)
- [x] TypeScript passes (`tsc --noEmit`)
- [x] All links work
- [x] Mobile responsive
- [x] YouTube video ID is valid
- [ ] Custom domain purchased (if needed)
- [ ] Analytics configured (optional)
- [ ] Environment variables set (if needed)
- [x] README.md updated
- [x] .gitignore includes node_modules, .next, .env.local

## Post-Deployment Verification

### Checklist

1. **Site loads:** Visit your deployment URL
2. **All pages work:** Navigate through sections
3. **Links work:** Click all internal/external links
4. **Responsive:** Test on mobile device
5. **Performance:** Run Lighthouse audit
6. **SEO:** Check meta tags in page source
7. **SSL:** Ensure HTTPS works
8. **YouTube CTA:** Click "Full Video" button

### Performance Testing

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://your-site.vercel.app --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Page Not Found

- Ensure `.next` directory is deployed
- Check build output directory settings
- Verify routes in app/ directory

### Styling Issues

- Check Tailwind CSS is processing
- Verify postcss.config.mjs exists
- Ensure globals.css is imported in layout.tsx

### Slow Performance

- Enable image optimization with next/image
- Check bundle size with `npm run build`
- Review Network tab in DevTools
- Enable CDN (automatic on Vercel/Netlify)

## Rollback Procedures

### Vercel
1. Go to Deployments tab
2. Click on previous successful deployment
3. Click "Promote to Production"

### Netlify
1. Go to Deploys tab
2. Find previous deploy
3. Click "Publish deploy"

### Manual/Server
```bash
# Git rollback
git log  # Find commit hash
git checkout <commit-hash>
npm ci
npm run build
pm2 restart tacticdev
```

## Scaling Considerations

The current static site handles high traffic automatically with CDN:
- ✅ No server to scale
- ✅ Global CDN distribution
- ✅ Automatic caching
- ✅ Minimal bandwidth costs

For future dynamic features:
- Use Edge Functions (Vercel/Netlify)
- Add Redis for caching
- Use Database on demand (Vercel Postgres, Supabase)

## Cost Estimates

### Hobby/Personal (Current needs)

| Platform | Monthly Cost | Bandwidth | Build Time |
|----------|-------------|-----------|------------|
| Vercel | Free | 100GB | 6000 min |
| Netlify | Free | 100GB | 300 min |
| Cloudflare Pages | Free | Unlimited | 500 builds |

### Production/Team

| Platform | Monthly Cost | Features |
|----------|-------------|----------|
| Vercel Pro | $20 | Custom domains, analytics, priority support |
| Netlify Pro | $19 | Custom domains, analytics, form handling |
| Cloudflare Pages | Free | Unlimited (with Cloudflare DNS) |

## Continuous Deployment

All platforms support automatic deployments:

1. Push to GitHub
2. Build triggers automatically
3. Deploy on success
4. Rollback on failure

Configure branch deployments:
- `main` → Production
- `develop` → Staging
- Pull requests → Preview deployments

## Security Headers

Add to `next.config.js` for enhanced security:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Cloudflare Pages: https://developers.cloudflare.com/pages

---

**Recommended:** Start with Vercel for the easiest deployment and best Next.js integration. The free tier is perfect for this project size.

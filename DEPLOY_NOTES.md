# Deployment Notes

## Netlify Configuration

This project uses `@netlify/plugin-nextjs` for optimal Next.js deployment.

### Recent Updates
- Removed SPA fallback redirects (they interfere with Next.js SSR)
- Using official Netlify Next.js plugin

### To Deploy
1. Push to GitHub
2. Netlify auto-deploys from the `master` branch

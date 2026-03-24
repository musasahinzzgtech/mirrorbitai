# Mirrorbit AI — SEO Configuration

## Overview
This document outlines the SEO strategy and implementation for the Mirrorbit AI website.

## Core SEO Elements

### 1. **Meta Tags**
- ✅ Title tag (60 chars): "Mirrorbit AI | Building the Future with Artificial Intelligence"
- ✅ Meta description (160 chars): "Mirrorbit AI creates intelligent, intuitive applications that transform how businesses operate and how people live."
- ✅ Viewport tag: Responsive design ready
- ✅ Theme color: `#060e20` (matches brand)
- ✅ Robots meta: `index, follow`

### 2. **Open Graph (Social Sharing)**
- ✅ og:title, og:description, og:type
- ✅ og:url (canonical), og:image
- ✅ twitter:card, twitter:title, twitter:description, twitter:image
- og:image should be a 1200x630px image (add to `/public/og-image.jpg`)

### 3. **Structured Data (JSON-LD)**
- ✅ Organization schema
- ✅ WebSite schema (with SearchAction)
- ✅ Product schemas (SlayCal, AI QRMenu)
- ✅ ContactPoint schema

### 4. **Sitemap & Robots**
- ✅ `/sitemap.xml` — Updated weekly
- ✅ `/robots.txt` — Allows all crawlers, references sitemap

## Performance Optimization

### 1. **Page Speed**
- ✅ Tailwind CSS (optimized, purged in build)
- ✅ Image lazy loading (loading="lazy")
- ✅ Hero image: eager loading (loading="eager")
- **Recommendation:** Compress images, use WebP format
- **Recommendation:** Add Cache-Control headers (max-age=31536000 for assets)

### 2. **Core Web Vitals**
- **LCP (Largest Contentful Paint):** Hero section image
  - Preload hero image in Layout.astro: `<link rel="preload" as="image" href="..." />`
- **FID (First Input Delay):** Minimal JS (only lang switcher, mobile menu)
  - Keep scripts async/defer
- **CLS (Cumulative Layout Shift):** Fixed nav, no font swaps
  - Use `font-display: swap` or `block` in Google Fonts

## Mobile Optimization

- ✅ Responsive design (all breakpoints)
- ✅ Mobile-first layout
- ✅ Touch-friendly buttons (min 44x44px)
- ✅ Mobile menu hamburger
- **Recommendation:** Test on Google Mobile-Friendly Test tool

## Keywords & Content

### Primary Keywords
- "AI nutrition app"
- "meal recognition AI"
- "food scanning"
- "recipe discovery"
- "restaurant menu digitalization"

### Secondary Keywords
- "health tracking app"
- "smart menu system"
- "food macro calculator"
- "AI chef assistant"

### Content Strategy
- Each section targets a different keyword cluster
- Internal linking: "Learn More" → "Why Mirrorbit?"
- CTAs guide users through the funnel

## Multi-Language SEO (i18n)

Current setup:
- **Default:** English (`en`)
- **Alternative:** Turkish (`tr`)

### Best Practices Implemented
- ✅ `lang` attribute on `<html>` (dynamically set)
- ✅ Translations properly keyed for each language

### Future Improvements
- Add hreflang tags for search engines (once multi-page URLs exist):
  ```html
  <link rel="alternate" hreflang="en" href="https://mirrorbitai.com/" />
  <link rel="alternate" hreflang="tr" href="https://mirrorbitai.com/tr/" />
  <link rel="alternate" hreflang="x-default" href="https://mirrorbitai.com/" />
  ```

## Analytics & Tracking

### Recommended Setup
1. **Google Analytics 4:**
   - Add Global Site Tag (gtag.js)
   - Track page views, events (CTA clicks)
   - Measure funnel: Hero CTA → Product pages → Sales CTA

2. **Google Search Console:**
   - Verify ownership via meta tag or DNS
   - Submit sitemap.xml
   - Monitor search queries, impressions, clicks
   - Fix crawl errors

3. **Google Tag Manager (Optional):**
   - Manage events without code changes
   - Track button clicks, form submissions

### Example GA4 Implementation:
```astro
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Accessibility (A11y = SEO)

- ✅ Semantic HTML (sections, nav, article)
- ✅ Heading hierarchy (h1, h2, h3)
- ✅ Alt text on images
- ✅ ARIA labels (mobile menu button)
- ✅ Color contrast (text on background)
- ✅ Keyboard navigation (links, buttons, language switcher)

## Checklist Before Launch

- [ ] Add Google Analytics 4
- [ ] Submit to Google Search Console
- [ ] Generate og-image.jpg (1200x630px)
- [ ] Preload hero image
- [ ] Test with PageSpeed Insights
- [ ] Test with Mobile-Friendly Test
- [ ] Check WAVE accessibility
- [ ] Verify sitemap.xml crawlable
- [ ] Test robots.txt
- [ ] Verify canonical tag
- [ ] Check all hreflang tags (if multi-page)
- [ ] Set up crawl budget monitoring

## Ongoing Maintenance

- **Monthly:** Check GSC for crawl errors, search queries
- **Quarterly:** Audit page speed, run accessibility check
- **Annually:** Review keyword rankings, update high-value pages

## Resources

- [Google Search Essentials](https://developers.google.com/search)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [WAVE Accessibility](https://wave.webaim.org/)
- [Schema.org Validator](https://validator.schema.org/)

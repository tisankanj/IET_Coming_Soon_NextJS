# IET Service Point — Premium Coming Soon Page

Production-oriented Next.js implementation of the approved cinematic coming-soon concept.

## Included

- Exact supplied IET Service Point logo (`public/brand/iet-service-point-logo.png`)
- Cinematic visual crop based on the approved preview (`public/media/iet-cinematic-scene.webp`)
- Full approved reference (`public/media/approved-reference.webp`)
- Responsive desktop/mobile UI
- Live phone, email and WhatsApp actions
- SEO metadata
- Reduced-motion support
- No external UI or animation dependency
- Editable text/CTA layer
- CSS-driven launch progress panel
- Pointer-based micro parallax on desktop

## Run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Update contact details

Edit constants at the top of:

```text
app/page.tsx
```

## Production note

The cinematic scene is a visual asset derived from the approved concept to preserve the exact art direction. All important business copy, CTAs and SEO content remain live HTML instead of being baked into the image.

Before deployment:
1. Confirm TVS brand-asset usage permissions.
2. Confirm WhatsApp number.
3. Add final favicon / OG image.
4. Test Cloudflare caching and crawler access.
5. Deploy to ietservice.lk.

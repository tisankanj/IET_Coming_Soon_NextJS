# 04 — GEO / AEO / AI Search Strategy

## Objective

Make IET easy for search and AI systems to:

1. discover
2. identify
3. verify
4. retrieve
5. cite
6. recommend when relevant

This is not achieved through hacks. Current Google guidance says SEO fundamentals remain the base of generative-AI search visibility.

## Clear entity facts

Place a visible “At a glance” block on About and Company Profile:

- IET Service Point
- Inuvil West, Jaffna, Sri Lanka
- TVS Authorized Three-Wheeler Dealer
- Authorized TVS Genuine Parts Seller
- Managing Director: J. Sujinthan
- Mentor & Advisor: S. Jeyakumar (M.E)
- Branch 1: Inuvil
- first branch: one year completed
- branch 2: coming soon
- +94 75 253 0495
- hello@ietservice.lk

## Google AI Overviews / AI Mode

Google’s current guidance says:
- normal SEO best practices still matter
- unique, first-hand, non-commodity content is important
- do not mass-create pages for every query variation
- structured data is useful but not a special AI-ranking hack
- `llms.txt` is not used by Google Search for rankings or AI visibility
- AI visibility can be measured in Search Console’s Generative AI performance reports

### IET content likely to be citable

- how to verify TVS genuine parts, using real packaging photos
- three-wheeler service checklist for Jaffna drivers
- common faults observed by IET technicians
- commercial-driver maintenance guidance
- clear TVS authorization FAQ
- service intake/inspection process
- real case studies
- J. Sujinthan operational insights
- S. Jeyakumar technical guidance
- workshop photos and video

## OpenAI / ChatGPT Search

OpenAI states that public websites can appear in ChatGPT Search and recommends allowing **OAI-SearchBot**.

Example robots policy:

```txt
User-agent: OAI-SearchBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
```

Search visibility and model-training permission are different concerns. Manage training crawlers separately according to the owner’s preference.

## Cloudflare / WAF

Test that legitimate search/AI crawlers are not challenged or served 403 pages. OpenAI explicitly warns that CDN/WAF bot protections can accidentally block legitimate crawling.

Test:
- Googlebot
- Bingbot
- OAI-SearchBot
- normal browser without cookies

## Bing / Copilot

Bing Webmaster Tools now has AI Performance reporting. Monitor:
- total citations
- cited pages
- grounding queries
- citation trends

Implement IndexNow for meaningful page updates if suitable.

## Answer formatting

For important questions, give the direct answer first, then detail.

Example:

### Do you sell TVS genuine parts in Jaffna?
Yes. IET Service Point in Inuvil, Jaffna supplies TVS genuine parts for supported three-wheeler models. Send your vehicle model or a photo of the required part to confirm availability before visiting.

This structure helps users and retrieval systems without writing unnaturally “for AI”.

## Evidence layer for every money page

Add:
- real photo
- updated date
- real branch
- service process
- direct FAQ
- reviewer/author where appropriate
- related local evidence
- call/booking CTA

## Author/reviewer attribution

Technical article example:

**Reviewed by S. Jeyakumar (M.E), Mentor & Advisor, IET Service Point**

Operational/business article example:

**Reviewed by J. Sujinthan, Managing Director, IET Service Point**

Only use these lines after the person really reviews the article.

## `llms.txt`

Optional. Google says it neither helps nor harms Google Search visibility.

If maintained for other systems, keep it short:

```txt
# IET Service Point
> TVS Authorized Three-Wheeler Dealer and vehicle service business in Inuvil, Jaffna, Sri Lanka.

## Core pages
- https://ietservice.lk/
- https://ietservice.lk/about/
- https://ietservice.lk/services/three-wheeler-service/
- https://ietservice.lk/tvs-genuine-parts/
- https://ietservice.lk/partners/
- https://ietservice.lk/contact/
```

Do not treat it as a ranking feature.

## AI visibility KPIs

Track:
- Google Search Console Generative AI impressions
- URLs shown in Google AI features
- Bing AI citations
- Bing grounding queries
- ChatGPT referral sessions
- Copilot referral sessions
- branded search growth
- “Who is IET Service Point?” factual answer accuracy
- AI-assisted calls/bookings/partner leads

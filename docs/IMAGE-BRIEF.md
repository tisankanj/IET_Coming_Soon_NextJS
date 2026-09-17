# IET Service Point: Image Brief

Every image the new website needs, with the exact file name, where it is used, the size, and either an AI prompt (art) or a shot brief (real photo).

Until a file arrives, the site shows a branded placeholder in that slot. Nothing breaks.

## How to send images

1. Name each file exactly as listed. Any of `.jpg`, `.png` or `.webp` is fine. Please do not send `.heic`.
2. Send the largest size you have (at least 2000 px on the long side).
3. I convert, resize and compress every image (WebP/AVIF, under 250 KB for heroes) and write the alt text.

## The rule behind the two groups

The design system bans AI images as **proof**. Anything a customer or a partner would read as evidence (the workshop, the TVS board, the team, the founders, genuine parts, customers) must be a real photo. AI is used only for mood and service-detail art.

| Group | Folder | Count |
| --- | --- | --- |
| A. AI art | `public/images/art/` | 12 |
| B. Real photos | `public/images/photos/` | 9 required, 2 optional |
| C. Official brand files | `public/brand/` | 1 |

---

## A. AI art (12)

**Before you generate:**

- Every prompt already says "no text, no logos". If the tool still adds letters, a fake badge, a TVS or Bajaj logo, or a number plate, regenerate. Fake branding cannot ship.
- Keep the look consistent: dark midnight-navy scene, one thin orange rim light, a little cool blue fill, realistic materials, no heavy HDR.
- For the 4:5 service images, keep the subject in the middle 60% of the frame. The same file is cropped to 4:3 on mobile.

| # | File name | Used on | Size / ratio |
| --- | --- | --- | --- |
| A1 | `hero-service-core` | Homepage hero (also the poster for the future 3D version) | 2048 × 2048, 1:1, transparent PNG if possible |
| A2 | `service-complete-inspection` | Homepage Service OS "Complete Service", `/services/three-wheeler-service/`, `/services/` | 1600 × 2000, 4:5 |
| A3 | `service-repair-engine-work` | `/services/three-wheeler-repair/`, `/services/` | 1600 × 2000, 4:5 |
| A4 | `service-oil-pour` | Service OS "Oil", `/services/oil-service/` | 1600 × 2000, 4:5 |
| A5 | `service-greasing-fitting` | Service OS "Greasing", `/services/greasing/` | 1600 × 2000, 4:5 |
| A6 | `service-brake-drum-shoes` | Service OS "Brake", `/services/brake-service/` | 1600 × 2000, 4:5 |
| A7 | `service-electrical-multimeter` | Service OS "Electrical", `/services/electrical-repair/` | 1600 × 2000, 4:5 |
| A8 | `service-engine-spark-plug` | Service OS "Engine", `/services/engine-diagnostics-repair/` | 1600 × 2000, 4:5 |
| A9 | `service-suspension-steering` | Homepage Service OS "Suspension & Steering" | 1600 × 2000, 4:5 |
| A10 | `service-water-wash-foam` | Homepage Service OS "Water Wash" | 1600 × 2000, 4:5 |
| A11 | `booking-night-road` | Homepage booking section | 2400 × 1350, 16:9 |
| A12 | `jaffna-palmyra-road` | `/service-areas/jaffna/` hero | 2400 × 1350, 16:9 |

### A1 `hero-service-core`

```text
A premium 3D-rendered mechanical emblem floating in empty dark space. A thick brushed-steel gear ring with 12 precise teeth, and inside it a thinner glossy service-blue ring (#0267A4). One thin glowing orange energy line (#F36102) sweeps around the gear in a tilted elliptical orbit. Three small real mechanical parts float close to the ring: a spark plug, a small spanner and a bearing. The centre of the rings is completely empty and dark so text can be placed there later. Object centred and filling about 80% of the square frame, seen slightly from below at a 15-degree angle. Studio product lighting, crisp realistic metal reflections, subtle depth of field. Transparent background; if transparency is not possible, a flat solid #061521 background with no vignette and no gradient. No text, no letters or numbers on the ring, no logos, no watermark. Square 1:1.
```

### A2 `service-complete-inspection`

```text
Close-up of a mechanic's gloved hands holding a small LED inspection lamp, checking the rear engine compartment of a dark-blue Sri Lankan three-wheeler (auto-rickshaw) inside a clean workshop at night. Only the hands and forearms in dark work clothes are visible, no face. The lamp light falls on clean metal engine parts. Deep midnight-navy shadows, soft key light, one thin warm orange rim light on the edges, subtle cool blue fill. Subject in the centre of the frame. Photorealistic premium automotive photography, realistic materials, slightly warm highlights, no over-HDR. No text, no logos, no brand badges, no number plate, no watermark. Portrait 4:5.
```

### A3 `service-repair-engine-work`

```text
Macro photograph of a gloved hand using a socket wrench to tighten a bolt on the small single-cylinder engine of a three-wheeler, no face visible. A few clean hand tools lie neatly on a dark rubber mat beside the engine. Dark midnight-navy workshop background, soft key light from the top left, one thin warm orange rim light along the wrench, subtle cool blue fill, shallow depth of field. Subject in the centre of the frame. Photorealistic premium automotive photography, realistic metal textures, no over-HDR. No text, no logos, no brand badges, no watermark. Portrait 4:5.
```

### A4 `service-oil-pour`

```text
Macro photograph of fresh golden engine oil pouring in a smooth glossy stream through a clean steel funnel into the oil filler of a small three-wheeler engine. Backlit so the oil glows amber. Plain unlabelled oil container partly visible at the top edge. Dark midnight-navy background, subtle cool blue reflections on the metal, one thin warm orange rim light, shallow depth of field. Subject in the centre of the frame. Photorealistic premium automotive photography, no over-HDR. No text, no labels, no logos, no watermark. Portrait 4:5.
```

### A5 `service-greasing-fitting`

```text
Macro photograph of a hand grease gun nozzle pressed onto a grease fitting on the front suspension joint of a three-wheeler, with a small bead of fresh grease visible at the joint. Gloved hand only, no face. Dark midnight-navy background, soft key light, one thin warm orange rim light on the steel nozzle, subtle cool blue fill, shallow depth of field. Subject in the centre of the frame. Photorealistic premium automotive photography, realistic materials, no over-HDR. No text, no logos, no brand badges, no watermark. Portrait 4:5.
```

### A6 `service-brake-drum-shoes`

```text
A clean brake drum and a pair of brake shoes for a three-wheeler arranged neatly on a dark matte workbench, with a torque wrench and a small cleaning brush beside them. Camera at a 45-degree angle from above, precise product-style arrangement. Soft studio key light, one thin warm orange rim light on the drum edge, deep midnight-navy shadows, subtle cool blue fill. Subject in the centre of the frame. Photorealistic premium automotive product photography, realistic metal and friction-material textures, no over-HDR. No text, no logos, no part numbers, no watermark. Portrait 4:5.
```

### A7 `service-electrical-multimeter`

```text
Close-up of the red and black probes of a digital multimeter touching the battery terminals of a three-wheeler. The multimeter screen is out of focus with no readable digits. A neatly organised wiring harness sits softly blurred in the background. Gloved hand only, no face. Dark midnight-navy scene, cool blue fill light, one thin warm orange rim light, shallow depth of field. Subject in the centre of the frame. Photorealistic premium automotive photography, no over-HDR. No text, no numbers, no logos, no brand badges, no watermark. Portrait 4:5.
```

### A8 `service-engine-spark-plug`

```text
Close-up of a used spark plug and a new spark plug side by side, next to a feeler gauge and a spark plug socket on a dark workbench. The small three-wheeler engine is softly out of focus behind them. Precise product-style lighting, one thin warm orange rim light on the metal threads, deep midnight-navy shadows, subtle cool blue fill. Subject in the centre of the frame. Photorealistic premium automotive product photography, realistic materials, no over-HDR. No text, no logos, no brand markings, no watermark. Portrait 4:5.
```

### A9 `service-suspension-steering`

```text
Low-angle close-up of the front wheel, front shock absorber and steering linkage of a three-wheeler raised on a workshop stand. A mechanic's gloved hand checks the suspension joint, no face visible. Dark midnight-navy workshop, soft overhead light, one thin warm orange rim light on the suspension spring, subtle cool blue fill, shallow depth of field. Subject in the centre of the frame. Photorealistic premium automotive photography, realistic materials, no over-HDR. No text, no logos, no brand badges, no watermark. Portrait 4:5.
```

### A10 `service-water-wash-foam`

```text
Close-up of thick white wash foam and water droplets sliding down the glossy dark-blue body panel of a three-wheeler, with a fine water spray catching the light. Night-time wash bay, cool blue fill light, one warm orange light reflecting on the wet paint, shallow depth of field. Subject in the centre of the frame. Photorealistic premium automotive photography, no over-HDR. No text, no logos, no brand badges, no number plate, no watermark. Portrait 4:5.
```

### A11 `booking-night-road`

```text
A dark-blue Sri Lankan three-wheeler (auto-rickshaw) with its headlights on, driving along a quiet village road at blue hour in northern Sri Lanka, with tall palmyra palm trees silhouetted against a deep evening sky. The vehicle sits in the right third of the frame; the left 40% is calm dark sky and road, left clear for headline text. The wet road reflects a thin warm orange light. Natural cinematic colour, photorealistic, realistic scale, no over-HDR, no teal-and-orange grading. No text, no signs, no logos, no brand badges, no readable number plate, no people's faces, no watermark. Landscape 16:9.
```

### A12 `jaffna-palmyra-road`

```text
Wide landscape photograph of a quiet red-earth road lined with palmyra palm trees in northern Sri Lanka at early golden hour, with one small three-wheeler far in the distance. Calm, clean composition with open sky in the upper half. Warm soft sunlight, deep blue sky, natural colour, photorealistic, no over-HDR. No temples or recognisable landmarks, no signboards, no text, no logos, no people's faces, no watermark. Landscape 16:9.
```

---

## B. Real photos (9 required, 2 optional)

**Shooting guide for all photos:**

- Daylight or clean even light. Avoid harsh midday shadows on faces.
- Clean up the frame first: tidy the bay, remove clutter, wipe the vehicles.
- Landscape photos: hold the phone horizontally, camera at chest height, keep verticals straight.
- People: get their permission for use on the website. For customers, get written consent.
- Do not edit with heavy filters. I handle light grading so every photo matches.

| # | File name | Used on | Ratio | Shot brief |
| --- | --- | --- | --- | --- |
| B1 | `iet-service-point-inuvil-workshop-exterior` | `/branches/`, `/branches/inuvil/` hero, `/tvs-authorized-three-wheeler-dealer/` | 16:9 | Full front of the workshop with the IET signage readable. Straight-on, from across the road, in morning light. No parked cars blocking the entrance. |
| B2 | `iet-service-point-tvs-authorized-dealer-board` | Homepage TVS authority section, `/tvs-authorized-three-wheeler-dealer/` hero, `/branches/inuvil/` | 4:3 | The TVS authorized three-wheeler dealer board, straight-on and fully readable. A second version with the workshop entrance behind it is welcome. |
| B3 | `iet-service-point-service-bay` | `/branches/inuvil/` | 3:2 | Wide view of a clean service bay with a three-wheeler being serviced. Tools organised, lights on. |
| B4 | `iet-service-point-technician-at-work` | `/branches/inuvil/` | 4:5 | A technician in IET workwear working on a three-wheeler engine. Natural action, not posed at the camera. |
| B5 | `iet-service-point-tvs-genuine-parts` | Homepage genuine parts section, `/tvs-genuine-parts/` | 4:5 | Several genuine TVS part boxes arranged neatly on a clean dark surface or shelf, labels facing the camera. |
| B6 | `iet-service-point-tvs-genuine-parts-label` | `/tvs-genuine-parts/` (how to identify genuine parts) | 1:1 | Macro close-up of the security label or QR code on a genuine TVS parts box, sharp and readable. |
| B7 | `j-sujinthan-managing-director` | Homepage leadership, `/about/`, `/about/j-sujinthan/` | 4:5 | Chest-up portrait of J. Sujinthan. Plain dark wall or the workshop softly blurred behind. Soft window light from one side, looking at the camera, relaxed and confident. |
| B8 | `s-jeyakumar-mentor-advisor` | Homepage leadership, `/about/`, `/about/s-jeyakumar/` | 4:5 | Chest-up portrait of S. Jeyakumar (M.E), in the same setup and light as B7 so the pair matches. |
| B9 | `iet-service-point-team` | `/about/` hero | 3:2 | The whole team in IET workwear in front of the workshop, everyone's face visible, in natural light. |
| B10 (optional) | `iet-service-point-first-anniversary` | Future first-anniversary page | 3:2 | A real photo from the first-anniversary day or celebration. |
| B11 (optional) | `iet-service-point-customer-handover` | Future reviews section | 4:5 | A customer receiving their three-wheeler after service. Written consent from the customer is required. |

---

## C. Official brand files (1)

| # | File name | Used on | Notes |
| --- | --- | --- | --- |
| C1 | `tvs-logo` | Homepage TVS authority section, `/tvs-authorized-three-wheeler-dealer/` (added once the file and permission arrive) | The official TVS logo file (SVG preferred) from TVS / the dealer brand kit, plus written permission to use it on the website. Do not screenshot it or recreate it with AI. |

The IET logo (`public/brand/logo-v2.png`) is already in the project and will not be changed.

---

## Not needed as images

These are built in code, so no files are required: technical grid backgrounds, gear and precision-ring graphics, orange service lines, the Jaffna service map, Branch 02 "coming soon" outline, icons, the Service Journey diagram, and the social share (Open Graph) image.

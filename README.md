# Tree Spirit Worlds website

Public presentation source for Tree Spirit Worlds.

## Security boundary

This repository is deliberately public. It may contain only public-facing website code and intentionally public assets.

Do not commit:

- passwords, API keys, tokens, private keys, or credentials;
- payment, subscriber, customer, or other personal data;
- paid interactive source files or complete product masters;
- unpublished manuscripts, editable production assets, or private business records;
- environment files or service exports.

Payhip owns checkout, payment processing, and product delivery. Buttondown owns newsletter consent and subscriber storage. The website must never collect or store those records directly.

The public site uses no API keys, client-side payment form, analytics tracker, social-media embed, third-party JavaScript library, or web-font dependency. Its only public integrations are ordinary external links and Buttondown's native HTML POST form.

The official Tree Spirit Worlds logo is the brand identifier; it is not Rooty. Rooty is a separate character and must never be derived from the logo. Only faithful web-optimized logo derivatives and an owner-approved standalone Rooty asset may be published here.

## Current publication state

This source is intended for temporary GitHub Pages review during Cycles 1–2. The live domain and DNS must not be changed until the controlled Cycle 3 migration.


## Website system v1 — September 2026

The site uses shared visual tokens in styles.css, semantic page sections, and
optional stateful interactions in script.js. Keep the existing static architecture.

| Page | Keep | Change | Remove | Add |
| --- | --- | --- | --- | --- |
| Home | Approved Rooty, logo, three paths, environmental principle | Rooty dialogue accessibility; shared type and touch targets | Dialogue prerequisite for World entry | Modal focus containment; always available World path |
| World | Spatial principles, asymmetric articles, Roman I–XII handless clock | Quiet proposition; shared section spacing; click/tap encounter | Hover-only identity; public asset-review note | Respond → reveal identity → separate work link; no-JS work link |
| About | World definition, mission, principles, four access modes | Who → what → why → mission → principles; plain language | IP-planning terminology; speculative object inventory | Shared section rhythm |
| Shop | Released EPUB, US$6.99, exact final description, retailer names | Product and purchase first; four categories after product | Tall introductory pitch; internal retailer verification note; retailer badges | Plain category rows |
| Letters | Exact working Buttondown POST form and consent; continuation | Shared type, touch targets and spacing | None | Shared keyboard/mobile refinements |

Visual roles: Garamond-based local font stack (system serif fallback), forest/cream,
76rem content container, 42rem reading measure, section spacing 4.5–9rem,
World proposition 1.85–2.75rem, functional controls approximately 44px minimum.
No font downloads or paid fonts. Actual face depends on fonts installed by visitor.

Interaction primitives: reveal uses progressive enhancement; respond begins on click;
transform changes the clock's resting state to a revealed story; enter is a separate
normal link. Rooty presence is visible on Home, speaking only on request, and guiding
through an immediately available World link. No navigation requires finishing dialogue.
Reduced motion removes animated reveals and object movement. No sound or autoplay.

Rooty: first standalone asset approved by owner for this pass; reuse unchanged.
Logo is separate and unchanged. Clock retains existing structural geometry; no hands.
No source material from the private narrative prototype belongs in this repository.

Commerce: retain https://treesspirit.com/b/iElSr as the direct-purchase destination.
Payhip official embed setup needs product-specific snippets from Share / Embed;
none is supplied. The owner-authorized product-link fallback remains active.
Reference: https://help.payhip.com/article/68-add-payhip-to-your-website
Buttondown E2E activation was owner-confirmed previously; do not create subscriptions
for QA. Retailer names are informational until exact product URLs are verified.

Deploy only to the existing temporary GitHub Pages branch. Do not add CNAME,
change DNS, migrate domains, or alter Payhip configuration. Stop for owner review.


## Gap closure pass

Preserve the system-v1 architecture. Final product copy keeps “Sophie does not.” as
its own paragraph. The clock's revealed link reads “Discover The Internal Clock”.
Focus/hover gives an immediate border response, activation changes state, and entry
remains a separate link. Rooty exposes expanded state and bounded optional dialogue.
Home pathways use unboxed directions; mobile pathways follow content in normal flow,
preventing overlap with Rooty or enlarged text. All approved image assets unchanged.
About and Letters content/form unchanged. Shared asset version: gap-1.

Mobile viewport emulation is unavailable in the review browser; source inspection
is not equivalent to a complete mobile journey test. Physical-phone review remains
outstanding. Payhip stays the exact owner-verified product link fallback.

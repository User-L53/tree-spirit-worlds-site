# Tree Spirit Worlds — temporary website

Static GitHub Pages review site. No build dependencies, payment handling, subscriber
storage, tracking or autoplay sound. Payhip owns checkout/payment/delivery; Buttondown
owns the tested subscription flow. Do not add CNAME or migrate the production domain.

## Current source of truth: refinement, 2026-09-07

Navigation: Home / About / Space / Shop / Letters. The former World route redirects
to Space. Full official logo is used in centered header and footer. The logo web
asset is a faithful resize of the approved complete artwork, never a redraw.
Approved Rooty remains unchanged and appears separately on Home and Letters.

Serif carries literary voice; restrained system sans carries orientation and metadata.
Shared tokens, responsive layouts, keyboard controls and reduced-motion rules live
in styles.css. Interaction state lives in script.js; pages remain plain semantic HTML.

- Home: centered Rooty; optional in-page progressive dialogue; no modal/Next controls.
  About / Space / Shop directions always remain available. Final invitation
  “Enter the Space” follows the Sacred Tree completion brief.
- About: identity, storytellers/world-builders, four media, why, quiet closing principle.
- Space: tree/root architecture, space between, spatial time, text transformation,
  distancing/storytelling principle, handless Roman-numeral clock → product.
- Shop: four linked forms and one editorial Current Work. Full copy lives on product.
- Categories: ebooks.html, interactive-experiences.html, audiobooks.html,
  physical-objects.html. Only Ebooks has a released work; no invented inventory.
- Product: the-internal-clock.html; approved eight-paragraph description, EPUB,
  released, US$6.99, exact verified Payhip URL. Retailer names remain informational
  because exact product URLs have not been supplied.
- Letters: original form and two-column relationship retained; peripheral Rooty
  automatically changes presence and reveals “Until next time.” independently of form.

## Artwork review

The Sacred Tree and continuous roots now use a newly generated website illustration,
translated from the owner-approved morphology reference. No temporary artwork slots
remain. Owner approval of the final website rendering is still required. Original
reference/master sheets and paid narrative source remain outside the public repo.

## QA boundaries

Test direct Shop → Current Work → product and Shop → Ebooks → product, all category
empty states, Home dialogue, About disclosure, Space clock, and Letters farewell.
Preserve the owner-confirmed Buttondown activation evidence; do not subscribe test users.
Payhip stays the exact product-link fallback https://treesspirit.com/b/iElSr.

Narrow embedded browsing-context checks are responsive rendering tests, not physical
phone or touch-device certification. Physical Safari/Chrome, OS reduced motion and
assistive technology review must be distinguished from source or desktop checks.
Temporary responsive QA fixtures are removed before final owner handoff.


## Verification in this pass

- Full approved product description and original Buttondown form are byte-identical
  to their prior versions. Routes, anchors, image alt text and unique IDs checked.
- Real embedded viewport renders at 320/390/768px: Home has no horizontal overflow.
- 390px flow exercised Home dialogue → About → Space text transformation → clock
  → product, then Shop → Ebooks → product → Letters. Product and Letters rendering
  inspected visually. This is not touch-device emulation or physical-phone testing.
- All three unreleased category destinations display truthful empty states; direct
  Current Work navigation also reaches the product. Price and Payhip href verified.
- About hover/click interaction conflict caught during QA and corrected with pinned
  disclosure state. Mobile navigation controls adjusted toward 44px target width.
- Letters farewell reached its automatic final state without submitting the form.
- Tree/root placeholders were superseded by the Sacred Tree completion pass below.

## Sacred Tree / Root System completion

The owner-approved Ancient Tree image supplies morphology only. A new built-in
imagegen illustration translates its thick irregular trunk, asymmetrical canopy,
exposed roots and continuous deep roots into restrained ink and moss/earth washes.
The source reference is not published. Web derivatives: sacred-tree-system.webp
(1024 × 1536) and sacred-tree-system-small.webp (640 × 960).

One unbroken portrait silhouette preserves trunk/root continuity. CSS blending and
soft edge masks integrate its paper field; desktop copy uses the open deep-root
center, while at <=700px copy follows the intact image in normal flow. No image
cropping, parallax, sound or per-root animation. A one-time 1000ms density reveal
uses the existing observer. Reduced motion and no-JavaScript show the whole artwork.
Home now says Enter the Space. The new rendering remains subject to owner visual
approval. No Workload 2 or Cycle 3 actions are included in this completion pass.

Generation prompt specification: illustration-story; reference for morphology only;
one ancient thick irregular trunk, asymmetrical broad canopy, exposed-to-deep roots;
dry forest-green ink, moss/earth washes on warm cream; portrait continuous system;
open lower-center text space; no photographic lighting, fantasy effects, characters,
text, border or background landscape. Full morphology is retained at narrow widths.

Completion QA: desktop tree/root integration visually inspected. Embedded widths
320/390/768px have no page horizontal overflow; full silhouette remains visible.
Root depth reveal reached its visible state. Keyboard activation passed for Rooty
and the Clock; the corrected Home invitation reaches Space. Subsequent approved
Space copy and Clock markup are unchanged. No page-origin console errors observed.
Physical mobile touch, OS reduced-motion and screen-reader checks remain manual;
reduced-motion and no-JS behavior were checked in source, not device-certified.

# Tree Spirit Worlds — temporary website

Static GitHub Pages review site. Do not add a CNAME or change the production domain,
Namecheap DNS, `www`, or Payhip configuration during review.

## Approved system source of truth — 2026-09-11

This pass establishes the approved concept-led website shell without rebuilding the
repository:

- deep ink/forest-green content field across the site;
- approved restrained brand/navigation treatment;
- navigation: Home / About / Space / Works / Letters;
- white three-column footer with Shop, social, contact/privacy labels and 2026 copyright;
- Home introduction and Selected Works composition from the approved layout reference;
- original approved artwork for the three current Concept Works;
- responsive image delivery with intact square composition and high-DPI sources;
- Works index and three initial View Work pages with reusable Possible Forms slots.

The approved About mockup now governs the master interface across Home, About, Space,
Works, Letters, and supporting pages: one green-black field (`#0d2315`), warm-ivory
foreground text, a restrained book-like serif stack, finely tracked navigation, and a
shared white editorial footer. Concept artwork may change by page; the shell must not.

The About page uses the two supplied approved masters directly, without cropping,
filters, recolouring, recompression, or upscaling:

- `assets/masters/about-global-visual.png` (1672 × 941)
- `assets/masters/about-one-world-many-forms.png` (1672 × 941)

The three supplied PNG Concept masters are retained outside the public repository and
were not edited. Lossless 1254px WebP files and 800px delivery derivatives are stored in
`assets/`. Full-size derivatives were checked at original dimensions for preserved
composition, colour relationships and sharp detail without visible compression damage.
View Work hero art is capped at 627 CSS pixels so the 1254px supplied masters retain
2× density rather than being upscaled across a wide desktop canvas.

The former Rooty, Sacred Tree/root system and handless-clock master presentation is no
longer active. Its source assets remain in the repository until owner review is complete.
The Internal Clock product cover remains within the Shop as product artwork, not global
website decoration.

## Existing infrastructure preserved

- Buttondown subscription form and endpoint remain unchanged.
- Payhip product link, checkout ownership and delivery responsibilities remain unchanged.
- Existing Shop/category/product routes remain available.
- `world.html` continues to preserve the former route and direct visitors to Space.
- Semantic landmarks, skip link, visible focus, minimum touch targets and reduced-motion
  support remain part of the shared system.

## Current review boundary

Review Home, the global header, white footer, image fidelity and responsive composition.
The remaining pages inherit the shell but have not received their deeper concept-content
passes. No Cycle 3 or custom-domain migration is included.

# ELURA Private Room Art Brochure Lab

Created: 2026-06-22 KST

Purpose: research and prototype a premium web brochure that can also be printed to PDF after a user uploads their own room photo.

Core thesis:

- ELURA should not present room art as generic decor advice.
- The brochure should read the room's existing signals first, then translate them into art role, palette, placement, and story.
- The strongest direction for the current demographic is lived-in luxury: real apartments, warm object density, editorial restraint, and one clear art decision per space.
- 2026-06-22 09:35 KST research update: added a demographic fit matrix that ranks the strongest brochure languages as lived-in couture, palette dossier, private diagnostic, object narrative, and Neo-Deco as a higher-risk accent direction.

Included experiments:

- 09:00 Atelier Diagnostic
- 11:00 Couture Palette Dossier
- 13:00 Objets Nomades Room
- 15:00 Rue Cambon Chapters
- 17:00 Neo-Deco Certificate
- 19:00 Lived-In Magazine Feature
- 21:00 Private Client Portfolio

Print behavior:

- `Print Selected` prints the active brochure concept.
- `Print All` prints the research memo, schedule, and every concept as a multi-page PDF.
- CSS includes A4 `@page` rules and page breaks for browser print output.
- Release cards now use KST timestamp data and client-side status calculation, so each ready brochure becomes `Released` automatically at its scheduled checkpoint.

Release log:

- 2026-06-22 09:00 KST: `exports/elura-brochure-0900-atelier-diagnostic.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered with Poppler for visual PDF inspection.
  - PDF: A4, 7 pages, approximately 2.7 MB.
- 2026-06-22 11:00 KST ready: `exports/elura-brochure-1100-couture-palette-dossier.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 6 pages, approximately 2.6 MB.
  - Status should change from `Ready` to `Released` at the 11:00 KST checkpoint after live verification.
- 2026-06-22 13:00 KST ready: `exports/elura-brochure-1300-objets-nomades-room.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 7 pages, approximately 3.4 MB.
  - Status should change from `Ready` to `Released` at the 13:00 KST checkpoint after live verification.
- 2026-06-22 15:00 KST ready: `exports/elura-brochure-1500-rue-cambon-chapters.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 6 pages, approximately 2.2 MB.
  - Status should change from `Ready` to `Released` at the 15:00 KST checkpoint after live verification.
- 2026-06-22 17:00 KST ready: `exports/elura-brochure-1700-neo-deco-certificate.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 6 pages, approximately 2.2 MB.
  - Status should change from `Ready` to `Released` at the 17:00 KST checkpoint after live verification.
- 2026-06-22 19:00 KST ready: `exports/elura-brochure-1900-lived-in-magazine-feature.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 6 pages, approximately 2.0 MB.
  - Status should change from `Ready` to `Released` at the 19:00 KST checkpoint after live verification.
- 2026-06-22 21:00 KST ready: `exports/elura-brochure-2100-private-client-portfolio.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 6 pages, approximately 1.5 MB.
  - Status should change from `Ready` to `Released` at the 21:00 KST checkpoint after live verification.
- 2026-06-22 09:40 KST: added automatic KST release-state calculation.
  - Verified with Playwright time injection for 09:40, 11:01, and 21:01 KST.
  - Verified selected print output with Playwright PDF generation and Poppler page rendering.

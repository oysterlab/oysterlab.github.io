# ELURA Private Room Art Brochure Lab

Created: 2026-06-22 KST

Purpose: research and prototype a premium web brochure that can also be printed to PDF after a user uploads their own room photo.

Core thesis:

- ELURA should not present room art as generic decor advice.
- The brochure should read the room's existing signals first, then translate them into art role, palette, placement, and story.
- The strongest direction for the current demographic is lived-in luxury: real apartments, warm object density, editorial restraint, and one clear art decision per space.
- 2026-06-22 09:35 KST research update: added a demographic fit matrix that ranks the strongest brochure languages as lived-in couture, palette dossier, private diagnostic, object narrative, and Neo-Deco as a higher-risk accent direction.
- 2026-06-22 09:50 KST product bridge update: added an upload-to-brochure blueprint that defines the minimum photo inputs, room-signal reading, art role assignment, private-code storytelling, and printable PDF delivery promise.
- 2026-06-22 09:58 KST decision update: added an aesthetic verdict board that recommends 19:00 Lived-In Magazine plus 21:00 Private Client Portfolio as the primary route, with 11:00 as the save driver and 09:00 as the trust builder.
- 2026-06-22 10:05 KST QA update: added a production evidence board summarizing the visual direction, PDF fidelity, release cadence, client promise, link audit, and remaining checkpoint gate.
- 2026-06-22 10:12 KST generation update: added a signal-to-story schema that maps visible room signals into room role, art function, palette logic, private code name, and delivery proof.
- 2026-06-22 10:30 KST copy update: added a luxury copy system to keep brochure language evidence-based, role-first, restrained, and free of generic decor labels.
- 2026-06-22 10:36 KST measurement update: added an experiment measurement matrix that maps every two-hour brochure to target behavior, proof signal, and next product decision.
- 2026-06-22 10:20 KST client sample update: added a filled client brief sample for a mirror-edge bathroom upload, including room signal, wall role, two art routes, and revision rule.
- 2026-06-22 11:05 KST 13:00 pre-release refinement: strengthened the Objets Nomades Room brochure with placement proof and explicit art-role notes for each object.
- 2026-06-22 11:14 KST 15:00 pre-release refinement: added code-proof captions to the Rue Cambon Chapters brochure so the image spread explains why each room signal qualifies as a private house code.
- 2026-06-22 11:20 KST 17:00 pre-release refinement: tightened the Neo-Deco finish rule so the certificate stays dramatic without turning the room into theme decor.
- 2026-06-22 11:38 KST 19:00 pre-release refinement: added a saveable crop rule to make the lived-in magazine route more explicit about which real room object should remain visible.
- 2026-06-22 11:49 KST 21:00 pre-release refinement: added an approval gate to the Private Client Portfolio so the final brochure closes on role approval, route choice, and PDF proof.

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
- `Master PDF` links to `exports/elura-brochure-master-research-release.pdf`, a full research plus seven-experiment export.
- CSS includes A4 `@page` rules and page breaks for browser print output.
- Release cards now use KST timestamp data and client-side status calculation, so each ready brochure becomes `Released` automatically at its scheduled checkpoint.

Release log:

- 2026-06-22 09:45 KST master export: `exports/elura-brochure-master-research-release.pdf`
  - Includes cover, research memo, demographic fit matrix, upload-to-brochure blueprint, aesthetic verdict board, experiment measurement matrix, schedule, release log, production QA board, signal-to-story generation schema, luxury copy system, client brief sample, and all seven brochure experiments.
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 28 pages, approximately 9.8 MB.
- 2026-06-22 09:00 KST: `exports/elura-brochure-0900-atelier-diagnostic.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered with Poppler for visual PDF inspection.
  - PDF: A4, 3 pages, approximately 2.2 MB.
- 2026-06-22 11:00 KST released: `exports/elura-brochure-1100-couture-palette-dossier.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 2 pages, approximately 1.7 MB.
  - 2026-06-22 11:00 KST live checkpoint: automatic release state verified with `Released` count 2 and `Ready` count 5.
- 2026-06-22 13:00 KST ready: `exports/elura-brochure-1300-objets-nomades-room.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 3 pages, approximately 2.5 MB.
  - 2026-06-22 11:05 KST pre-release refinement: added placement proof and object-level art role notes.
  - Status should change from `Ready` to `Released` at the 13:00 KST checkpoint after live verification.
- 2026-06-22 15:00 KST ready: `exports/elura-brochure-1500-rue-cambon-chapters.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 2 pages, approximately 1.3 MB.
  - 2026-06-22 11:14 KST pre-release refinement: added two proof captions to connect the image spread back to private house-code logic.
  - Status should change from `Ready` to `Released` at the 15:00 KST checkpoint after live verification.
- 2026-06-22 17:00 KST ready: `exports/elura-brochure-1700-neo-deco-certificate.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 2 pages, approximately 1.3 MB.
  - 2026-06-22 11:20 KST pre-release refinement: tightened the finish rule around one dramatic gesture, matte print, dark frame, and a single metallic cue.
  - Status should change from `Ready` to `Released` at the 17:00 KST checkpoint after live verification.
- 2026-06-22 19:00 KST ready: `exports/elura-brochure-1900-lived-in-magazine-feature.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 2 pages, approximately 1.1 MB.
  - 2026-06-22 11:38 KST pre-release refinement: added a saveable crop rule that keeps one lived object visible inside the editorial frame.
  - Status should change from `Ready` to `Released` at the 19:00 KST checkpoint after live verification.
- 2026-06-22 21:00 KST ready: `exports/elura-brochure-2100-private-client-portfolio.pdf`
  - Verified with Playwright image load check: 0 broken images.
  - Rendered locally with Poppler for visual PDF inspection.
  - PDF: A4, 2 pages, approximately 0.6 MB.
  - 2026-06-22 11:49 KST pre-release refinement: added an approval gate for role approval, route choice, and PDF proof export.
  - Status should change from `Ready` to `Released` at the 21:00 KST checkpoint after live verification.
- 2026-06-22 09:40 KST: added automatic KST release-state calculation.
  - Verified with Playwright time injection for 09:40, 11:01, and 21:01 KST.
  - Verified selected print output with Playwright PDF generation and Poppler page rendering.

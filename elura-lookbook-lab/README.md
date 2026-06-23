# ELURA Hourly Lookbook Lab

Created: 2026-06-23 KST

Purpose: turn the previous research session into actual luxury lookbook, spatial essay, and zine web pages for realistic user homes.

Working rule:

- Each hour should add a real page, not only a strategy note.
- Reference Dior, Chanel, and Louis Vuitton as editorial grammar only.
- Do not use brand logos, monograms, proprietary layouts, or brand copy.
- Use generated room/art imagery when a realistic apartment needs multiple coherent spaces.
- Keep the ELURA promise centered on user-uploaded rooms, art role, placement story, and printable output.
- The home should feel attainable for the current demographic: small rental apartment, modest furniture, visible daily objects, and a clear art-led upgrade.

Reference grammar used for 09:00:

- Dior Maison: home as art de vivre, organized through tableware, textiles, decor, and objects.
- Chanel 31 Cambon and Inside Chanel: address, house code, preservation, appointment, and chaptered storytelling.
- Louis Vuitton Objets Nomades: functional furniture and objects raised into designer/craft narrative.
- Louis Vuitton Fashion Eye: large-format photographic gaze with essay/editorial context.

Reference URLs:

- Dior Maison: https://www.dior.com/en_us/fashion/maison/maison
- Chanel Inside Chanel: https://www.chanel.com/us/about-chanel/inside-chanel/
- Chanel 31 Cambon: https://www.chanel.com/us/fashion/services/boutique-31-cambon/
- Louis Vuitton Objets Nomades: https://us.louisvuitton.com/eng-us/magazine/articles/the-objets-nomades-collection
- Louis Vuitton Fashion Eye: https://us.louisvuitton.com/eng-us/trunks-travel-and-home/library-and-stationery/fashion-eye/_/N-tiayzr9

Image generation:

- Built-in `image_gen` mode.
- Generated four coherent real-home apartment images: living room, work-dining corner, small bedroom, narrow entry.
- Prompts avoided people, logos, monograms, readable text, and brand marks.
- 2026-06-23 10:40 KST correction: replaced the earlier overly luxurious apartment mood with ordinary rental-home environments so the promise reads as "your home becomes luxury through art."
- Final web assets were copied into `docs/lookbook-lab/assets/` as compressed JPGs.

Release log:

- 2026-06-23 09:00 KST released: Maison Lookbook, `index.html`.
  - Includes cover, reference grammar board, spatial essay, four room plates, detachable zine page, and hourly queue.
  - Verified with Playwright desktop and mobile image checks: 0 broken images.
  - Verified mobile horizontal overflow: none at 390 px viewport.
  - Generated printable PDF: `elura-lookbook-0900-maison.pdf`, A4, 13 pages, approximately 1.9 MB.
- 2026-06-23 10:00 KST released: Cambon Spatial Essay, `#h1000`.
  - Adds a real spatial essay page based on address, mirror, threshold, preservation, and chaptered house-code storytelling.
  - Generated three additional private-apartment images: stair/mirror threshold, preservation detail, salon corner.
  - Verified with Playwright desktop and mobile image checks: 0 broken images.
  - Verified mobile horizontal overflow: none at 390 px viewport.
  - Generated printable PDF: `elura-lookbook-1000-cambon.pdf`, A4, 3 pages, approximately 1.3 MB.
- 2026-06-23 11:00 KST released: Nomadic Object Zine, `#h1100`.
  - Adds a real-home object-zine page based on changing focal point, daily companion objects, and placement proof.
  - Uses realistic apartment images: living room, work-dining desk, narrow entry.
  - Verified with Playwright desktop and mobile image checks: 0 broken images.
  - Verified mobile horizontal overflow: none at 390 px viewport.
  - Generated printable PDF: `elura-lookbook-1100-nomadic.pdf`, A4, 4 pages, approximately 1.6 MB.
- 2026-06-23 12:00 KST ready: Maison Table Lookbook, `#h1200`.
  - Adds a real-home art de vivre page around a work-dining table, mug, laptop, lamp, outlet, and wall art.
  - Includes Dior Maison and Dior Salone del Mobile reference URLs inside the section.
  - Verified with Playwright time-injection release gate for 12:01 KST.
  - Generated printable PDF: `elura-lookbook-1200-maison-table.pdf`, A4, 3 pages, approximately 1.5 MB.
- 2026-06-23 13:00 KST ready: Bedroom Storybook, `#h1300`.
  - Adds a real-home bedroom storybook around a clothing rail, laundry basket, bedside charger, small lamp, and wall art.
  - Includes Chanel Inside Chanel and 31 Cambon reference URLs inside the section.
  - Verified with Playwright time-injection release gate for 13:01 KST.
  - Generated printable PDF: `elura-lookbook-1300-bedroom-story.pdf`, A4, 2 pages, approximately 1.0 MB.

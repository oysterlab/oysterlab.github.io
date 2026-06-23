# ELURA Hourly Lookbook Lab

Created: 2026-06-23 KST

Purpose: turn the previous research session into actual luxury lookbook, spatial essay, and zine web pages.

Working rule:

- Each hour should add a real page, not only a strategy note.
- Reference Dior, Chanel, and Louis Vuitton as editorial grammar only.
- Do not use brand logos, monograms, proprietary layouts, or brand copy.
- Use generated room/art imagery when a house needs multiple coherent spaces.
- Keep the ELURA promise centered on user-uploaded rooms, art role, placement story, and printable output.

Reference grammar used for 09:00:

- Dior Maison: home as art de vivre, organized through tableware, textiles, decor, and objects.
- Chanel 31 Cambon and Inside Chanel: address, house code, preservation, appointment, and chaptered storytelling.
- Louis Vuitton Objets Nomades: functional furniture and objects raised into designer/craft narrative.
- Louis Vuitton Fashion Eye: large-format photographic gaze with essay/editorial context.

Image generation:

- Built-in `image_gen` mode.
- Generated four coherent private-apartment images: living, dining, bedroom, entry/powder-room threshold.
- Prompts avoided people, logos, monograms, readable text, and brand marks.
- Final web assets were copied into `docs/lookbook-lab/assets/` as compressed JPGs.

Release log:

- 2026-06-23 09:00 KST released: Maison Lookbook, `index.html`.
  - Includes cover, reference grammar board, spatial essay, four room plates, detachable zine page, and hourly queue.
  - Verified with Playwright desktop and mobile image checks: 0 broken images.
  - Verified mobile horizontal overflow: none at 390 px viewport.
  - Generated printable PDF: `elura-lookbook-0900-maison.pdf`, A4, 13 pages, approximately 1.9 MB.

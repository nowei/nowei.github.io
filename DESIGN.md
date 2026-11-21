---
name: Andrew Wei
description: A personal site that reads like a terminal notebook.
colors:
  terminal-azure: "#1864ab"
  hover-cyan: "#0b7285"
  link-active: "#087f5b"
  cursor-gold: "#ffcc00"
  control-blue: "#145999"
  comment-green: "#087f5b"
  marker-teal: "#12b886"
  marker-orange: "#fd7e14"
  alert-red: "#ff0000"
  nav-light: "#d3d3d3"
  nav-dark: "#333333"
  paper: "#ffffff"
  paper-dark: "#242424"
  ink: "#000000"
  ink-dark: "#c9c9c9"
  border: "#ced4da"
  border-dark: "#424242"
  dimmed: "#868e96"
typography:
  display:
    fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: "2.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0em"
  headline:
    fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0em"
  title:
    fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0em"
  body:
    fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "32px"
spacing:
  xs: "10px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "32px"
components:
  button-nav:
    backgroundColor: "transparent"
    textColor: "{colors.control-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 18px"
    height: "42px"
  button-nav-hover:
    backgroundColor: "rgba(34, 139, 230, 0.12)"
    textColor: "{colors.hover-cyan}"
    rounded: "{rounded.md}"
  button-nav-active:
    backgroundColor: "transparent"
    textColor: "{colors.control-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 18px"
    height: "42px"
  link:
    textColor: "{colors.terminal-azure}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.hover-cyan}"
    typography: "{typography.body}"
  card-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  card-writing:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
    width: "700px"
  nav-bar:
    backgroundColor: "{colors.nav-light}"
    textColor: "{colors.control-blue}"
    padding: "12px 16px"
    width: "100%"
  comment:
    textColor: "{colors.comment-green}"
    typography: "{typography.body}"
---

# Design System: Andrew Wei

## Overview

**Creative North Star: "The Terminal Notebook"**

The Terminal Notebook is a personal site that reads like a shell session left open on a desk. One monospace face carries the page. Content sits on bordered sheets. Navigation is a flat bar. Personality shows up as comments, not decoration: a green `//` aside, an emoji inside a sentence, an underline for where you are.

Density is comfortable and a little loose. Home is a stack of sheets in a centered column. Writing narrows, like a note. The timeline uses the same sheets with smaller cards nested inside. Fills stay rare. Type does the talking.

Color follows the system preference. The bar switches from lab gray to charcoal, and the sheets follow light or dark paper. The link behavior does not change: hover still flares cyan and picks up a small gold glow.

**Key Characteristics:**

- One monospace stack for body, labels, and headings
- Bordered paper for content, a flat bar for navigation
- The current page marked by an underline
- Terminal Azure links, with Hover Cyan and a Cursor Gold glow
- Comment Green reserved for `//` asides
- Shadows only as a quiet lift under paper

## Colors

Bright terminal color on otherwise plain paper. The custom accents are small and reserved for links, hover, and comments.

### Primary

- **Terminal Azure** (`#1864ab` light / `#74c0fc` dark): Resting color of a plain anchor on paper. Deepened from the legacy bright cyan-blue for WCAG AA on white.
- **Control Blue** (`#145999` light / `#a5d8ff` on the dark bar): Resting color of navigation controls on the bar.
- **Hover Cyan** (`#0b7285` light / `#66d9e8` dark): Hover color of anchor glyphs on paper; still reads as terminal cyan.
- **Cursor Gold** (`#ffcc00`): The text-shadow on link hover (`#fc0 0 0 5px`). A glow, not a fill.
- **Link Active** (`#00ffff`): Pressed anchors. CSS `cyan`.

**The Link Hover Rule.** Resting color depends on the element: plain anchors are Terminal Azure, component anchors and subtle buttons are Control Blue. On hover, every anchor becomes Hover Cyan and gains the Cursor Gold glow. Pressed anchors go Link Active. These colors stay on the glyphs. They do not paint bars, sheets, or buttons.

### Secondary

- **Comment Green** (`#087f5b` light / `#69db7c` dark): Asides written like code comments (`// It's time to sleep`). Used as a voice, not as a status.

**The Comment Voice Rule.** Comment Green is for comment-style asides. It is not a success badge, not a link color, and not a large surface.

### Neutral

- **Lab Gray** (`#d3d3d3`): Light navigation bar. CSS `lightgray`, not a Mantine gray step.
- **Charcoal Bar** (`#333333`): Navigation bar when the system prefers dark. Explicit `#333`, not the dark paper color.
- **Paper** (`#ffffff`): Light sheet and page background.
- **Night Paper** (`#242424`): Dark sheet and page background.
- **Ink** (`#000000`): Light text.
- **Ash Ink** (`#c9c9c9`): Dark text.
- **Hairline** (`#ced4da`): Light sheet border.
- **Night Hairline** (`#424242`): Dark sheet border.
- **Dimmed** (`#868e96`): Secondary lines, such as a timeline subtitle.
- **Alert Red** (`#ff0000`): The 404 numeral only. CSS `red`. Do not reuse it as a brand accent.

Category markers on the home interests list use Control Blue, **Marker Teal** (`#12b886`), and **Marker Orange** (`#fd7e14`). They label three columns. They are not a third brand color.

## Typography

**Display, headline, title, body, and label:** Consolas, with Liberation Mono, Menlo, Courier, then generic monospace.

**Character:** One face, dry and a little playful. It should feel like a terminal and a notebook, not a brochure. Emoji and comment syntax are allowed inside the sentence. A second family is not.

### Hierarchy

- **Display** (700, 2.125rem, 1.3): Blog and page titles. The largest line on the site. There is no separate marketing display size.
- **Headline** (700, 1.625rem, 1.35): Section titles on a sheet. Home and about follow the title with a divider. Timeline titles are also underlined.
- **Title** (700, 1.125rem, 1.45): Subsections, including the three interest columns.
- **Body** (400, 1rem, 1.55): Prose, lists, and the hero. Writing sheets hold a comfortable measure near 700px wide. Timeline footnotes center inside 500px.
- **Label** (600, 1rem, line-height 1): Navigation labels. External links in the bar (GitHub, LinkedIn, Resume) drop to weight 500.

**The One Face Rule.** Every role uses Consolas, Liberation Mono, Menlo, Courier, monospace. Headings included. Mantine Title still resolves to the library's system sans because `fontFamilyHeadings` is unset; that is drift, not a second voice. New work sets the heading family to this stack.

## Layout

A sticky bar across the viewport, then a centered column of sheets.

The bar is full width, stuck to the top, at `z-index: 100`. Its inner row is at most 1200px, with the page links on the left and GitHub, LinkedIn, and Resume on the right. Padding is 12px vertically and 16px horizontally.

Home sits in a 960px container with 32px of page padding and 32px between sheets. The hero sheet is at least 550px tall and centers a short greeting. About and writing sheets cap near 700px and center themselves. Interest columns are one-up, then two from 768px, then three from 992px.

The spacing scale is 10 / 12 / 16 / 20 / 32px. Stacks of sheets use the 32px step. Inside a sheet, titles sit 12px above a divider, and the divider sits 16px above the copy. Nested timeline cards use 12px or 16px of padding.

The page always reserves a vertical scrollbar, so the bar does not shift when content grows.

Breakpoints, from the component library: 576px, 768px, 992px, 1200px, 1408px. The layout only switches at the interest grid. Everything else is a centered column that gets narrower, not a different composition.

## Elevation & Depth

Border first. Sheets are separated from the page by a 1px hairline. A small shadow rides along as a quiet lift. The navigation bar and its buttons are flat.

### Shadow Vocabulary

- **Sheet lift** (`0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 10px 15px -5px, rgba(0, 0, 0, 0.04) 0 7px 7px -5px`): Home, about, and writing sheets.
- **Group lift** (`0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)`): Timeline groups and section sheets. Lighter than a page sheet.
- **Menu lift** (`0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 20px 25px -5px, rgba(0, 0, 0, 0.04) 0 10px 10px -5px`): The resume menu only. The one place a surface actually floats.

**The Border First Rule.** A sheet without a border is unfinished. A shadow without a border is not how this system makes hierarchy. Do not stack stronger shadows to mean "more important."

## Shapes

Corners are soft and come in four steps. Page sheets use 16px. Nested cards, images, menu rows, and buttons use 8px. Small timeline notes use 4px. Category markers are 24px circles (a 32px radius on a 24px tile).

Borders are a 1px hairline in Hairline or Night Hairline. Buttons have no border. The resume menu is a 220px panel.

**The Sheet Rule.** If it holds a page of writing, the radius is 16px. If it is a control or a card inside a sheet, the radius is 8px. Do not mix those two jobs.

## Components

Controls are refined and restrained. Transparent type, an underline for state, a sheet for content. Fills are rare.

### Buttons

- **Shape:** Gently rounded (8px). Navigation labels have a 42px height, 18px of side padding, and an 80px minimum width. Background stays transparent.
- **Navigation:** Control Blue, weight 600, 16px. The current page is underlined. It is not filled.
- **Hover / Focus:** A 12% Control Blue wash on hover. Anchor hover also flips the glyphs to Hover Cyan and adds the Cursor Gold glow, because the global anchor rule outranks the button class. Focus should keep a visible outline in Control Blue or Terminal Azure.
- **External:** GitHub, LinkedIn, and Resume match the navigation button, at weight 500, with a small icon on each side. Resume opens a hover menu of alternate files.

**The Underline Rule.** The current location is an underline. Not a pill, not a filled button, not a second background.

### Cards / Containers

- **Corner style:** 16px on page sheets. 8px on nested timeline cards. 4px on the smallest notes.
- **Background:** Paper in light, Night Paper in dark.
- **Shadow strategy:** Sheet lift on page sheets, group lift on timeline groups. See Elevation & Depth.
- **Border:** 1px Hairline, or Night Hairline in dark.
- **Internal padding:** 16px on home and about sheets. 32px on writing sheets. 12px or 16px on cards nested in the timeline.
- **Structure:** A title, then a divider, then the copy. Timeline section titles are underlined before that divider.

### Navigation

A sticky full-width bar. Lab Gray in light, Charcoal Bar in dark. It follows the system preference directly, not a stored toggle. Page links on the left, outbound links and the resume menu on the right, the row capped at 1200px. No hamburger treatment is defined; the same row wraps if the viewport is narrow.

### [Comment aside]

A body-size line in Comment Green, written with comment syntax (`// It's time to sleep`). It sits inside a sentence or under the clock. It is the site's only playful color voice.

### [Category marker]

A 24px circle with a check, used as a list bullet on the home interests grid. Technical uses Control Blue, social uses Marker Teal, hobbies use Marker Orange. One color per column, not per item.

## Do's and Don'ts

### Do:

- **Do** set headings to the same monospace stack as body: Consolas, Liberation Mono, Menlo, Courier, monospace.
- **Do** mark the current page with an underline on a transparent button.
- **Do** put biography, writing, and timeline groups on bordered paper. Page sheets use a 16px radius and a 1px hairline.
- **Do** keep the navigation bar flat: Lab Gray or Charcoal Bar, with transparent controls.
- **Do** use Comment Green only for asides written as code comments.

### Don't:

- **Don't** introduce a second typeface. Headings included. The unset Mantine heading face is drift, not permission.
- **Don't** fill navigation buttons, or turn the current page into a pill.
- **Don't** use shadow to create hierarchy. The border does that. The menu lift stays on the resume menu.
- **Don't** paint bars, sheets, or buttons with Terminal Azure, Hover Cyan, or Cursor Gold. Those belong to link glyphs and the hover glow.

# Legacy writing (HTML & notes)

Snapshots from the old static site (jQuery navbar, `style.css`, collapsible sections). **They are not wired into the React app** — open the files directly in the repo, or in git history, if you want the original markup.

| File | What it is | Live successor (if any) |
|------|------------|-------------------------|
| [`../recommendations.html`](../recommendations.html) | Watch / listen recommendations | [`/writing/recommendations`](../Recommendations.tsx) |
| [`../imposter.html`](../imposter.html) | Imposter syndrome essay | — |
| [`../terminology.html`](../terminology.html) | CS terminology notes | — |
| [`../paths.html`](../paths.html) | “Paths” reflections | — |
| [`../cm-notes.html`](../cm-notes.html) | Plain-text notes (Marx / communism themes); `.html` extension only | — |
| [`../reading_list.html`](../reading_list.html) | Plain-text reading / paper notes (ML, caches, compilers, etc.) | — |

Related outside this folder:

| File | What it is |
|------|------------|
| [`../../pages/projects/index.html`](../../pages/projects/index.html) | Old projects index (UW-era project blurbs) |

Also see [`../ASSETS2021Notes.txt`](../ASSETS2021Notes.txt) for conference notes kept as text.

To serve one of these on the site again, port content to a new route and add it to `spaPaths.ts` / `routes.tsx` — keep these files as the historical record unless you intentionally replace them.
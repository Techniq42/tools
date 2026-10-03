# Tools

Free, offline-friendly web tools from the
[Fellowship of Living Systems](https://livingsys.org) / Food System Hackers.

Each tool is a small, self-contained page that runs entirely in your browser.
No accounts, no tracking, nothing uploaded unless a tool says so plainly. We
build these because we needed them ourselves — and if they help you, they're
yours.

## What's here

Each tool lives in its own folder.

| Tool | What it does | Live |
|------|--------------|------|
| [`teleprompter/`](teleprompter/) | A teleprompter that **follows your voice** and scrolls to keep pace with you; optional local webcam recording. | https://gather.livingsys.org/tools/teleprompter/ |
| `cutting-board/` | An in-browser video editor (trim, cut, convert) powered by ffmpeg running locally in the browser. | https://gather.livingsys.org/tools/cutting-board/ |

More tools land here over time. A folder per tool; nothing shared between them
except this license and the house style.

## Running a tool

Every tool is a folder of static files — no build step, no server framework.

- **Just open it:** open the tool's `index.html` in a recent **Chrome** or
  **Edge**. (Features that need the microphone or camera require `https://`
  or `localhost`, so for those, serve the folder rather than opening the file
  directly.)
- **Serve it locally:** from a tool's folder, any static server works, e.g.
  `python -m http.server` then visit the printed `localhost` URL.
- **Host it:** copy the folder to any static web host behind HTTPS.

## Privacy, honestly

These are private-by-default. The one thing to know: some tools use the
browser's **built-in speech recognition** for voice features. In Chrome that
sends microphone audio to Google to turn it into text (the same engine as
voice typing) — so voice features need a connection and a Chromium browser.
Anything a tool records (e.g. webcam video) stays **on your device** and is
never uploaded by these pages. Each tool restates this in its own About panel.

## Licensing

Two tracks, side by side — this is standard and not a conflict:

- **Code → [Apache License 2.0](LICENSE).** Permissive: use it, change it,
  ship it, even commercially. Just keep the notices. Apache-2.0 also carries
  an explicit patent grant, which is why we chose it: we publish openly so no
  one — including us — can lock these ideas up later.
- **Content** (UI copy, sample text, docs) **→ [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).**
  Reuse and adapt it; just credit the Fellowship of Living Systems.

**Using parts under other licenses?** Permissive licenses mix cleanly. If we
bundle a component that's **MIT** (or BSD), we keep that component's own
license header and list it in [`NOTICE`](NOTICE); the project as a whole still
ships under Apache-2.0. We avoid copyleft (GPL/AGPL) dependencies, since those
would change the license of the whole tool.

## Contributing

Issues and pull requests are welcome. By contributing code you agree it's
licensed under Apache-2.0; contributed content under CC BY 4.0. Keep tools
self-contained, accessible, and honest about what they do with data.

---

Built in public by people building coordination tools for local food systems.
There's more at **[livingsys.org](https://livingsys.org)**.

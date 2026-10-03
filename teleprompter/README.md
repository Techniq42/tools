# Teleprompter

A teleprompter that **follows your voice**. Start reading and it scrolls to keep
pace with you — no pedal, no clicking, no shaking the laptop. You can also
scroll by hand or run a steady crawl at a speed you set, and optionally record a
take on your webcam.

**Live:** https://gather.livingsys.org/tools/teleprompter/

## Features

- **Voice-follow** — matches the words you speak to the words on screen and
  scrolls to you. The matcher uses a tight forward window, requires a short
  contiguous run before it moves, and penalizes big jumps, so a repeated word
  doesn't yank you to the wrong paragraph.
- **Your own script** — paste or load your text; it's kept in your browser.
- **Hand-scroll and steady-scroll** — always work, no connection needed.
- **Local recording** — optional webcam capture that saves to your device.
- **Multiple reading languages** for voice-follow, including right-to-left.
- Installable / works offline for the manual-scroll and recording paths.

## Browser support

- **Voice-follow** needs a Chromium browser (**Chrome** or **Edge**) and a live
  internet connection — it uses the browser's built-in cloud speech
  recognition. iOS Safari does not offer it.
- **Hand-scroll, steady-scroll, and recording** work offline and in more
  browsers.

## Privacy

- Voice-follow sends microphone audio to the browser's speech recognizer
  (in Chrome, that's Google) to turn speech into text — the same engine as
  voice typing. If you'd rather not, use hand-scroll or steady-scroll and never
  tap the mic.
- **Recording stays on your device.** The webcam capture is saved locally and
  is never uploaded by this page.

## Running it

It's a single self-contained page. Serve this folder over `https://` or
`localhost` (the mic and camera require a secure context), e.g.
`python -m http.server` from this directory, then open the printed URL in
Chrome or Edge.

## License

Code: Apache-2.0. Content/UI copy: CC BY 4.0. See the repository root
[`LICENSE`](../LICENSE) and [`README.md`](../README.md).

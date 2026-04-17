# Ognomy · WHOOP integration (prototype)

Mobile-first **UI prototype** for connecting a WHOOP account from the Ognomy app: benefits copy, primary call-to-action, consent microcopy, and a **connected** state with sample sync metadata. There is **no** live OAuth or WHOOP API integration—interactions are simulated for design and review.

## Requirements

- Node.js 18+ (recommended)

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

`preview` serves the production build locally.

## Prototype controls

- **Continue with WHOOP** — plays a short “connecting” state, then shows the connected panel.
- **Prototype: show connected state** (footer) — toggles the connected view without running the button flow.

## Stack

- React 18 + TypeScript
- Vite 5

## Note

WHOOP is a trademark of WHOOP, Inc. This repository is an independent mockup and is not affiliated with or endorsed by WHOOP or Ognomy.

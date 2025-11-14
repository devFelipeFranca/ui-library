# @abatech/ui

React 18 + TypeScript UI component library with TailwindCSS, Vanilla Extract, Vite (dev), tsup (build), and Style Dictionary for tokens.

## Install

```bash
npm install @abatech/ui
```

or via GitHub:

```bash
npm install github:abatech/ui-library#v0.1.0
```

Peer dependencies:

```bash
npm install react react-dom
```

## Scripts

- `npm run dev` — Vite dev server (for local development)
- `npm run tokens` — Build design tokens with Style Dictionary
- `npm run build` — Builds ESM + CJS + types (runs tokens first)
- `npm run preview` — Vite preview server

## Usage

```tsx
import { Button } from '@abatech/ui'

export function App() {
	return <Button>Click me</Button>
}
```

Tokens (Vanilla Extract) are exposed via `vars`:

```tsx
import { vars } from '@abatech/ui'
```

Tailwind is provided as a base stylesheet (`src/styles/tailwind.css`). Consumers should integrate Tailwind in their own build.

## Publish

```bash
npm publish --access public
```



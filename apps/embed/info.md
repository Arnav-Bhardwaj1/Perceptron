# Embed Folder Guide (Easy Explanation)

This guide explains every file currently inside `apps/embed` (except `node_modules`).

## Quick summary

The `embed` app is a small Vite-based package that builds a JavaScript widget bundle.

Current files:

- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `vite-env.d.ts`
- `eslint.config.js`

---

## 1) `package.json`

### What this file means

`package.json` is the identity card + control panel of this folder.

It tells tools:

- the package name (`embed`)
- whether the package is private (`"private": true`)
- how to run it (`scripts`)
- what tools it needs (`devDependencies`)

### Important fields in your file

- `"name": "embed"`  
  The package name in this monorepo.

- `"type": "module"`  
  Uses modern ES module syntax (`import`/`export`) by default.

- `"scripts"`  
  - `dev`: `vite --port 3009` → starts local dev server on port 3009
  - `build`: `vite build` → creates production bundle

- `"devDependencies"`  
  Includes local development tools:
  - `vite`
  - `typescript`
  - `eslint`
  - workspace shared configs (`@workspace/eslint-config`, `@workspace/typescript-config`)
  - Node types (`@types/node`)

### Is it required?

**Yes, required.**  
Without it, package manager commands (`pnpm`) and scripts (`dev`, `build`) will not work correctly.

---

## 2) `tsconfig.json`

### What this file means

This is the TypeScript rulebook for this folder.

It controls:

- language target (which JS version to type-check for)
- module system expectations
- what files TypeScript should include
- whether TypeScript should emit JS files

### Important parts in your file

- `"extends": "@workspace/typescript-config/base.json"`  
  Reuses shared TypeScript settings from your monorepo.

- `"compilerOptions"`  
  - `lib`: includes browser APIs (`DOM`) and modern JS APIs (`ES2020`)
  - `module`: `ESNext`
  - `target`: `ES2020`
  - `moduleResolution`: `bundler` (best fit for Vite-like bundlers)
  - `noEmit`: `true` (TypeScript only checks types, does not generate JS)

- `"include"`  
  Tells TypeScript what to scan, including:
  - `embed.ts`
  - `vite.config.ts`
  - `vite-env.d.ts`
  - all `.ts` files in this folder tree

### Is it required?

**Required for type-checking and editor IntelliSense quality.**  
Vite can still bundle code, but TypeScript support and consistency become weak without this file.

---

## 3) `vite.config.ts`

### What this file means

This file is the Vite configuration. It defines **how your app runs in dev** and **how it builds output**.

### Important parts in your file

- `build.lib.entry = resolve(__dirname, "embed.ts")`  
  Build entrypoint is expected to be `embed.ts`.

- `build.lib.name = "PerceptronWidget"`  
  Global variable name for IIFE output.

- `build.lib.fileName = "widget"`  
  Output file base name becomes like `widget.js`.

- `build.lib.formats = ["iife"]`  
  Produces IIFE bundle (good for script-tag embedding).

- `rollupOptions.output.extend = true`  
  Helps extend existing global object instead of replacing it in some cases.

- `server.port = 3009`  
  Dev server runs on port `3009`.

- `server.open = "/demo.html"`  
  Browser auto-opens `/demo.html` on startup.

### Is it required?

**Yes, practically required for your current behavior.**  
Without this file, Vite uses defaults, and you lose your custom widget build settings.

---

## 4) `vite-env.d.ts`

### What this file means

This is a TypeScript declaration file for Vite environment variables.

It tells TypeScript:

- Vite client types are available
- `import.meta.env` has a custom key: `VITE_WIDGET_URL` (string)

### Important parts in your file

- `/// <reference types="vite/client" />`  
  Enables Vite’s built-in typing support.

- `interface ImportMetaEnv` with `VITE_WIDGET_URL`  
  Gives type safety when reading `import.meta.env.VITE_WIDGET_URL`.

### Is it required?

**Required for clean TypeScript env-variable typing.**  
Runtime may still work without it, but TS errors/warnings are likely when using `import.meta.env` keys.

---

## 5) `eslint.config.js`

### What this file means

This is the linting configuration file.

It imports your shared base ESLint rules and exports them for this package.

### Important parts in your file

- `import baseConfig from "@workspace/eslint-config/base.js"`
- `export default [...baseConfig]`

This means: "Use the common rules from the monorepo here too."

### Is it required?

**Required only for linting workflows.**  
If you run ESLint (locally or in CI), this file is important. Build/dev may still run without it.

---

## How these files work together

- `package.json` starts commands.
- `vite.config.ts` defines how dev/build behaves.
- `tsconfig.json` defines TypeScript rules.
- `vite-env.d.ts` improves env variable typing.
- `eslint.config.js` enforces code quality rules.

In simple terms:

- **Vite files** control running/building.
- **TypeScript files** control type safety.
- **ESLint file** controls code style/quality.
- **package.json** ties everything together.

---

## Important current mismatch to know

From your current setup:

- Vite expects `embed.ts` as entry (`vite.config.ts`)
- Dev server tries to open `/demo.html`

But those files are currently not present in `apps/embed`.

So you may see:

- build failure (missing entry file)
- or opened page not found in dev

---

## Practical checklist (for this folder)

If you want this embed package to run smoothly, ensure you have:

- `embed.ts` (entry file)
- `demo.html` (if you want auto-open demo page)
- optional `.env` with `VITE_WIDGET_URL` when needed

---

## One-line memory trick

- `package.json` = commands + dependencies
- `vite.config.ts` = build/dev behavior
- `tsconfig.json` = TypeScript brain
- `vite-env.d.ts` = env variable typing
- `eslint.config.js` = code quality rules

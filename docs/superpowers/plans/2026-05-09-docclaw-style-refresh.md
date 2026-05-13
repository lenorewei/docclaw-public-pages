# docClaw Style Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the existing public pages with the selected B direction: warm technical notes styling, stronger long-form readability, and one shared detail-page template.

**Architecture:** Keep the Astro content collections unchanged. Add one shared detail layout, one shared stylesheet, and update the existing page files to use them. Do not add search, subscription, sharing, table of contents, filters, or new content flows.

**Tech Stack:** Astro 6, Markdown content collections, static CSS, Cloudflare Pages build via `npm run build`.

---

### Task 1: Preserve Style Reference

**Files:**
- Create: `docs/style-reference/DESIGN.md`

- [x] **Step 1: Copy the provided reference**

Copy `/Users/lenore/Downloads/DESIGN.md` to `docs/style-reference/DESIGN.md`.

- [x] **Step 2: Verify the copied file exists**

Run: `test -f docs/style-reference/DESIGN.md`

Expected: exit code `0`.

### Task 2: Add Shared Styles

**Files:**
- Create: `src/styles/site.css`

- [x] **Step 1: Define global tokens and base styling**

Add warm paper surfaces, deep ink text, muted secondary text, fine borders, compact spacing, and small radii.

- [x] **Step 2: Add homepage classes**

Add classes for the top navigation, hero, featured article panel, post list rows, tags, and mobile layout.

- [x] **Step 3: Add detail-page classes**

Add classes for the shared article shell, title block, meta rail, tag list, Markdown content, code, lists, blockquotes, and mobile layout.

### Task 3: Create One Detail Template

**Files:**
- Create: `src/layouts/DetailLayout.astro`

- [x] **Step 1: Accept page props**

The layout receives `post`, `sectionLabel`, `sectionTitle`, and `backLabel`.

- [x] **Step 2: Render the shared structure**

The layout renders the document head, top navigation, article header, metadata, tags, description, and a slot for Markdown content.

- [x] **Step 3: Import shared styles**

Import `../styles/site.css` so all detail pages share the same CSS.

### Task 4: Update Existing Pages

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/ai-digest/[slug].astro`
- Modify: `src/pages/daily/[slug].astro`
- Modify: `src/pages/readwise/[slug].astro`

- [x] **Step 1: Update homepage**

Keep the existing AI Digest list behavior. Restyle it with the selected B direction and keep the latest item as the visual lead.

- [x] **Step 2: Update AI Digest detail route**

Use `DetailLayout.astro` and keep the existing collection path and content rendering.

- [x] **Step 3: Update Daily detail route**

Use `DetailLayout.astro` and keep Daily-specific labels only.

- [x] **Step 4: Update Readwise detail route**

Use `DetailLayout.astro` and keep Readwise-specific labels only.

### Task 5: Verify

**Files:**
- No file changes.

- [x] **Step 1: Build**

Run: `npm run build`

Expected: Astro completes successfully and writes `dist/`.

- [x] **Step 2: Browser check**

Run the local dev server, open the homepage and representative detail pages, and check desktop/mobile responsiveness.

- [x] **Step 3: Final status**

Confirm changed files and mention any verification that could not be completed.

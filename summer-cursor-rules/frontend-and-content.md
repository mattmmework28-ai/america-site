# Rules relevant to this project (summer / sprint-celebration)

Use these when editing this React + Vite app, especially `src/data/index.ts`, `public/`, and UI components.

## Execution and environment

- Treat this as a **real** workspace: **run commands** (install, dev server, builds) yourself when needed; do not only suggest commands unless the user must perform an action locally (e.g. secrets).
- On failures, **try alternatives** or narrow diagnostics instead of stopping after one error.

## Scope and code quality

- **Only change what the task requires.** No drive-by refactors, unrelated files, or scope creep. Prefer a small, clear diff.
- **Read surrounding code first** and match naming, types, imports, and documentation level.
- **Reuse existing patterns** (e.g. `serviceItems` sections, `VenueCard` data shape) instead of inventing parallel structures.
- Avoid unnecessary comments, obvious docstrings, extra variables, or defensive try/catch unless justified.
- For UI work, keep **spacing, typography, and layout** consistent with existing components.

## Data and static assets

- Image URLs under **`public/`** are served from the **site root** (e.g. `public/service-photo/Foo/1.png` → `/service-photo/Foo/1.png`).
- Paths in **`src/data/index.ts`** must match **real filenames and extensions** (`.png` vs `.jpg`). If files are missing, the UI will 404—verify the folder exists under `public/`.
- When adding sections, mirror existing **`section`** objects: `logo` or `logo_text`, `description`, `images[]`, `buttonText`, `buttonLink`.

## Communication (when using an AI in Cursor)

- Use **code citations** for existing code: opening fence on its own line, format ` ```startLine:endLine:filepath ` with optional `...` for skipped lines.
- Inside citations and inline code, show **literal** characters (no HTML entities for `<`, `&`, etc.).
- Prefer **full URLs and paths** when linking.
- Write in **clear, complete sentences**; keep length proportional to task complexity.
- Reason from **conversation history** and stated goals, not only the last message.

## Optional: frontend verification

- For behavior or layout checks, a **local dev server** plus in-editor browser tools (when available) is appropriate; follow any project-specific browser/MCP instructions Cursor provides for that session.

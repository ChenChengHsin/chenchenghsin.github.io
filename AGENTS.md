# AGENTS.md

# Project Instructions for Codex

This repository is my personal website built with Astro.

Before making changes, always read:

1. `AGENTS.md`
2. `WEBSITE_SPEC.md`
3. `package.json`
4. `astro.config.*`
5. Relevant existing files under `src/`

`WEBSITE_SPEC.md` defines the desired website structure, features, content organization, and design requirements.

This file defines how you should work on the project.

---

# 1. Core Principle

The existing Astro template is the foundation of this project.

The highest-priority rule is:

> Preserve the original template whenever possible.

Do NOT treat this as a blank project.

Do NOT redesign the website unless explicitly asked.

Prefer modifying and extending existing components over replacing them.

Before creating something new, always check whether the template already provides a similar:

- Component
- Layout
- Page
- Content system
- Markdown system
- Style
- Navigation system
- Utility
- Theme feature

Reuse existing implementations whenever reasonable.

---

# 2. Read WEBSITE_SPEC.md First

Before implementing any user-facing feature, read `WEBSITE_SPEC.md`.

If a request conflicts with `WEBSITE_SPEC.md`, ask for clarification before making a large or destructive change.

Treat `WEBSITE_SPEC.md` as the main product specification.

Do not silently ignore its requirements.

---

# 3. Preserve the Existing Visual Design

Do not significantly alter the existing visual identity unless explicitly requested.

Preserve whenever possible:

- Typography
- Color palette
- Background images
- Background switching system
- Light/dark mode
- Transparency and glass effects
- Header style
- Navigation style
- Existing animations
- Spacing system
- Border radius
- Shadows
- Responsive behavior

When adding a new feature, make it look like it belongs to the existing template.

Avoid introducing a second visual design system.

Do not make unrelated visual changes while implementing another feature.

---

# 4. Language Rules

The website uses:

- Traditional Chinese
- English

Never introduce Simplified Chinese into user-facing website content.

When writing Chinese UI text, always use Traditional Chinese.

Examples:

Correct:

- 主頁面
- 修課心得
- 活動與團體
- 隨筆
- 關於我
- 文章
- 照片

Incorrect:

- 主页
- 课程心得
- 活动与团体
- 随笔
- 关于我
- 文章
- 照片

Do not automatically translate the user's own articles unless explicitly requested.

---

# 5. Technology

Primary technology:

- Astro

Prefer:

- Astro components
- HTML
- CSS
- TypeScript when appropriate
- Standard Markdown
- Astro Content Collections if appropriate and compatible with the existing project

Avoid adding:

- React
- Vue
- Svelte
- Large UI frameworks
- Large JavaScript libraries
- Databases
- Backend services
- CMS systems

unless they are genuinely necessary and explicitly justified.

If a feature can be implemented cleanly with Astro, HTML, and CSS, prefer that solution.

---

# 6. Dependencies

Avoid adding unnecessary npm dependencies.

Before installing a new dependency:

1. Check whether the project already has a suitable dependency.
2. Check whether Astro or standard browser functionality can solve the problem.
3. Prefer the simpler solution.

Do not add a package only to solve a very small styling or utility problem.

If a new dependency is genuinely necessary, explain why before adding it when the change is significant.

---

# 7. Existing Project Structure

Respect the existing project structure.

Do not reorganize directories without a strong reason.

Do not rename many files merely for stylistic preference.

Do not perform large refactors unless explicitly requested.

Prefer small, targeted modifications.

If the existing template has its own conventions, follow them.

For example, if the template already has an established place for:

- Components
- Layouts
- Blog posts
- Images
- Configuration
- Navigation data

continue using those locations unless there is a clear technical reason not to.

---

# 8. Article System

The website will contain three article categories:

- 修課心得 / Courses
- 活動與團體 / Activities & Groups
- 隨筆 / Musings

The user normally writes articles in HackMD and wants publishing to remain simple.

Before changing the content architecture:

1. Inspect the template's existing article/blog implementation.
2. Determine whether it already uses Markdown or Astro Content Collections.
3. Reuse that system if practical.

Do not build a second independent article system when the existing system can be adapted.

The desired workflow is approximately:

HackMD
→ Markdown
→ place the file in the appropriate project folder
→ website automatically discovers the article

The user should NOT need to manually create an `.astro` page for every article.

Keep article metadata simple.

Avoid requiring unnecessary frontmatter fields.

---

# 9. Markdown and HackMD

Prefer standard Markdown (`.md`) for articles.

Do not use MDX unless there is a clear reason.

Support standard Markdown features whenever possible:

- Headings
- Paragraphs
- Bold
- Italic
- Links
- Images
- Lists
- Blockquotes
- Inline code
- Code blocks
- Tables
- Horizontal rules

Do not install large packages solely to reproduce uncommon HackMD-specific syntax.

If a HackMD-specific feature is incompatible, document the limitation clearly.

---

# 10. Navigation

The main navigation structure is defined in `WEBSITE_SPEC.md`.

Do not redesign the header when modifying navigation items.

Preserve existing utility controls such as:

- Theme switcher
- Background/image switcher
- Existing functional header controls

Changing navigation labels should not unintentionally remove unrelated header functionality.

If a new navigation page is needed, first determine whether an existing page can be adapted.

---

# 11. Home Page and Profile Photo

The Home page should follow `WEBSITE_SPEC.md`.

When implementing the profile photo:

- Integrate it with the existing design.
- Prefer CSS Grid or Flexbox.
- Avoid absolute positioning for primary layout.
- Keep the layout responsive.
- Do not cover existing text.
- Preserve appropriate whitespace.
- Make replacing the profile image simple.

Do not use a random online stock photo.

If no real image is available, use a neutral placeholder or clearly documented temporary asset.

---

# 12. Responsive Design

Every user-facing modification must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Do not optimize only for the developer's current screen size.

Prefer responsive layout techniques such as:

- CSS Grid
- Flexbox
- Relative sizing
- Existing responsive styles in the template

Avoid fixed coordinates for major page layout.

Avoid unnecessary absolute positioning.

Do not introduce horizontal scrolling on mobile unless intentionally required by the content.

---

# 13. Accessibility

Preserve or improve existing accessibility.

Use:

- Semantic HTML
- Proper heading hierarchy
- Descriptive `alt` text
- Keyboard-accessible links and controls
- Appropriate buttons for actions
- Appropriate links for navigation

Do not remove accessibility attributes from existing components without reason.

---

# 14. Code Quality

Code should remain understandable for someone who is still learning Astro.

Prefer clear and straightforward implementations over clever abstractions.

Guidelines:

- Keep components focused.
- Avoid unnecessary abstraction.
- Avoid duplicated logic when simple reuse is possible.
- Use meaningful variable and component names.
- Follow existing formatting conventions.
- Do not add excessive comments.
- Add comments where behavior would otherwise be difficult to understand.

Do not rewrite working code solely because you prefer another coding style.

---

# 15. Scope Control

Only modify files related to the requested task.

Do not make unrelated improvements without being asked.

For example, if the task is:

> Add a profile photo to the Home page.

Do not also:

- Rewrite the navigation.
- Change article routing.
- Replace global CSS.
- Rename unrelated components.
- Change dependencies.

Keep changes focused.

---

# 16. Before Making Large Changes

For a large or structural request, inspect the project first.

Before implementation, identify:

- Relevant existing components
- Relevant layouts
- Relevant routes
- Existing styles
- Existing content architecture
- Files that need modification

If the requested change could substantially alter the project architecture or appearance, explain the proposed approach before implementing it.

Do not perform destructive rewrites without explicit approval.

---

# 17. Incremental Development

Prefer small implementation phases.

For example:

1. Navigation
2. Home page
3. Article categories
4. Markdown workflow
5. Styling adjustments
6. Validation

Do not attempt to rebuild the entire website in one large change unless explicitly requested.

When the user asks to implement only one phase, do not continue into later phases.

---

# 18. Validation

After making meaningful code changes, verify that the project still works.

Use the project's existing scripts from `package.json`.

Typically this may include:

```bash
npm run build
```

If appropriate:

```bash
npm run dev
```

or other existing validation scripts.

Do not assume command names if `package.json` defines something different.

Always inspect `package.json` first.

If the build fails because of your changes:

1. Investigate the error.
2. Fix the problem.
3. Run the validation again.

Do not finish a task while leaving known build errors caused by your changes.

---

# 19. Do Not Hide Errors

Do not suppress TypeScript, Astro, ESLint, or build errors merely to make validation pass.

Avoid solutions such as:

- Disabling checks globally
- Removing useful validation
- Adding broad ignore directives
- Using unsafe type assertions unnecessarily

Fix the underlying issue whenever practical.

---

# 20. File Safety

Do not delete existing files unless they are clearly obsolete as part of the requested change.

Before deleting an existing component or page:

1. Check whether it is referenced elsewhere.
2. Check whether its functionality is still needed.
3. Prefer leaving it untouched if deletion is unnecessary.

Do not overwrite personal content without explicit reason.

Do not delete existing images, articles, or assets merely because they appear unused without first verifying their purpose.

---

# 21. Git Safety

Assume the project may be tracked with Git.

Do not:

- Rewrite Git history
- Force push
- Delete branches
- Run destructive Git commands
- Automatically commit changes

unless explicitly requested.

Never run destructive commands such as:

```bash
git reset --hard
git clean -fd
```

without explicit user approval.

It is acceptable to inspect changes using commands such as:

```bash
git status
git diff
```

Use Git history as a safety mechanism, not something to modify unnecessarily.

---

# 22. Do Not Change Secrets or Credentials

Never add credentials, passwords, API keys, personal tokens, or secrets directly into source files.

Do not modify `.env` files unless the task explicitly requires it.

Never commit secrets.

If configuration requires a secret, use an environment variable and explain where it should be provided.

---

# 23. Documentation

When adding functionality that the user will maintain manually, keep maintenance simple.

For this project, especially document:

- How to replace the profile photo
- How to create a new Course article
- How to create a new Activities & Groups article
- How to create a new Musings article
- Where article images should be placed
- Which frontmatter fields are required
- How to preview the website locally

Prefer concise beginner-friendly instructions.

Do not require the user to understand internal Astro implementation details for routine content updates.

---

# 24. Completion Report

After completing a task, briefly report:

1. What was changed
2. Which important files were modified
3. Whether validation/build succeeded
4. Any remaining issue or manual action required

For example:

- Updated navigation configuration.
- Added `/courses` route.
- Reused the existing post card component.
- Modified `src/...`.
- `npm run build` passes.
- No new dependencies added.

Do not provide an unnecessarily long report for small changes.

---

# 25. When Unsure

If there are multiple possible implementations:

Prefer the implementation that:

1. Changes less existing code.
2. Reuses more of the original template.
3. Adds fewer dependencies.
4. Is easier for the user to understand.
5. Is easier to maintain.
6. Preserves the existing design.
7. Works well responsively.

If a choice could significantly affect the visual design, content structure, or long-term maintainability, ask before making that decision.

---

# 26. Priority Order

When requirements conflict, use this priority order:

1. The user's current explicit instruction
2. `WEBSITE_SPEC.md`
3. `AGENTS.md`
4. Existing project conventions
5. General implementation preferences

The central philosophy of this project is:

> Make the smallest clean change necessary while preserving the original Astro template.

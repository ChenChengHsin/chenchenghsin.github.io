# Personal Website Specification

## 1. Project Goal

This project is a personal website built with Astro.

The existing Astro template should remain the foundation of the website.

The main goal is NOT to redesign the template, but to adapt its existing structure, components, typography, colors, spacing, background system, animations, and overall visual style for my personal content.

Whenever possible:

- Reuse existing components.
- Reuse existing layouts.
- Reuse existing CSS and design tokens.
- Reuse the existing article/blog system if one already exists.
- Modify existing functionality instead of rebuilding it from scratch.
- Avoid unnecessary dependencies.
- Avoid React or other frontend frameworks unless absolutely necessary.
- Do not redesign parts of the website that are unrelated to the requested changes.

The final website should still clearly feel like the original Astro template.

---

# 2. Language

The website should use:

- Traditional Chinese (繁體中文)
- English

Simplified Chinese must NOT appear anywhere on the website.

This includes:

- Navigation
- Buttons
- Page titles
- Descriptions
- Placeholder text
- Metadata
- Error messages that we control
- Example content

When Chinese text is needed, always use Traditional Chinese.

The website does not currently need a complicated internationalization system unless the existing template already provides one.

It is acceptable for Traditional Chinese and English to appear together naturally.

For example:

- 主頁面 / Home
- 修課心得 / Courses
- 活動與團體 / Activities & Groups
- 隨筆 / Essays

Do not automatically translate my own articles unless explicitly requested.

---

# 3. Preserve the Existing Design

Preserving the original Astro template is a high priority.

Do not significantly change:

- Overall page structure
- Typography
- Header height
- Background image system
- Color palette
- Transparency / glass effects
- Existing animations
- Light/dark mode behavior
- Existing background/image switcher
- General spacing and visual rhythm

If a new feature needs to be added, integrate it into the existing design rather than creating a visually separate design system.

The goal is:

> Extend the existing template, not replace it.

---

# 4. Main Navigation

The top navigation bar should contain exactly four main content sections:

1. 主頁面 / Home
2. 修課心得 / Courses
3. 活動與團體 / Activities & Groups
4. 隨筆 / Essays

Use these four items as the main information architecture of the website.

Remove unnecessary navigation items from the original template if they are no longer relevant.

However, preserve existing utility controls such as:

- Light/dark theme switcher
- Background/image switcher
- Other existing visual preference controls

Do not redesign the navigation bar.

Only adjust the navigation items, links, and spacing if necessary.

The navigation bar must continue to work properly on desktop and mobile devices.

---

# 5. Home Page

The Home page is the main personal introduction page.

It should contain the following sections.

## 5.1 Personal Introduction

Provide an area for:

- My name
- A short personal introduction
- My current academic background
- My interests
- Optional links such as GitHub or email

Keep the amount of text visually balanced with the original template.

## 5.2 Profile Photo

The Home page should include a dedicated place for my profile photo.

The profile photo should integrate naturally with the existing template.

For desktop:

- Keep the personal introduction primarily on the left.
- Place the profile photo on the right when appropriate.
- Use CSS Grid or Flexbox instead of absolute positioning.
- Preserve generous whitespace.
- Do not allow the photo to cover text.
- Use a circular or softly rounded portrait crop.
- Use `object-fit: cover`.
- A subtle shadow is acceptable.
- Avoid strong borders or visually heavy effects.
- Suggested maximum size: approximately 280–350px.

For mobile:

- Switch to a single-column layout.
- Place the profile photo and introduction vertically.
- Keep comfortable spacing.
- Do not force the desktop two-column layout onto small screens.

The image implementation should make replacing the photo easy.

Prefer a clearly documented file location such as:

`src/assets/profile.jpg`

or another location that better matches the existing project structure.

Do not use random stock photos.

If no real profile image exists yet, use a neutral placeholder that can easily be replaced later.

## 5.3 Education and Experience

The Home page should include an education and experience section.

Possible information includes:

- University / school
- Department or program
- Academic experience
- Projects
- Relevant experiences
- Organizations
- Other important milestones

The section should reuse the visual language of the original template.

Avoid adding complicated timeline libraries unless the existing template already contains something similar.

A simple, elegant layout is preferred.

---

# 6. Course Reviews

Route suggestion:

`/courses`

Traditional Chinese title:

`修課心得`

English title:

`Courses`

This section contains articles about courses I have taken.

Example topics may include:

- Course introduction
- Instructor
- Course structure
- Assignments
- Exams
- Workload
- Personal experience
- Suggestions for future students

The page should display a list of course-related articles using the existing blog/article card style if available.

Each article should have its own page.

Example routes:

`/courses/data-structures`

`/courses/computer-networks`

Do not create an unnecessarily complex database or CMS.

---

# 7. Activities & Groups

Route suggestion:

`/activities`

Traditional Chinese title:

`活動與團體`

English title:

`Activities & Groups`

This section contains articles about:

- Clubs
- Student organizations
- Activities
- Events
- Competitions
- Camps
- Volunteer experiences
- Group projects
- Other extracurricular experiences

The section should reuse the same article system as Course Reviews whenever possible.

Each article should have its own page.

Example:

`/activities/example-activity`

---

# 8. Essays

Route suggestion:

`/essays`

Traditional Chinese title:

`隨筆`

English title:

`Essays`

This section is for more general writing.

Possible topics include:

- Personal thoughts
- Experiences
- Technology
- Learning
- Travel
- Photography
- Daily life
- Reflections

The layout should remain simple and reading-focused.

Each essay should have its own page.

Example:

`/essays/example-essay`

---

# 9. Article Publishing Workflow

A very important requirement is that publishing new articles must be simple.

I normally write articles in HackMD.

The expected workflow should be approximately:

HackMD  
→ Export or copy Markdown  
→ Add the Markdown file to the Astro project  
→ Add basic metadata  
→ Website automatically displays the article

I should NOT need to manually create a new Astro page for every article.

Prefer Markdown (`.md`) for articles.

Use MDX only if it is genuinely necessary.

## 9.1 Reuse Existing Article System First

Before creating a new content system, inspect the existing Astro template.

If the template already has:

- Blog posts
- Markdown content
- Astro Content Collections
- Article layouts
- Tag systems
- Post metadata

reuse and adapt those systems.

Do NOT create a second parallel article system unnecessarily.

## 9.2 Content Structure

If the existing template does not already provide an appropriate structure, use an Astro content structure similar to:

```text
src/content/
├── courses/
├── activities/
└── essays/
```

Example files:

```text
src/content/courses/data-structures.md
src/content/activities/example-club.md
src/content/essays/my-first-essay.md
```

## 9.3 Article Frontmatter

Keep article metadata simple.

A typical Markdown file should look similar to:

```md
---
title: "資料結構修課心得"
description: "我在資料結構這門課的修課心得與一些建議。"
pubDate: 2026-09-03
language: "zh-TW"
---

# 資料結構修課心得

Article content starts here.
```

Only require metadata that is actually useful.

Recommended fields:

- `title`
- `description`
- `pubDate`

Optional fields may include:

- `updatedDate`
- `tags`
- `language`
- `cover`

Do not require many complicated fields for every article.

---

# 10. HackMD Compatibility

Articles copied or exported from HackMD should require as little editing as possible.

Support standard Markdown features commonly used in HackMD, including:

- Headings
- Paragraphs
- Bold
- Italic
- Links
- Images
- Ordered lists
- Unordered lists
- Blockquotes
- Inline code
- Code blocks
- Tables
- Horizontal rules

If some HackMD-specific syntax is not directly compatible with Astro Markdown, document the limitation instead of introducing a large dependency solely to support it.

The normal workflow should remain easy enough that I can publish an article without needing to understand Astro internals.

---

# 11. Article Images

Provide a simple and predictable way to add article images.

Prefer a structure such as:

```text
public/images/articles/
```

or reuse the image system already used by the template.

For example:

```text
public/images/articles/data-structures/classroom.jpg
```

Markdown should then be able to reference the image easily.

Do not create complicated image-management infrastructure unless necessary.

---

# 12. Article Listing Pages

The following pages should automatically discover their corresponding Markdown articles:

- `/courses`
- `/activities`
- `/essays`

When I add a new Markdown article, I should not need to manually edit the listing page.

The listing pages should automatically generate article entries from the content collection.

Each article preview should preferably show:

- Title
- Publication date
- Short description

Optional:

- Tags
- Cover image

Reuse the original template's article preview/card design whenever possible.

---

# 13. Article Page Design

Individual article pages should prioritize readability.

Preserve the original template's typography and styling.

Article pages should support:

- Clear title
- Publication date
- Article body
- Images
- Code blocks
- Tables
- Links
- Headings

If the original template already provides:

- Table of contents
- Reading time
- Previous/next article navigation
- Tags
- Back-to-list navigation

keep those features if they are already working.

Do not add unnecessary article features solely for visual complexity.

---

# 14. Responsive Design

All modifications must remain responsive.

The website should work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Do not solve desktop layout problems using fixed coordinates.

Prefer:

- CSS Grid
- Flexbox
- Existing responsive utilities from the template

Avoid unnecessary fixed widths and absolute positioning.

---

# 15. Accessibility

Preserve or improve the accessibility of the existing template.

Requirements include:

- Semantic HTML
- Meaningful image `alt` text
- Keyboard-accessible navigation
- Sufficient text contrast
- Proper heading hierarchy
- Links and buttons that remain identifiable

Do not sacrifice accessibility for decorative effects.

---

# 16. Performance

Keep the website lightweight.

Avoid adding large JavaScript libraries when simple Astro, HTML, or CSS can accomplish the same result.

Prefer Astro's static rendering whenever possible.

Images should be reasonably optimized.

Do not add a database, backend, authentication system, or CMS unless explicitly requested later.

---

# 17. Code Quality

Keep the code understandable and maintainable.

Important rules:

- Prefer existing project patterns.
- Keep components reasonably small.
- Do not duplicate components unnecessarily.
- Do not rewrite unrelated files.
- Avoid unnecessary dependencies.
- Do not replace working functionality without a reason.
- Keep configuration simple.
- Clearly document where I should add articles and images.

---

# 18. Implementation Strategy

Before making major modifications:

1. Inspect the existing Astro project.
2. Identify the existing navigation system.
3. Identify the existing blog/article architecture.
4. Identify reusable layouts and components.
5. Identify the existing responsive behavior.
6. Identify the theme and background controls.
7. Explain which files need to change.

Prefer incremental modifications.

## Phase 1 — Structure

- Update navigation.
- Remove Simplified Chinese text.
- Establish the four main sections.
- Preserve existing utility controls.

## Phase 2 — Home Page

- Adapt the existing About/Home content.
- Add personal introduction.
- Add profile photo support.
- Add education and experience section.

## Phase 3 — Article System

- Reuse or adapt the existing Markdown article system.
- Create Course Reviews.
- Create Activities & Groups.
- Create Essays.
- Make article listing automatic.

## Phase 4 — Content Workflow

- Ensure HackMD Markdown can be added easily.
- Create example Markdown files.
- Document how to publish a new article.
- Document how to add article images.

## Phase 5 — Validation

- Test desktop layout.
- Test mobile layout.
- Run the Astro build.
- Fix build errors.
- Verify that existing template features still work.

---

# 19. Documentation for Me

After implementation, create a short and beginner-friendly documentation section explaining:

## How to add a new article

For example:

1. Write the article in HackMD.
2. Export or copy it as Markdown.
3. Put it in the correct folder.
4. Add the required frontmatter.
5. Add images if necessary.
6. Run the development server.
7. Verify the article appears automatically.

Also explain:

- Where to replace my profile photo.
- Where navigation items are configured.
- Where Course Review articles are stored.
- Where Activities & Groups articles are stored.
- Where Essays are stored.
- Where article images are stored.

I should be able to maintain the website without needing Codex for every new article.

---

# 20. Important Constraints

The following requirements have high priority:

1. Preserve the original Astro template's visual identity.
2. Do not introduce Simplified Chinese.
3. Keep the website bilingual with Traditional Chinese and English.
4. Keep the main navigation limited to the four requested sections.
5. Make publishing Markdown articles from HackMD easy.
6. Do not require manually creating Astro pages for individual articles.
7. Reuse the template's existing article system whenever possible.
8. Keep existing theme/background controls functional.
9. Keep the implementation simple and maintainable.
10. Do not make unrelated design changes without asking first.
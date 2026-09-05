# Personal Website Specification

## 0. Website Identity

The canonical website name / brand name is:

`Zn`

Use `Zn` consistently for the visible site brand and global site title.

Do not rename the repository, project directory, routes, or canonical URL
solely because the site brand is `Zn`.

## 1. Project Goal

This project is my personal website built with Astro.

The website should serve two main purposes:

1. Introduce who I am.
2. Provide a long-term place for publishing my learning records,
   activities, and personal writing.

The website should contain four main sections:

- 主頁面
- 修課心得
- 活動與團體
- 隨筆

The project is based on an existing Astro template.

Preserving the original template's visual atmosphere is very important.


---

## 2. Overall Design Direction

The website should feel:

- Minimal
- Calm
- Personal
- Clean
- Lightweight
- Content-focused
- Easy to read

Preserve the existing visual language of the current template.

In particular, preserve:

- The existing sky / wallpaper background system
- The translucent navigation bar
- The existing typography style
- The existing theme switching control
- The existing wallpaper switching control
- Generous whitespace
- The soft and understated visual aesthetic

Do NOT redesign the website into a generic portfolio,
dashboard, SaaS landing page, or résumé template.

Avoid:

- Large opaque cards
- Excessive borders
- Heavy shadows
- Large gradients
- Unnecessary animations
- Unnecessary JavaScript
- Large UI frameworks

The wallpaper should remain an important part of the visual experience.


---

## 3. Language

The primary user-facing language of the website is:

Traditional Chinese (`zh-TW`).

All primary navigation labels should use Chinese only.

Do NOT use bilingual navigation labels such as:

`修課心得 / Courses`

Instead use:

`修課心得`

All newly written Chinese interface text should use Traditional Chinese.

English may still appear naturally inside:

- Technical terminology
- Course names
- Programming languages
- Article content
- External links

but the main website interface should use Traditional Chinese.


---

## 4. Main Navigation

The final primary navigation should contain exactly four main sections,
in this order:

1. 主頁面 → `/`
2. 修課心得 → `/courses`
3. 活動與團體 → `/activities`
4. 隨筆 → `/essays`

There should NOT be a separate `About` navigation item.


### Navbar Appearance

Preserve the existing navbar design.

The navbar should remain:

- Translucent
- Minimal
- Integrated with the wallpaper
- Responsive

However, increase the navbar's vertical size.

The target navbar height should be approximately:

**1.5 times the current height**

This does not need to be mathematically exact.

The goal is to create slightly more breathing room above and below
the navigation text while preserving the existing visual style.

Increase vertical padding rather than radically redesigning the navbar.

The navigation text should remain vertically centered.


### Navbar Controls

Preserve the existing utility controls on the right side.

Do not remove or redesign:

- Theme / light-dark mode control
- Wallpaper / background control

Their existing behavior must continue to work.


### Responsive Navigation

The navigation must remain usable on:

- Desktop
- Tablet
- Mobile

Do not allow navigation text to overflow horizontally.

Reuse the existing responsive navbar behavior when possible.



### Navigation Spacing

On desktop, the four primary navigation items should have generous
horizontal spacing, approximately 1.5–2× the previous navigation gap.

Use layout spacing such as `gap` rather than inserting spaces into labels.


### Wallpaper Control

Users should NOT be able to manually select wallpapers.

Remove the manual wallpaper-selection control from the navbar.

The light/dark theme toggle must remain functional.

The website may continue using its default background/wallpaper behavior,
including theme-specific backgrounds if already supported.


---

## 5. Information Architecture

The website should ultimately contain these four primary sections:

```text
/
├── 主頁面
│
├── courses/
│   └── 修課心得文章
│
├── activities/
│   └── 活動與團體文章
│
└── essays/
    └── 隨筆文章
```

There should NOT be a separate About section in the final architecture.


---

## 6. Home Page

Route:

`/`

The Home page is also the complete personal introduction page.

Do NOT split the personal introduction between Home and About.

The visitor should be able to understand who I am directly from the Home page.


### Home Page Purpose

The Home page should introduce:

- Who I am
- My current academic background
- What I study
- My interests
- Relevant experience
- What kinds of content I publish on this website
- Relevant external links

Do not invent personal information.

Only use information explicitly provided by me.


---

## 7. Home Page Layout

Preserve the current sky background.

Reuse the successful visual layout previously implemented for the
About page.

The existing visual concept is preferred:

```text
Personal information        Profile portrait

      left                       right
```

Do NOT redesign this composition from scratch unless necessary.


### Desktop Layout

Use a two-column layout.

Left side:

- Small section label if appropriate
- Name
- Personal introduction
- Academic background
- Areas of study
- Interests
- Relevant experience
- External links

Right side:

- Profile portrait

Use:

- CSS Grid
or
- Flexbox

Do NOT rely on absolute positioning for the primary layout.

Make natural use of the existing whitespace.

Do not place the entire introduction inside a large opaque card.

The background image should remain visible and visually important.


### Home Content Length

The Home page may contain a reasonably complete personal introduction,
but should not feel like a long résumé.

Use clear spacing and small sections rather than one very large paragraph.

Possible content groups include:


#### 自我介紹

A concise introduction about who I am.


#### 學習背景

Current school, department, academic direction, or other relevant
academic information.


#### 興趣領域

Academic, technical, and personal interests.


#### 經歷

Relevant experiences when appropriate.


#### Links

For example:

- GitHub
- Email
- Other links explicitly provided by me


---

## 8. Profile Portrait

The canonical profile image should be:

`src/assets/profile.png`

The Home page should use this image.

Replacing this file should update the portrait without requiring
layout or CSS changes.


### Portrait Appearance

The portrait should be:

- Circular or softly rounded
- Cropped using `object-fit: cover`
- Approximately 280–320px on normal desktop screens
- Responsive
- Visually balanced with the text column

A subtle shadow is acceptable.

Avoid:

- Strong borders
- Large card containers
- Decorative frames
- Heavy effects

The portrait should visually blend with the existing sky background.


### Mobile Portrait

On smaller screens:

- Change the Home layout to one column
- Stack portrait and text naturally
- Center the portrait when appropriate
- Scale the portrait down responsively
- Avoid horizontal overflow
- Maintain comfortable spacing


---

## 9. About Page

There should NOT be a separate About page in the final website.

The Home page replaces the About page completely.

The existing `/about` route should eventually be retired.

When removing `/about`:

- Ensure navigation does not reference it
- Ensure internal links do not reference it
- Ensure no broken links remain
- Reuse useful code or styling from the old About page before deleting it

Do not maintain duplicate personal introductions on both `/` and `/about`.


---

## 10. Courses

Route:

`/courses`

Navigation label:

`修課心得`

This section is for content such as:

- Course notes
- Course reflections
- Learning records
- Technical notes
- Course projects
- Study summaries

The long-term goal is for articles to be stored as Markdown files.

The Courses index page should automatically list available articles.

Adding a new article should ideally NOT require manually editing
the Astro page.


---

## 11. Activities

Route:

`/activities`

Navigation label:

`活動與團體`

This section is for:

- Club activities
- Group experiences
- Events
- Extracurricular activities
- Team projects
- Personal activity records

The long-term goal is for these articles to use Markdown-based content.

The Activities index should automatically list available articles.


---

## 12. Essays

Route:

`/essays`

Navigation label:

`隨筆`

This section is for:

- Personal writing
- Reflections
- Thoughts
- Longer-form essays
- Life records

The long-term goal is for these articles to use Markdown-based content.

The Essays index should automatically list available articles.


---

## 13. Markdown Content Architecture

Use Astro Content Collections for article content.

Prefer extending the project's existing Astro Content Collections
architecture rather than building an unrelated publishing system.

The desired long-term structure may resemble:

```text
src/
└── content/
    ├── courses/
    │   ├── example-1.md
    │   └── example-2.md
    │
    ├── activities/
    │   ├── example-1.md
    │   └── example-2.md
    │
    └── essays/
        ├── example-1.md
        └── example-2.md
```

Exact paths may be adjusted to fit the existing Astro project architecture.


---

## 14. Markdown Article Format

Articles should be writable using normal Markdown.

For example:

```md
---
title: 演算法課程心得
date: 2026-09-03
description: 這學期演算法課程的學習紀錄。
---

# 課程介紹

內容……

## 第一部分

內容……

## 第二部分

內容……

### 補充說明

內容……
```

The publishing system should automatically render these Markdown files
as website articles.


---

## 15. Article Table of Contents

Every Markdown article should automatically generate a
Table of Contents based on Markdown headings.

The Table of Contents is an important reading feature.


### Heading Detection

Generate the Table of Contents from article headings.

At minimum support:

- `#` → H1
- `##` → H2
- `###` → H3

If technically appropriate, the article's main title from frontmatter
may remain separate from the Markdown heading hierarchy.

Avoid showing duplicate article titles in the Table of Contents.


### Desktop TOC Layout

On normal desktop screens, place the Table of Contents on the
right side of the article.

Preferred layout:

```text
Article content                  Table of Contents

# Heading                       文章目錄
text...                         ├─ 第一部分
                               │  ├─ 子標題
## Section                     │  └─ 子標題
text...                         ├─ 第二部分
                               └─ 第三部分
```

The article content should remain the primary focus.

The TOC should be visually lighter than the article.


### Sticky TOC

On desktop, the Table of Contents should preferably use:

`position: sticky`

so that it remains visible while the reader scrolls through a long article.

It should stop naturally within the article layout.

Do not use JavaScript scrolling logic if CSS sticky positioning is enough.


### TOC Links

Each TOC entry should link to the corresponding heading.

Clicking a TOC entry should scroll to that section of the article.

Heading IDs should be generated consistently.

Use normal anchor links whenever possible.


### Active Section

Highlighting the currently visible section is optional.

Do NOT introduce a complex JavaScript dependency only for active
heading highlighting.

Implement it only if it can remain lightweight.


---

## 16. TOC Responsive Behavior

The desktop right-side TOC should NOT be forced onto small screens.

On tablet or mobile screens, use one of these approaches:

Preferred:

- Collapse the TOC into a compact expandable section above the article

or, if simpler:

- Display the TOC above the article as a normal block

The mobile layout must:

- Avoid horizontal overflow
- Keep the article width comfortable
- Keep TOC links easy to tap
- Avoid permanently consuming a large portion of screen width


---

## 17. Article Reading Layout

Article pages should prioritize readability.

The primary article text column should not become excessively wide.

Use a comfortable reading width.

The article + TOC layout should be visually centered within the
available page width.

A conceptual desktop layout may be:

```text
          Article                  TOC
       ┌──────────────┐       ┌──────────┐
       │              │       │ 目錄     │
       │ Markdown     │       │          │
       │ content      │       │ Section  │
       │              │       │ Section  │
       │              │       │ Section  │
       └──────────────┘       └──────────┘
```

Do not allow the TOC to make the article column too narrow.


---

## 18. Article Typography

Markdown articles should support readable styling for:

- Headings
- Paragraphs
- Lists
- Links
- Blockquotes
- Inline code
- Code blocks
- Images
- Tables
- Horizontal rules

Reuse the project's existing typography system where possible.

Do not add a new UI framework solely for Markdown styling.


---

## 19. Article Images

Article-specific images should eventually have a predictable directory
structure.

For example:

```text
src/assets/articles/
```

or another structure appropriate for Astro.

The exact architecture should be determined after inspecting the
existing project.

Images should:

- Be responsive
- Preserve aspect ratio
- Avoid horizontal overflow
- Use Astro image optimization where practical


---

## 20. HackMD Workflow

A future goal is to make it convenient to write articles in HackMD
and then publish them on this Astro website.

Do NOT build a complex synchronization system unless explicitly requested.

A simple workflow is acceptable, for example:

```text
Write in HackMD
      ↓
Export / copy Markdown
      ↓
Place Markdown file in the appropriate content directory
      ↓
Astro automatically lists and renders the article
```

The content architecture should make this workflow easy.


---

## 21. Legacy Template Pages

The original template may contain legacy routes such as:

- `/blog`
- `/archive`
- `/talk`
- `/photo`
- `/about`

These routes are NOT automatically part of the final website.

Do not delete all legacy functionality blindly.

Before removing a legacy route:

1. Inspect whether other pages depend on it.
2. Reuse useful components or styles if appropriate.
3. Remove outdated navigation references.
4. Ensure no broken internal links remain.

The final primary website structure should focus on:

- `/`
- `/courses`
- `/activities`
- `/essays`


---

## 22. Responsive Design

The website must work well on:

- Large desktop monitors
- Laptops
- Tablets
- Mobile phones

Avoid layouts that only work at one fixed screen width.

Important responsive elements include:

- Navbar
- Home portrait layout
- Article layout
- Article Table of Contents
- Images
- Code blocks


---

## 23. Technical Requirements

Use the existing Astro architecture.

Prefer:

- Astro components
- Astro Content Collections
- Existing TypeScript
- Existing Tailwind CSS
- Semantic HTML
- CSS Grid
- Flexbox
- Native anchor navigation

Avoid:

- React unless genuinely necessary
- New UI frameworks
- Heavy client-side JavaScript
- Unnecessary dependencies
- Rewriting unrelated components

Before adding any npm package:

Explain why it is necessary first.


---

## 24. Development Rules

When implementing changes:

1. Read `AGENTS.md`.
2. Read `WEBSITE_SPEC.md`.
3. Inspect the existing implementation.
4. Preserve existing working functionality.
5. Make changes incrementally.
6. Reuse existing components where reasonable.
7. Do not redesign unrelated pages.
8. Do not install unnecessary packages.
9. Validate changed Astro components.
10. Run `npm run build` when possible.
11. Clearly report every changed or deleted file.

Do not assume a change works only because the source code looks correct.

The result should also be checked in the browser.


---

## 25. Build Environment Note

The local Windows environment has already successfully completed:

`npm run build`

using Node 24.

If the Codex execution environment encounters:

`source-map-js: require is not defined`

do NOT perform major dependency upgrades solely to fix that
Codex-environment-specific issue.

The project should continue to be validated in the local Windows
environment when necessary.


---

## 26. Content Accuracy

Do not invent personal information.

This includes:

- School
- Department
- Academic background
- Interests
- Experiences
- Biography
- Contact information
- External links

If information has not been provided:

- Keep a clear placeholder,
- omit that content temporarily,
- or ask me for the information.

Do not generate fictional biography content.


---

## 27. Current Implementation Priorities

Current development order:

1. Site identity and basic navigation — completed

2. Profile portrait layout — completed

3. Update navigation labels to Chinese only

4. Increase navbar vertical height to approximately 1.5×
   the current height

5. Move/adapt the complete personal introduction and portrait
   onto the Home page

6. Retire the separate About page

7. Complete the actual personal content on the Home page

8. Build the Markdown content architecture for:
   - 修課心得
   - 活動與團體
   - 隨筆

9. Build automatic article listing pages

10. Build shared Markdown article layout

11. Add automatic right-side Table of Contents generated from
    Markdown headings

12. Add responsive/mobile TOC behavior

13. Establish the HackMD publishing workflow

14. Retire unused legacy template routes

15. Final responsive cleanup

16. SEO and deployment cleanup
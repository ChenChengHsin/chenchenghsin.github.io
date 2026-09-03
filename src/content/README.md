# 新增文章

網站會自動讀取以下三個資料夾中的 Markdown 檔案：

- 修課心得：`src/content/courses/`
- 活動與團體：`src/content/activities/`
- 隨筆：`src/content/essays/`

新增文章時，只要在對應資料夾建立副檔名為 `.md` 的檔案。檔名會成為網址，例如 `courses/algorithm.md` 對應 `/courses/algorithm`。

## Frontmatter

每篇文章需要以下三個欄位：

~~~md
---
title: 演算法課程心得
date: 2026-09-03
description: 這是我的演算法課程學習紀錄。
---
~~~

可選欄位：

~~~md
updated: 2026-09-05
tags:
  - 演算法
  - 課程
draft: false
~~~

`draft: true` 的文章會在開發模式顯示，但不會出現在正式建置的列表或文章路由中。

Frontmatter 後方直接使用標準 Markdown 撰寫內容即可。文章內的本機圖片可以放在 Markdown 附近，並使用相對路徑引用。

完成後執行 `npm run dev` 預覽，並在發布前執行 `npm run build`。

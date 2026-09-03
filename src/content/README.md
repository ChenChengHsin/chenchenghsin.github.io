# 文章發布指南

這個網站會自動讀取 Markdown 文章。平常只要從 HackMD 匯出 `.md` 檔案、放進正確的分類資料夾、補齊 frontmatter，再於本機預覽即可；不需要另外建立 Astro 頁面。

## 最短發布流程

1. 在 HackMD 完成文章後，下載 Markdown 檔案。
2. 依文章分類，把檔案放進 `src/content/courses/`、`src/content/activities/` 或 `src/content/essays/`。
3. 可先複製 `src/content/article-template.md`，再貼入文章正文。
4. 使用簡短、穩定的英文檔名，例如 `algorithm-notes.md`。
5. 填寫檔案最上方的 frontmatter。
6. 下載文章使用的圖片，並依下方的圖片規則更新連結。
7. 執行 `npm run dev`，在瀏覽器檢查列表、文章、目錄、圖片及行動版排版。
8. 發布前執行 `npm run build`。

## 選擇文章分類

| 分類 | Markdown 資料夾 | 網址範例 |
| --- | --- | --- |
| 修課心得 | `src/content/courses/` | `/courses/algorithm-notes` |
| 活動與團體 | `src/content/activities/` | `/activities/community-service` |
| 隨筆 | `src/content/essays/` | `/essays/learning-in-public` |

檔名會成為網址的一部分。例如：

- `src/content/courses/algorithm-notes.md`
- 對應網址：`/courses/algorithm-notes`

建議檔名只使用小寫英文字母、數字與連字號（`-`），不要使用空格。發布後若更改檔名，文章網址也會改變，舊連結可能因此失效。

## 複製文章範本

通用範本位於 `src/content/article-template.md`。將它複製到其中一個分類資料夾，重新命名後即可開始撰寫。

也可以直接複製以下內容：

```md
---
title: 文章標題
date: 2026-09-04
description: 一段簡短的文章介紹。
# updated: 2026-09-04
# tags:
#   - 標籤
draft: false
---

# 第一部分

在這裡開始撰寫文章內容。

## 第二部分

使用清楚的標題層級整理內容。

### 小節

補充細節。
```

以 `#` 開頭的 frontmatter 行是註解。需要 `updated` 或 `tags` 時，刪除行首的 `#`；不需要時可保留註解或刪除整行。

## Frontmatter 欄位

| 欄位 | 是否必填 | 格式與用途 |
| --- | --- | --- |
| `title` | 是 | 列表、文章頁及瀏覽器標題使用的文章名稱。 |
| `date` | 是 | 發布日期，建議使用 `YYYY-MM-DD`。 |
| `description` | 是 | 簡短摘要，會顯示於文章列表及 SEO 描述。 |
| `updated` | 否 | 最後更新日期，建議使用 `YYYY-MM-DD`。 |
| `tags` | 否 | YAML 清單，每個標籤各佔一行。 |
| `draft` | 否 | `true` 表示草稿；省略時等同 `false`。 |

完整範例：

```md
---
title: 演算法課程心得
date: 2026-09-03
updated: 2026-09-05
description: 這是我的演算法課程學習紀錄。
tags:
  - 演算法
  - 課程
draft: false
---
```

`draft: true` 的文章會在開發模式顯示，但不會出現在正式建置的文章列表或文章路由中。日期不可留成空值；沒有更新日期時，請直接省略 `updated`。

## 標題與文章目錄

文章頁會自動將正文中的 H1、H2、H3 標題加入目錄：

```md
# H1 主題
## H2 章節
### H3 小節
```

Frontmatter 的 `title` 是文章頁標題，不會重複加入正文目錄。建議依序使用標題層級，不要只為了改變文字大小而跳級。標題會自動取得連結 ID，因此同一篇文章內應避免重複且難以分辨的標題。

## 文章圖片

圖片統一放在 `src/assets/articles/`，再依「分類／文章檔名」建立專用資料夾：

```text
src/assets/articles/
├── courses/
│   └── algorithm-notes/
├── activities/
│   └── community-service/
└── essays/
    └── learning-in-public/
```

例如文章位於：

```text
src/content/courses/algorithm-notes.md
```

圖片位於：

```text
src/assets/articles/courses/algorithm-notes/diagram.png
```

文章中的相對路徑應寫成：

```md
![演算法流程圖](../../assets/articles/courses/algorithm-notes/diagram.png)
```

本機圖片會交由 Astro 處理，並沿用現有的響應式文章樣式，在窄螢幕上縮小且維持原始比例。請為每張圖片撰寫能說明內容的替代文字。

圖片檔名也建議使用小寫英文字母、數字與連字號。不要貼入 `C:\...` 之類的電腦絕對路徑，因為部署後無法讀取。遠端圖片網址可以使用，但圖片若被移除、設為私人或網址失效，網站也會無法顯示；長期發布建議改存成本機圖片。

## 從 HackMD 搬移文章

1. 在 HackMD 的選單下載 Markdown 檔案。
2. 複製通用範本到正確的分類資料夾，並使用穩定的英文檔名。
3. 將匯出的正文貼到 frontmatter 下方。
4. 檢查並補齊 `title`、`date`、`description` 等欄位。
5. 將需要長期保存的圖片下載到該文章的圖片資料夾。
6. 把 Markdown 圖片網址改成相對路徑，並補上有意義的替代文字。
7. 檢查 HackMD 專用語法，依下方相容性說明調整。
8. 執行本機預覽，逐一確認目錄連結、圖片、程式碼、表格與註腳。

## Markdown 與 HackMD 相容性

| 功能 | 目前狀態 | 注意事項 |
| --- | --- | --- |
| 標題 | 支援 | H1 至 H3 會自動加入文章目錄。 |
| 圖片 | 支援 | 建議把遠端圖片下載到 `src/assets/articles/`，並使用相對路徑。 |
| 圍欄程式碼區塊 | 支援 | 在開頭反引號後標示語言，例如三個反引號後接 `ts`，即可使用現有語法醒目提示。 |
| 表格 | 支援 | 可使用一般 GitHub Flavored Markdown 表格語法。 |
| 引用區塊 | 支援 | 每行以 `>` 開頭。 |
| 原始 HTML | 基本支援 | 僅使用自己信任的內容；HackMD 的專用樣式、腳本或互動行為不會自動搬過來。 |
| 數學公式 | 尚未支援排版 | `$...$`、`$$...$$` 等語法會以一般文字呈現。這個階段不新增數學套件。 |
| 註腳 | 支援 | 可使用 `[^1]` 與 `[^1]: 說明`；系統會產生註腳區段，而該區段標題也可能出現在文章目錄。 |
| 任務清單 | 支援顯示 | `- [ ]` 與 `- [x]` 會顯示核取方塊，但它們是唯讀的，不是可儲存狀態的互動元件。 |

其他標準 Markdown 功能，例如段落、粗體、斜體、連結、編號清單、項目清單、行內程式碼與水平線，也可以直接使用。HackMD 的 Mermaid 圖表、特殊嵌入、簡報設定或其他平台專用指令不屬於目前支援範圍；請先改成一般 Markdown、圖片或程式碼區塊。

## 本機預覽與建置

在專案根目錄執行：

```bash
npm run dev
```

開啟終端機顯示的本機網址，檢查文章分類列表與文章頁。完成後按 `Ctrl+C` 停止開發伺服器。

發布前執行：

```bash
npm run build
```

建置成功後，正式網站所需的檔案會輸出到 `dist/`。

## 發布前檢查清單

- 文章位於正確的分類資料夾。
- 檔名簡短、穩定，且網址符合預期。
- 必填 frontmatter 已填寫，日期格式正確。
- `draft` 已設成預期狀態。
- 標題層級清楚，目錄連結可正常使用。
- 圖片使用可部署的相對路徑，並具有替代文字。
- HackMD 專用語法已移除或改寫。
- 桌面版與行動版皆無文字或圖片溢出。
- `npm run build` 執行成功。

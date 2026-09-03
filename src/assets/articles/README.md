# 文章圖片

請將文章圖片放在這個資料夾，並依「分類／文章檔名」建立專用資料夾：

```text
articles/
├── courses/<article-slug>/
├── activities/<article-slug>/
└── essays/<article-slug>/
```

例如 `src/content/courses/algorithm-notes.md` 使用的圖片，可放在：

```text
src/assets/articles/courses/algorithm-notes/diagram.png
```

然後在文章中使用：

```md
![演算法流程圖](../../assets/articles/courses/algorithm-notes/diagram.png)
```

完整的命名、HackMD 搬移與預覽說明請參考 `src/content/README.md`。

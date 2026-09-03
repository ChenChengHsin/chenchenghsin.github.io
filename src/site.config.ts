// ── 全局站点配置 ──
// fork 后只需改这个文件，整个站点自动更新

export const site = {
  // 网站名称（导航栏 logo、页脚、页面标题后缀、SEO）
  name: 'ruijieking',

  // 默认页面标题（未指定 title 时的后备值）
  defaultTitle: 'ruijieking',

  // SEO 站点描述（meta description）
  description: '分享修課心得、活動紀錄與生活隨筆。Course notes, activities, and essays.',

  // ── SEO：分享与链接 ──
  url: 'https://ruijieking.github.io/',            // 站点域名（必须带 https://，SEO/canonical/sitemap 依赖它）
  ogImage: '/og.png',                           // 社交分享预览图（public/og.png，建议 1200×630）
  ogSiteName: 'ruijieking',                      // 分享卡片上显示的站点名

  // 作者信息
  author: {
    name: 'ruijieking',
    github: 'ruijieking',
    location: '',
  },

  // 关于页面的介绍文字
  about: '這是 ruijieking 的個人網站，分享修課心得、活動紀錄與生活隨筆。',

  // 导航栏（href + 显示文字，数组顺序即显示顺序）
  nav: [
    { href: '/', label: '主頁面' },
    { href: '/courses', label: '修課心得' },
    { href: '/activities', label: '活動與團體' },
    { href: '/essays', label: '隨筆' },
  ],
};

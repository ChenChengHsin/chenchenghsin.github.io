// RSS 訂閱源：建置時產生 /rss.xml，讀者可使用 RSS 閱讀器訂閱

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site.config';
import { articleSections, isArticleVisible } from '../utils/articles';

const articleCollections = ['courses', 'activities', 'musings'];

export async function GET(context) {
  const items = (
    await Promise.all(
      articleCollections.map(async (collection) => {
        const section = articleSections[collection];
        const articles = await getCollection(
          collection,
          ({ data }) => isArticleVisible(data),
        );

        return articles.map((article) => ({
          title: article.data.title,
          description: article.data.description,
          pubDate: article.data.date,
          link: `${section.href}/${article.id}/`,
        }));
      }),
    )
  ).flat().sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: site.defaultTitle,
    description: site.description,
    site: context.site,
    items,
    customData: '<language>zh-TW</language>',
  });
}

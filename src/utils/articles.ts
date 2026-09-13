export type ArticleCollectionName = 'courses' | 'activities' | 'musings';

export interface ArticleSection {
  title: string;
  eyebrow: string;
  href: string;
}

export const articleSections = {
  courses: {
    title: '修課心得',
    eyebrow: 'COURSES',
    href: '/courses',
  },
  activities: {
    title: '活動與團體',
    eyebrow: 'ACTIVITIES',
    href: '/activities',
  },
  musings: {
    title: '隨筆',
    eyebrow: 'MUSINGS',
    href: '/musings',
  },
} satisfies Record<ArticleCollectionName, ArticleSection>;

export function isArticleVisible(data: { draft?: boolean }) {
  return import.meta.env.DEV || data.draft !== true;
}

const dateFormatter = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function formatArticleDate(date: Date) {
  return dateFormatter.format(date);
}

export function toDateTime(date: Date) {
  return date.toISOString().slice(0, 10);
}

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { NavItems, SidebarItems } from './config/index';
import { defineConfig } from 'vuepress/config';

dayjs.extend(utc);
dayjs.extend(timezone);

export default defineConfig(ctx => ({
  title: 'VincentZhang的笔记',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VincentZhang的笔记',
      description: 'Just playing around'
    }
  },
  shouldPrefetch: () => false,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: NavItems,
    sidebar: SidebarItems,
    lastUpdated: '上次更新',
    repo: 'vincentZhang92/vincentZhang92.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: '帮助VincentZhang92改善此页面！'
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          console.log('[@vuepress/last-updated]timestamp', timestamp);
          return dayjs(timestamp).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ],
  extraWatchFiles: ['.vuepress/config/**'],
  // do not execute babel compilation under development
  evergreen: ctx.isProd
}));

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
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
    nav: [
      { text: '首页', link: '/' },
      { text: 'Rollup', link: '/rollup/' },
      { text: '代码规范', link: '/codeLint/eslint/' },
      { text: '杂七杂八', link: '/others/' }
    ],
    sidebar: {
      '/rollup/': [
        { title: '介绍', path: '/rollup/' },
        {
          title: '配置项',
          collapsable: true,
          children: [
            '/rollup/options/',
            '/rollup/options/coreFunctionality.md',
            '/rollup/options/advancedFunctionality.md'
          ]
        }
      ],
      '/codeLint/': [
        { title: 'EditorConfig', path: '/codeLint/editorConfig/' },
        {
          title: 'ESLint',
          collapsable: true,
          children: [
            '/codeLint/eslint/',
            '/codeLint/eslint/configurationFile.md',
            // '/codeLint/eslint/rules.md',
            '/codeLint/eslint/parser.md',
            '/codeLint/eslint/plugin.md'
          ]
        },
        {
          title: 'Prettier',
          collapsable: true,
          children: [
            '/codeLint/prettier/',
            '/codeLint/prettier/usage.md',
            '/codeLint/prettier/options.md'
          ]
        },
        {
          title: 'Stylelint',
          collapsable: true,
          children: [
            '/codeLint/stylelint/',
            '/codeLint/stylelint/usage.md',
            '/codeLint/stylelint/configuration.md'
          ]
        }
      ]
    },
    lastUpdated: '上次更新',
    repo: 'vincentZhang92/vincentZhang92.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: '帮助VincentZhang92改善此页面！',
    smoothScroll: true
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          return dayjs(timestamp).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ],
  // do not execute babel compilation under development
  evergreen: ctx.isProd
}));

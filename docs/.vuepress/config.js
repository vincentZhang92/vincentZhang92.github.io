const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = {
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
      { text: '代码规范', link: '/codeLint/eslint/' }
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
        { title: 'EditorConfig', path: '/codeLint/editorConfig/' }
      ]
    },
    lastUpdated: '上次更新',
    repo: 'vincentZhang92/vincentZhang92.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: '帮助VincentZhang92改善此页面！'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          return dayjs(timestamp).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ]
};

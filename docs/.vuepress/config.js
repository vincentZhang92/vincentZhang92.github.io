const moment = require('moment');

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
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Rollup', link: '/rollup/' }
    ],
    sidebar: {
      '/rollup/': [
        { title: '介绍', path: '/rollup/' },
        { 
          title: '配置项', 
          collapsable: true,
          children: [
            '/rollup/options/coreFunctionality.md',
          ]
        }
      ]
    },
    lastUpdated: '最后更新日期',
    repo: 'vincentZhang92/vincentZhang92.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: '帮助VincentZhang92改善此页面！'
  },
  plugins: [[
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment');
        moment.locale(lang);
        return moment(timestamp).fromNow();
      }
    }
  ]]
}
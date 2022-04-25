module.exports = {
  title: 'VincentZhang的笔记',
  description: 'Just playing around',
  shouldPrefetch: () => false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: 'logo.svg',
    nav: [
      { text: '首页', link: '/' }
    ],
    lastUpdated: '最后更新日期：',
    repo: 'vincentZhang92/vincentZhang92.github.io',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: true,
    editLinkText: '帮助VincentZhang92改善此页面！'
  }
}
import { defineConfigWithTheme } from 'vitepress';

export default defineConfigWithTheme<ThemeConfig>({
  base: '/',
  lang: 'zh-CN',
  title: 'VincentZhang的笔记',
  description: 'Just playing around',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Rollup', link: '/rollup/' },
      { text: '代码规范', link: '/codeLint/eslint/' }
    ],
    sidebar: {
      '/rollup/': [
        { text: '介绍', link: '/rollup/' },
        {
          text: '配置项',
          collapsable: true,
          children: [
            { text: '配置项列表', link: '/rollup/options/' },
            { text: '核心功能', link: '/rollup/options/coreFunctionality' },
            { text: '高级功能', link: '/rollup/options/advancedFunctionality' }
          ]
        }
      ],
      '/codeLint/': [
        {
          text: 'ESLint',
          collapsable: false,
          children: [
            { text: '介绍', link: '/codeLint/eslint/' },
            { text: '配置', link: '/codeLint/eslint/configurationFile' },
            { text: '解析器', link: '/codeLint/eslint/parser' },
            { text: '插件', link: '/codeLint/eslint/plugin' }
          ]
        },
        {
          text: 'Prettier',
          collapsable: true,
          children: [
            { text: '介绍', link: '/codeLint/prettier/' },
            { text: '使用', link: '/codeLint/prettier/usage' },
            { text: '选项', link: '/codeLint/prettier/options' }
          ]
        },
        { text: 'EditorConfig', link: '/codeLint/editorConfig/' },
        {
          text: 'Stylelint',
          collapsable: true,
          children: [
            { text: '介绍', link: '/codeLint/stylelint/' },
            { text: '使用', link: '/codeLint/stylelint/usage' },
            { text: '配置', link: '/codeLint/stylelint/configuration' }
          ]
        }
      ]
    },
    repo: 'vincentZhang92/vincentZhang92.github.io',
    docsRepo: 'vincentZhang92/vincentZhang92.github.io',
    docsBranch: 'docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助VincentZhang92改善此页面！',
    lastUpdated: '上次更新'
  },
  shouldPreload: () => false,
  lastUpdated: true
});

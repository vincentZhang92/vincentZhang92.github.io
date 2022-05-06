import type { NavItem, SidebarConfig4Multiple } from 'vuepress/config';

export const NavItems: NavItem[] = [
  { text: '首页', link: '/' },
  { text: 'Rollup', link: '/rollup/' },
  { text: '代码规范', link: '/codeLint/eslint/' }
];

export const SidebarItems: SidebarConfig4Multiple = {
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
    { title: 'EditorConfig', path: '/codeLint/editorConfig/' },
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
};

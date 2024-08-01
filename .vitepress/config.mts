import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '念奴娇',
  description: '启示录',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'md', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'all',
        items: [
          { text: 'md', link: '/markdown-examples' },
          { text: '笔记', link: '/笔记' },
        ],
      },
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
})

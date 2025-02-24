import { defineConfig } from 'vitepress'
import { DefaultTheme } from 'vitepress/theme'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  // 网站标题
  title: '智识ΑIEΣΣΥΔΟ',
  // 网站说明
  description: 'Powered by zaixi.dev',
  // 网站图标配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['script', { type: 'module', src: '/web.js' }]
  ],
  
  themeConfig: {
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    // 左上角的标题
    siteTitle: "智识ΑIEΣΣΥΔΟ",
    // logo配置
    logo: '/logo.png',
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunzaixi-dev/ZS.zaixi.dev' },
      { icon: 'discord', link: 'https://discord.gg/8hJVPh8HbA' }
    ],
    // 侧边栏配置
    sidebar: [
      {
        text: '智识ΑIEΣΣΥΔΟ',
        items: [
          {
            text: '🏠 首页',
            link: '/'
          },
          {
            text: '🤖 关于智识AI',
            link: '/components/chatbot'
          },
          {
            text: '❤️ 云酒馆',
            link: '/sillytavern',
            items: [
                {
                    text: '❤️ 一键部署云酒馆',
                    link: '/sillytavern/sillytavern_auto_update_v1',
                }
            ]
          },
          {
            text: '🔄 反向代理',
            link: '/reverse-proxy',
            items: [
                {
                    text: '🔄 一键部署反向代理',
                    link: '/proxy/youchat_proxy_v1',
                }
            ]
          }
        ]
      }
    ]
  }
})

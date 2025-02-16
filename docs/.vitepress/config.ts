import { defineConfig } from 'vitepress'
import { DefaultTheme } from 'vitepress/theme'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  // 网站标题
  title: '类脑智识库分库',
  // 网站说明
  description: 'Powered by yunzaixi-dev',
  // 网站图标配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
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
    siteTitle: "类脑智识库分库",
    // logo配置
    logo: '/logo.png',
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunzaixi-dev/youchat_proxy_deploy_docs' },
      { icon: 'discord', link: 'https://discord.gg/KX3hGhfw' }
    ],
    // 侧边栏配置
    sidebar: [
      {
        text: '类脑智识库分库',
        items: [
          {
            text: '🏠 首页',
            link: '/'
          },
          {
            text: '🔄 反向代理',
            link: '/reverse-proxy',
            items: [
                {
                    text: '🔄 使用Zeabur部署',
                    link: '/proxy/youchat_proxy_v1',
                }
            ]
          }
        ]
      }
    ],
    
    // 你可以在这里添加更多主题配置
  }
})

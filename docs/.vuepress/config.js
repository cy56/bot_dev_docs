module.exports = {
    title: 'Telabot 开发指南',
    description: '开发指南',
    dest: './dist',
    base: '/',
    themeConfig:{
        nav: [
            {text: 'Setup', link: '/'},
            {text: 'Telegram', link: '/telegram/'},
            {text: 'Admin', link: '/admin/'},
            {text: 'Core', link: '/core/'},
        ],
        sidebar: 'auto'
    },
    plugins: ['@vuepress/back-to-top']
}
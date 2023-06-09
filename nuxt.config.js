export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
      { name: 'format-detection', content: 'telephone=no' }
      // { name: 'yandex-verification', content: 'KEY' }
      // { name: 'google-site-verification', content: 'KEY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'}
    ]
  },

  // animation
  transition:{
    name:'fade',
    mode:'out-in'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src:'~/assets/scss/main.scss', lang:'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // ['@nuxtjs/google-analytics'],
    // ['@nuxtjs/yandex-metrika',{
    //   id: 'KEY',
    //   websior:false,
    //   clickmap:true,
    //   trackLinks:true
    // }],
  ],

    // googleAnalytics: {
    //   id: 'UA-XXX-X'
    // }

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
    


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

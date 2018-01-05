module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bipubipu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#448aff' },
  /*
  ** Build configuration
  */
  css: [
    { src: 'muse-ui/dist/muse-ui.css', lang: 'css' },
    { src: 'muse-ui/dist/theme-teal.css', lang: 'css' },
    { src: '~/assets/theme.scss', lang: 'scss' } // include vue-material theme engine
  ],
  plugins: [
    { src: '~/plugins/muse-ui' }
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['muse-ui'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

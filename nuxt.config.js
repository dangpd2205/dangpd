export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  server: {
    port: process.env.PORT || 3333, // default: 3333
    host: '0.0.0.0' // default: localhost
  },
  analyze: {
    analyzerMode: 'static'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DangPD',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  loading: {
    color: '#FFB701',
    throttle: 30
  },

  serverMiddleware: [{
    path: '/server-middleware',
    handler: '~/server-middleware/rest.js'
  }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/fragment.js',
    {
      src: '~/plugins/vue-toast.js',
      mode: 'client'
    },
    '~/plugins/axios.js',
    '~/plugins/api.js',
    '~/plugins/vue-select.js',
    '~/plugins/nuxt-server-init.js',
    '~/plugins/element-ui.js',
    '~/plugins/inject.js',
    '~/plugins/filters.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/moment', {
      defaultLocale: 'vi',
      locales: ['vi']
    }],
    ['@nuxtjs/router', {
      fileName: 'routers/index.js'
    }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'portal-vue/nuxt',
    '@nuxtjs/robots',
    ['cookie-universal-nuxt', {
      alias: 'cookiz'
    }],
    ['@nuxtjs/component-cache', {
      maxAge: 1000 * 60 * 60
    }]
  ],

  axios: {
    progress: false
  },

  robots: [{
    UserAgent: '*',
    Disallow: () => ['/admin?*']
  }],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      /@fullcalendar.*/, // transpile ESM modules within all fullcalendar packages,
      'vee-validate',
      'vue-agile'
    ],
    extractCSS: process.env.NODE_ENV === 'production',
    optimizeCSS: true,
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeEmptyAttributes: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true,
        removeTagWhitespace: true,
        processConditionalComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler')
      }
    }
  },
  publicRuntimeConfig: {
    apiEndpoint: process.env.API_HOST
  }
};

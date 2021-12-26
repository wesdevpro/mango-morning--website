export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mango_morning_podcast_website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'theme-color',
        content: 'rgb(255, 156, 65)',
        media: '(prefers-color-scheme: light)',
      },
      {
        name: 'theme-color',
        content: 'rgb(140, 87, 215)',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
  ],

  buefy: {
    defaultIconPack: 'fas',
    defaultIconComponent: 'FontAwesomeIcon',
    materialDesignIcons: false,
  },

  fontawesome: {
    icons: {
      solid: ['faHome', 'faDollarSign', 'faBook', 'faRunning'],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

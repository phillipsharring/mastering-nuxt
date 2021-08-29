export default {
  components: true,
  head: {
    titleTemplate: 'Mastring Nuxt: %s',
    htmlAttrs: {
      'lang' : 'en'
    },
    bodyAttrs: {
      'class': [
        'my-style'
      ]
    },
    meta: [
      { 'charset': 'utf-8' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ]
  },
  publicRuntimeConfig: {
    googleApiKey: process.env.GOOGLE_API_KEY || 'googleApiKey',
    algoliaApiKey: process.env.ALGOLIA_API_KEY || 'algoliaApiKey',
    algoliaAppId: process.env.ALGOLIA_APP_ID || 'algoliaAppId',
  },
  router: {
    prefetchLinks: false,
  },
  plugins: ['~/plugins/maps.client', '~/plugins/dataApi']
}

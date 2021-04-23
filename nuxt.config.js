import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '',
    title: 'Verkel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Plataforma de Capacitacion numero uno de Mexico' }
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap',
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/axios',
  ],

  firebase: {
      config: {
        apiKey: "AIzaSyAVtkXLhULsH1u7dqBulK_GSTCzimuQkFE",
        authDomain: "verkel-platform.firebaseapp.com",
        databaseURL: "https://verkel-platform-default-rtdb.firebaseio.com",
        projectId: "verkel-platform",
        storageBucket: "verkel-platform.appspot.com",
        messagingSenderId: "915224425610",
        appId: "1:915224425610:web:c52b62e6d816a9e8ada973"
      },
    // ...
    services: {
      auth: true,
      firestore: true,
      storage: true,
      firestore: {
        memoryOnly: false, // default
        chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true,
        emulatorPort: 8080,
        emulatorHost: 'localhost',
        settings: { 
          // Firestore Settings - currently only works in SPA mode
        }
      },
      auth: {
        ssr: true
      }
      // ...
    }
  },
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false
    }
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true
      },
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          firstbackground: "#DBDBDB",
          secondbackground: "#FFFFFF",
          thirdbackground: "#DBDBDB",
          fourthbackground: "#EAEAEA",
          warning: '#F35D5D'
        },
        breakpoint: {
          thresholds: {
            lg: 1320,
          }
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

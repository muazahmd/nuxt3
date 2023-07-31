// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
          {
              rel: 'stylesheet',
              href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
              integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
              crossorigin: 'anonymous'
          }
      ],
      script: [
          {
              src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
              integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
              crossorigin: 'anonymous'
          }
      ],
  }
  },

  devtools: { enabled: true },
   runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    },
    MONGO_URI: process.env.MONGO_URI,

  
  }, 
  
  
  modules: [ "@pinia/nuxt",'nuxt-icon'   ]
  ,nitro: {
		plugins: ["@/server/db/index.ts"],
	},
  build: {
		transpile: ["vue-toastification"],
	},
  plugins: [
  ],
  
})

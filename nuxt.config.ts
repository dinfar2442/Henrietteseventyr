// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			'Rock+Salt': [400],
		}
	  },
	  runtimeConfig: {
		public: {
			apiKey: "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",
		}
	  }
})

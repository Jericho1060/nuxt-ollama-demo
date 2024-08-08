// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    extends: ['@nuxt/ui-pro'],
    modules: ["nuxt-ollama", "@nuxt/ui"],
    ollama: {
        // Options
        protocol: 'http',
        host: 'localhost',
        port: 11434,
    }
})
import { defineNuxtConfig } from 'nuxt/config'
import EventBus from '..'

export default defineNuxtConfig({
  modules: [
    EventBus
  ]
  // myModule: {
  //   addPlugin: true
  // }
})

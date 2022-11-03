
import { resolve } from 'path'
import { fileURLToPath } from 'url'

import { defineNuxtModule, addImports } from '@nuxt/kit'
// import eventBus from './eventBus'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'event-bus',
    configKey: 'eventBus'
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./', import.meta.url))
    addImports({ name: 'EventBus', as: 'EventBus', from: resolve(runtimeDir, 'eventBus') })
  }
})

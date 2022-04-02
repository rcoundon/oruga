import { App, Plugin } from 'vue'

import Rate from './Rate.vue'

import { registerComponent } from '../../utils/plugins'

export default {
    install(app: App) {
        registerComponent(app, Rate)
    }
} as Plugin

export {
    Rate as ORate
}

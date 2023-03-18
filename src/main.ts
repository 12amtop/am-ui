import './style.scss'
import './lib/am.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css/github-markdown-light.css'

createApp(App).use(router).mount('#app')

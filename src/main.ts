import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import First from './components/First.vue'
import Second from './components/Second.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/',component: First},
        {path: '/2',component: Second},
    ]
})
createApp(App).use(router).mount('#app')

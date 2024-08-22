import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createI18n } from 'vue-i18n'
import zh from '@/locales/zh.json'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'zh', // 預設語言
    fallbackLocale: 'zh', // 當找不到對應語言時使用的語言
    messages: {
      zh
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(i18n)

app.mount('#app')

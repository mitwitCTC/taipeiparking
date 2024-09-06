import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createI18n } from 'vue-i18n'
import zh from '@/locales/zh.json'
import { Form as VeeForm, Field as VField, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'zh', // 預設語言
    fallbackLocale: 'zh', // 當找不到對應語言時使用的語言
    messages: {
      zh
    }
})

// 驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('phone', (value) => {
  const phonePattern = /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}/;
  const mobilePattern = /^09[0-9]{8}$/;
  if (phonePattern.test(value) || mobilePattern.test(value)) {
    return true;
  }
  return '格式不符';
});
defineRule('min', min);

// 配置 VeeValidate 使用 i18n
configure({
  generateMessage: context => {
    const messages = i18n.global.t(`validation.${context.rule.name}`);
    return messages || context.message;
  }
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(i18n)

app.component('VeeForm', VeeForm);
app.component('VField', VField);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')

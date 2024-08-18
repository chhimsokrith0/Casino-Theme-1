import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css';
import router from './router';
import i18n from './i18n';
import '@fortawesome/fontawesome-free/css/all.min.css';


createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')

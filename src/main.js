import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(router).mount('#app')

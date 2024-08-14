import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import EarnMoney from '../Views/EarnMoney.vue';
import Wallet from '../Views/Wallet.vue';
import Promotion from '../Views/Promotion.vue';
import MyProfile from '../Views/MyProfile.vue';

const routes = [
  { 
    path: '/', 
    name: '/',
    component: Home 
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/contact', 
    name: 'contact',
    component: Contact 
  },
  {
    path: '/earn-money',
    name: 'Earn Money',
    component: EarnMoney,
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
  },
  {
    path: '/promotion',
    name: 'Promotion',
    component: Promotion,
  },
  {
    path: '/my',
    name: 'My',
    component: MyProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

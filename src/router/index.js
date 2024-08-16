import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import EarnMoney from '../Views/EarnMoney.vue';
import Wallet from '../Views/Wallet.vue';
import Promotion from '../Views/Promotion.vue';
import MyProfile from '../Views/MyProfile.vue';
import LoginRegister from '../components/LoginRegister.vue';
import CustomerService from '../components/CustomerService.vue';
import SportsPage from '../components/PageButtonGroup/SportsPage.vue';
import CasinoPage from '../components/PageButtonGroup/CasinoPage.vue';
import SlotsPage from '../components/PageButtonGroup/SlotsPage.vue';
import FishingPage from '../components/PageButtonGroup/FishingPage.vue';
import ChessPage from '../components/PageButtonGroup/ChessPage.vue';
import AnimalPage from '../components/PageButtonGroup/AnimalPage.vue';


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
    path: '/my-profile',
    name: 'My',
    component: MyProfile,
  },
  {
    path: '/loginregister',
    name: "LoginRegister",
    component: LoginRegister
  },
  {
    path: '/customer-service',
    name: "CustomerService",
    component: CustomerService
  },
  {
    path: '/sports',
    name: "Sports",
    component: SportsPage
  },
  {
    path: '/casino',
    name: "Casino",
    component: CasinoPage
  },
  {
    path: '/slots',
    name: "Slots",
    component: SlotsPage
  },
  {
    path: '/fishing',
    name: "Fishing",
    component: FishingPage
  },
  {
    path: '/chess',
    name: "Chess",
    component: ChessPage
  },
  {
    path: '/animal',
    name: "Animal",
    component: AnimalPage
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

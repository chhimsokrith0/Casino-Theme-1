<template>
  <nav class="bg-gray-900 p-4 z-50 fixed bottom-0 w-full flex justify-around items-center text-white shadow-lg">
    <!-- Navigation Item -->
    <div 
      v-for="(item, index) in navItems" 
      :key="index" 
      @click="navigateTo(item.route)" 
      class="flex flex-col items-center cursor-pointer"
    >
      <img :src="item.icon" :alt="item.label" class="w-6 h-6 mb-1" />
      <span :class="{'text-blue-500': item.active, 'text-gray-400': !item.active}" class="text-xs">
        {{ item.label }}
      </span>
    </div>
  </nav>
</template>

<script>
import iconHome from '../assets/icon-navbar-bottom/Home.png';
import iconEarnMoney from '../assets/icon-navbar-bottom/EarnMoney.png';
import iconWallet from '../assets/icon-navbar-bottom/Wallet.png';
import iconPromotion from '../assets/icon-navbar-bottom/Promotions.png';
import iconMy from '../assets/icon-navbar-bottom/Profile.png';

export default {
  name: 'NavBar',
  data() {
    return {
      navItems: [
        { label: 'Home', icon: iconHome, route: '/', active: true },
        { label: 'Earn Money', icon: iconEarnMoney, route: '/earn-money', active: false },
        { label: 'Wallet', icon: iconWallet, route: '/wallet', active: false },
        { label: 'Promotion', icon: iconPromotion, route: '/promotion', active: false },
        { label: 'My', icon: iconMy, route: '/my-profile', active: false },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      // Update active state
      this.navItems.forEach(item => {
        item.active = item.route === route;
      });

      // Navigate to the selected route
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
/* Style for the active icon and label */
.text-blue-500 {
  color: #3b82f6; /* Tailwind's blue-500 color */
}

.text-gray-400 {
  color: #9ca3af; /* Tailwind's gray-400 color */
}
</style>

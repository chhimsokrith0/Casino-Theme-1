<template>
  <nav class="bg-gray-900 p-4 z-50 fixed bottom-0 w-full h-14 flex justify-around items-center text-white shadow-lg">
    <!-- Navigation Item -->
    <div 
      v-for="(item, index) in navItems" 
      :key="index" 
      @click="navigateTo(item.route)" 
      class="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-110"
    >
      <img 
        :src="item.icon" 
        :alt="item.label" 
        class="w-6 h-6 mb-1 transition-transform duration-300 ease-in-out"
        :class="{'animate-bounce': item.active, 'scale-110': item.active}" 
      />
      <span 
        :class="[
          {'text-blue-500': item.active, 'text-gray-400': !item.active}, 
          'text-xs transition-colors duration-300 ease-in-out'
        ]"
      >
        {{ $t(item.label) }}
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
        { label: 'EarnMoney', icon: iconEarnMoney, route: '/earn-money', active: false },
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
/* Bounce animation for active icon */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce {
  animation: bounce 0.5s ease-in-out;
}

/* Scale effect on hover */
.transform {
  transition: transform 0.3s ease-in-out;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Ensure smooth color transitions for the text */
.transition-colors {
  transition: color 0.3s ease-in-out;
}
</style>

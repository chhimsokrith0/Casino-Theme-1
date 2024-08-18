<template>
    <div class="relative">
      <div class="flex items-center bg-gray-800 p-2 rounded-lg">
        <!-- Balance Section -->
        <div class="flex items-center space-x-2 bg-gray-900 p-2 rounded-lg">
          <div class="flex items-center text-yellow-500 space-x-1">
            <i class="fas fa-star"></i>
            <span>0.00</span>
          </div>
          <button class="text-yellow-500 hover:text-yellow-400">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
  
        <!-- Other Assets Section -->
        <div class="ml-4 text-gray-400">
          <span>Other Assets:</span> 
          <span class="text-yellow-500">0.00</span>
          <i class="fas fa-chevron-right text-gray-400"></i>
        </div>
  
        <!-- Actions Section -->
        <div class="ml-4 flex space-x-2">
          <button class="flex flex-col items-center justify-center p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
            <i class="fas fa-coins mb-1"></i>
            <span class="text-sm">Deposit</span>
          </button>
          <button class="flex flex-col items-center justify-center p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
            <i class="fas fa-wallet mb-1"></i>
            <span class="text-sm">Withdraw</span>
          </button>
          <button @click="toggleMoreMenu" class="flex flex-col items-center justify-center p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
            <i class="fas fa-ellipsis-h mb-1"></i>
            <span class="text-sm">More</span>
          </button>
        </div>
      </div>
  
      <!-- Background Blur and Overlay -->
      <div v-if="showMoreMenu" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30" @click="toggleMoreMenu"></div>
  
      <!-- More Menu -->
      <div v-if="showMoreMenu" class="absolute right-0 z-40 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg">
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(item, index) in moreMenuItems" :key="index" class="flex flex-col items-center text-white">
            <i :class="item.icon" class="text-2xl mb-1"></i>
            <span class="text-xs">{{ item.name }}</span>
            <span v-if="item.tag" class="text-xs text-red-500">{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMoreMenu: false,
        moreMenuItems: [
          { name: 'Transfer', icon: 'fas fa-exchange-alt' },
          { name: 'Transactions', icon: 'fas fa-receipt' },
          { name: 'Profile', icon: 'fas fa-user' },
          { name: 'VIP', icon: 'fas fa-crown', tag: 'HOT' },
          { name: 'Balance', icon: 'fas fa-wallet', tag: 'NEW' },
          { name: 'Income', icon: 'fas fa-dollar-sign' },
          { name: 'My Wallet', icon: 'fas fa-wallet' },
          { name: 'Mine', icon: 'fas fa-user-circle' },
          { name: 'Promotions', icon: 'fas fa-tags' },
          { name: 'Messages', icon: 'fas fa-envelope' },
          { name: 'Support', icon: 'fas fa-headset' },
          { name: 'About Us', icon: 'fas fa-info-circle' }
        ]
      };
    },
    methods: {
      toggleMoreMenu() {
        this.showMoreMenu = !this.showMoreMenu;
      }
    }
  };
  </script>
  
  <style scoped>
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(5px);
  }
  </style>
  
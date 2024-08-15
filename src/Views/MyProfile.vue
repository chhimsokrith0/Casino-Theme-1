<template>
    <div class="bg-gray-900 min-h-screen text-white p-4">
      <!-- Profile Section -->
      <div class="flex items-center mb-6">
        <div class="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM21 20.354c0-2.5-5-4.5-9-4.5s-9 2-9 4.5v1.5h18v-1.5z" />
            </svg>
        </div>
        <div class="ml-4">
            <div class="text-xl font-bold">Login/Register</div>
            <div class="text-sm text-gray-400">Welcome to ICG Sports</div>
        </div>
        <div class="ml-auto flex items-center space-x-4">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4z" />
            </svg>
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h18m-3 6H6m6-6v12" />
            </svg>
        </div>
        </div>
  
      <!-- Top Action Buttons -->
      <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('deposit')">
            <div class="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m0-8H8m8 0h-4m4 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <div class="mt-2 text-sm">Deposit</div>
            </div>
            <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('withdraw')">
            <div class="w-12 h-12 bg-teal-500 rounded-full mx-auto flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m-4-4h8m0 0l4-4m-4 4l-4 4" />
                </svg>
            </div>
            <div class="mt-2 text-sm">Withdraw</div>
            </div>
            <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('transfer')">
            <div class="w-12 h-12 bg-orange-400 rounded-full mx-auto flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m-4-4h8m0 0l4-4m-4 4l-4 4" />
                </svg>
            </div>
            <div class="mt-2 text-sm">Transfer</div>
            </div>
            <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('yuebao')">
            <div class="w-12 h-12 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div class="mt-2 text-sm">Yu'ebao</div>
            </div>
        </div>
  
      <!-- VIP Section -->
      <div class="bg-gradient-to-r from-purple-800 to-blue-500 rounded-lg p-4 mb-6">
        <div class="flex items-center justify-between">
          <div class="text-sm">login to view</div>
          <div class="text-sm text-gray-300">More VIP privileges <span class="ml-2">></span></div>
        </div>
        <div class="flex justify-between items-center mt-4">
          <div class="text-blue-200 text-xs">VIP0</div>
          <div class="w-full h-2 bg-blue-200 rounded-lg mx-2 relative">
            <div class="bg-blue-500 h-full rounded-lg" :style="{ width: vipProgress + '%' }"></div>
          </div>
          <div class="text-yellow-300 text-xs">VIP1</div>
        </div>
      </div>
  
      <!-- Mid Action Buttons -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('history')">
          <svg class="w-8 h-8 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <div class="mt-2 text-sm">History</div>
        </div>
        <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('account')">
          <svg class="w-8 h-8 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2l6 6-6 6-2 2-6-6 6-6 2-2z" />
          </svg>
          <div class="mt-2 text-sm">Account</div>
        </div>
        <div class="bg-gray-800 rounded-lg p-4 text-center" @click="handleAction('promoCode')">
          <svg class="w-8 h-8 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m0 0l3-3m-3 3l3 3m-9-3h3" />
          </svg>
          <div class="mt-2 text-sm">Promo Code</div>
        </div>
      </div>
  
      <!-- Options List -->
      <div class="bg-gray-800 rounded-lg mb-4 p-4">
        <div v-for="(option, index) in options" :key="index" class="flex items-center justify-between mb-4" @click="handleOptionClick(option)">
          <div class="text-sm">{{ option.label }}</div>
          <span class="text-gray-400">></span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyProfile",
    data() {
      return {
        vipProgress: 25, // Example progress value
        options: [
          { label: "Leaderboard", action: "leaderboard" },
          { label: "Message", action: "message" },
          { label: "Support", action: "support" },
          { label: "Affiliate Business", action: "affiliate" },
          { label: "Cinema", action: "cinema" },
          { label: "Reviews", action: "reviews" },
          { label: "About", action: "about" },
          { label: "App", action: "app" },
        ],
      };
    },
    methods: {
      handleAction(action) {
        console.log("Action clicked:", action);
        // Implement your logic here, e.g., navigating to different pages or showing modals
      },
      handleOptionClick(option) {
        console.log("Option clicked:", option);
        // Implement your logic here based on the option action
      },
      navigate(page) {
        console.log("Navigating to:", page);
        // Implement your navigation logic here, for example using Vue Router
        // this.$router.push({ name: page });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  
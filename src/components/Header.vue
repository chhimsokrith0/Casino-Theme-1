<template>
    <header class="bg-gray-900 p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <!-- Logo - Clickable -->
          <div @click="toggleDrawer" class="cursor-pointer mr-2 flex items-center">
            <svg class="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18M6 18h12" />
            </svg>
          </div>
          <!-- Brand Name -->
          <div class="text-white font-bold text-xl flex items-center">
            <span class="text-yellow-500">ICG </span> Gaming
          </div>
        </div>
        <!-- VIP Badge -->
        <div class="flex items-center">
          <div class="bg-purple-600 text-white rounded-full px-2 py-1 text-sm font-bold flex items-center">
            <span class="mr-1 bg-purple-400 text-white rounded-full w-6 h-6 flex items-center justify-center">VIP</span>
            <span class="ml-2">VIP</span>
          </div>
        </div>
      </nav>
      <!-- Drawer -->
      <transition name="slide">
        <div v-if="drawerOpen" class="fixed top-14 left-0 h-full w-64 bg-gray-800 text-white z-50">
          <div class="p-4">
            <div class="p-4 bg-gray-900 rounded-lg mb-4">
              <h2 class="text-lg font-bold mb-2">Hi, welcome to ICG casino</h2>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <img src="" alt="Valencia Club" class="w-8 h-8 rounded-full"/>
                  <span>Valencia Club</span>
                </div>
                <div class="flex items-center space-x-2">
                  <img src="" alt="Borussia Dortmund FC" class="w-8 h-8 rounded-full"/>
                  <span>Borussia Dortmund FC</span>
                </div>
              </div>
            </div>
            <ul class="space-y-2">
              <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <img src="../assets/icon-Drawer/Language.png" alt="Language" class="w-6 h-6 mr-2"/>
                <span>Language</span>
                <span class="ml-auto">></span>
              </li>
              <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <img src="../assets/icon-Drawer/messagecenter.png" alt="Message Center" class="w-6 h-6 mr-2"/>
                <span>Message Center</span>
                <span class="ml-auto">></span>
              </li>
              <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <img src="../assets/icon-Drawer/Feedback.png" alt="Feedback" class="w-6 h-6 mr-2"/>
                <span>Feedback</span>
                <span class="ml-auto">></span>
              </li>
              <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <img src="../assets/icon-Drawer/app.png" alt="APP" class="w-6 h-6 mr-2"/>
                <span>APP</span>
                <span class="ml-auto">></span>
              </li>
              <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <img src="../assets/icon-Drawer/About.png" alt="About" class="w-6 h-6 mr-2"/>
                <span>About</span>
                <span class="ml-auto">></span>
              </li>
              <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <img src="../assets/icon-Drawer/Device.png" alt="Device" class="w-6 h-6 mr-2"/>
                <span>Device</span>
                <span class="ml-auto">></span>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        drawerOpen: false, // Drawer starts closed
      };
    },
    methods: {
      toggleDrawer() {
        this.drawerOpen = !this.drawerOpen; // Toggle drawer open/close state
      },
    },
  };
  </script>
  
  <style scoped>
  /* Transition for the drawer */
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
    transform: translateX(-100%);
  }
  </style>
  
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

    <!-- Main Drawer -->
    <transition name="slide">
      <div v-if="drawerOpen && !languageDrawerOpen" class="fixed top-14 left-0 h-full w-64 bg-gray-800 text-white z-50">
        <div class="p-4">
          <div class="p-4 bg-gray-900 rounded-lg mb-4">
            <h2 class="text-lg font-bold mb-2">{{ $t('welcomeMessage') }}</h2>
            <div class="flex flex-col space-y-2">
              <div class="flex items-center space-x-2">
                <img src="../assets/Club.png" alt="Valencia Club" class="w-8 h-8 rounded-full" />
                <span>Valencia Club</span>
              </div>
              <div class="flex items-center space-x-2">
                <img src="../assets/FC.png" alt="Borussia Dortmund FC" class="w-8 h-8 rounded-full" />
                <span>Borussia Dortmund FC</span>
              </div>
            </div>
          </div>
          <ul class="space-y-2">
            <li @click="openLanguageDrawer" class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
              <img src="../assets/icon-Drawer/Language.png" alt="Language" class="w-6 h-6 mr-2" />
              <span>{{ $t('language') }}</span>
              <span class="ml-auto">></span>
            </li>
            <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
              <img src="../assets/icon-Drawer/messagecenter.png" alt="Message Center" class="w-6 h-6 mr-2" />
              <span>{{ $t('messageCenter') }}</span>
              <span class="ml-auto">></span>
            </li>
            <li @click="navigateToCustomerService" class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
              <img src="../assets/icon-Drawer/Feedback.png" alt="Feedback" class="w-6 h-6 mr-2" />
              <span>{{ $t('feedback') }}</span>
              <span class="ml-auto">></span>
            </li>
            <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
              <img src="../assets/icon-Drawer/app.png" alt="APP" class="w-6 h-6 mr-2" />
              <span>{{ $t('app') }}</span>
              <span class="ml-auto">></span>
            </li>
            <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
              <img src="../assets/icon-Drawer/About.png" alt="About" class="w-6 h-6 mr-2" />
              <span>{{ $t('about') }}</span>
              <span class="ml-auto">></span>
            </li>
            <li class="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer">
              <img src="../assets/icon-Drawer/Device.png" alt="Device" class="w-6 h-6 mr-2" />
              <span>{{ $t('device') }}</span>
              <span class="ml-auto">></span>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- Language Drawer -->
    <transition name="slide">
      <div v-if="languageDrawerOpen" class="fixed top-14 left-0 h-full w-64 bg-gray-800 text-white z-50">
        <div class="p-4 bg-gray-900 rounded-lg">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold">{{ $t('language') }}</h2>
            <button @click="closeLanguageDrawer" class="text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul class="space-y-4">
            <li @click="changeLanguage('en')" class="flex items-center cursor-pointer">
              <img src="../assets/icon-Language/Malaysia.jpg" alt="Malaysia" class="w-6 h-6 mr-2" />
              <div>
                <span class="block text-white">{{ $t('malaysia') }}</span>
                <span class="text-gray-400 text-sm">{{ $t('english') }} | {{ $t('simplifiedChinese') }} | {{ $t('malay') }}</span>
              </div>
            </li>
            <li @click="changeLanguage('zh')" class="flex items-center cursor-pointer">
              <img src="../assets/icon-Language/HongKong.jpg" alt="Hong Kong" class="w-6 h-6 mr-2" />
              <div>
                <span class="block text-white">{{ $t('hongKong') }}</span>
                <span class="text-gray-400 text-sm">{{ $t('traditionalChinese') }}</span>
              </div>
            </li>
            <li @click="changeLanguage('vi')" class="flex items-center cursor-pointer">
              <img src="../assets/icon-Language/vietnam.jpg" alt="Vietnam" class="w-6 h-6 mr-2" />
              <div>
                <span class="block text-white">{{ $t('vietnam') }}</span>
                <span class="text-gray-400 text-sm">{{ $t('vietnamese') }}</span>
              </div>
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
      languageDrawerOpen: false, // Language drawer starts closed
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen; // Toggle drawer open/close state
    },
    openLanguageDrawer() {
      this.languageDrawerOpen = true; // Open language drawer
      this.drawerOpen = false; // Close main drawer
    },
    closeLanguageDrawer() {
      this.languageDrawerOpen = false; // Close language drawer
      this.drawerOpen = true; // Reopen the main drawer when the language drawer is closed
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Change the language
      this.closeLanguageDrawer(); // Close the language drawer after selection
    },
    navigateToCustomerService() {
      this.$router.push('/customer-service'); // Navigate to CustomerService page
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

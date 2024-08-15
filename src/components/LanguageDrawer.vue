<template>
    <div class="p-4 bg-gray-900 rounded-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">Language</h2>
        <button @click="$emit('closeDrawer')" class="text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul>
        <li class="flex items-center py-2">
          <img src="../assets/icon-Language/Malaysia.jpg" alt="Malaysia" class="w-6 h-6 mr-2"/>
          <div>
            <span class="block text-white">Malaysia</span>
            <span class="text-gray-400 text-sm">English | 简体中文 | Malay</span>
          </div>
        </li>
        <li class="flex items-center py-2">
          <img src="../assets/icon-Language/HongKong.jpg" alt="Hong Kong" class="w-6 h-6 mr-2"/>
          <div>
            <span class="block text-white">香港</span>
            <span class="text-gray-400 text-sm">繁体中文</span>
          </div>
        </li>
        <li class="flex items-center py-2">
          <img src="../assets/icon-Language/vietnam.jpg" alt="Vietnam" class="w-6 h-6 mr-2"/>
          <div>
            <span class="block text-white">Việt Nam</span>
            <span class="text-gray-400 text-sm">Tiếng Việt</span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageDrawer',
  };
  </script>
  
  <style scoped>
  /* Custom styles for the LanguageDrawer component */
  </style>
  
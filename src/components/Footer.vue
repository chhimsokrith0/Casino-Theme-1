<template>
    <footer class="bg-gray-900 text-white p-6">
      <div class="flex flex-wrap justify-around items-center mb-4">
        <!-- Follow Us Section -->
        <div class="flex items-center space-x-4 mb-4 md:mb-0">
          <div class="flex items-center">
            <img src="../assets/icon-footer/followus.png" alt="Follow Us" class="w-6 h-6 mr-2" />
            <h2 class="text-lg font-semibold">Follow Us</h2>
          </div>
          <div class="flex space-x-3">
            <a href="#" target="_blank">
              <img src="../assets/icon-footer/fb.png" alt="Facebook" class="w-8 h-8" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/icon-footer/line.png" alt="Line" class="w-8 h-8" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/icon-footer/telegram.png" alt="Telegram" class="w-8 h-8" />
            </a>
          </div>
        </div>
  
        <!-- Responsible Gambling Section -->
        <div class="flex items-center space-x-4 mb-4 md:mb-0">
          <div class="flex items-center">
            <img src="" alt="Responsible Gambling" class="w-6 h-6 mr-2" />
            <h2 class="text-lg font-semibold">Responsible Gambling</h2>
          </div>
          <div class="flex space-x-3">
            <img src="" alt="18+" class="w-8 h-8" />
            <img src="" alt="GamCare" class="w-8 h-8" />
            <img src="" alt="Be Gamble Aware" class="w-24 h-8" />
          </div>
        </div>
      </div>
  
      <!-- Disclaimer -->
      <div class="text-center text-sm text-gray-400">
        <p>
          ICG Gaming Sports is a legitimate company with a valid license and recognized by international industry associations.
          Please ensure that you are at least 18 years old before registering and playing!
        </p>
        <p class="mt-2">Copyright ©2020-2023 ICG Gaming. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  /* Custom styles for the Footer component */
  footer {
    background-color: #1a202c;
    color: #ffffff;
  }
  
  /* Responsive styles for better layout on smaller screens */
  @media (max-width: 768px) {
    .flex-wrap {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  
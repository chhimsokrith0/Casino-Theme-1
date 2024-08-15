<template>
    <div class="bg-gray-900 p-4 rounded-lg shadow-lg max-w-sm mx-auto relative card-with-border">
      <!-- Player Image -->
      <div class="relative">
        <img src="../assets/banner/vanlencia.png" alt="Valencia Players" class="w-full rounded-lg" />
        
        <!-- Overlay Content: Logo, Text, and Button -->
        <div class="absolute top-0 left-0 p-4 flex flex-col h-full justify-between">
          <!-- Club Logo and Name -->
          <div class="flex items-center mb-2">
            <img src="../assets/banner/vanlencia_logo.png" alt="Valencia Club Logo" class="w-12 h-12 mr-2" />
            <div>
              <h2 class="text-white font-semibold">Valencia Club</h2>
              <p class="text-yellow-400 text-sm">Asian Regional Partner</p>
            </div>
          </div>
  
          <!-- Detail Button -->
          <button class="bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg hover:bg-blue-700">
            Detail
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ValenciaClubCard',
  };
  </script>
  
  <style scoped>
  /* Border Animation Effect */
  .card-with-border {
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .card-with-border::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, #3b82f6, transparent);
    z-index: 1;
    transform: translate(-50%, -50%);
    animation: borderAnimation 3s linear infinite;
  }
  
  .card-with-border::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1f2937;
    z-index: 2;
    border-radius: inherit;
  }
  
  .card-with-border > .relative {
    position: relative;
    z-index: 3;
  }
  
  /* Animation keyframes */
  @keyframes borderAnimation {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  </style>
  
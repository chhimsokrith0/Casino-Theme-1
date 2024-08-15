<template>
    <div class="bg-gray-900 p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center">
          <img src="../assets/Account.png" alt="Brand Endorsement Icon" class="w-6 h-6 mr-2" />
          <h2 class="text-white font-semibold">Brand Endorsement</h2>
        </div>
        <a href="#" class="text-blue-400 text-sm hover:underline">More</a>
      </div>
  
      <!-- Video Section -->
      <div class="relative">
        <video controls class="w-full rounded-lg">
          <source src="../assets/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BrandEndorsement',
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  
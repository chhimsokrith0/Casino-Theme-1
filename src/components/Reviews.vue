<template>
    <div class="bg-gray-900 min-h-screen p-8 text-white">
      <!-- Reviews Header -->
      <div class="flex items-center mb-6">
        <img src="../assets/icon-reviews.png" alt="Reviews Icon" class="w-8 h-8 mr-2" />
        <h1 class="text-xl font-semibold">Reviews</h1>
      </div>
  
      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 class="text-yellow-400 font-semibold text-lg mb-3">{{ review.title }}</h3>
          <p class="text-sm mb-4">{{ review.content }}</p>
          <div class="flex items-center mb-2">
            <div class="flex items-center mr-2">
              <span v-for="i in 5" :key="i" class="text-yellow-400 mr-1">★</span>
            </div>
            <span class="text-sm">From:{{ review.author }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          {
            title: "PP88 is worth trusting.",
            content: "I have been playing baccarat on AE, and I was initially worried....",
            author: "Bin***20"
          },
          {
            title: "Their customer service is worthy of praise.",
            content: "I had some issues with my account last time, but after...",
            author: "Duy***"
          },
          {
            title: "You definitely should switch to PP88!",
            content: "I'm really glad that I switched to PP88 platform. They offer...",
            author: "Tie***ong2"
          },
          {
            title: "They make me feel like a true VIP!",
            content: "They offer VIPs with high-quality services that exceed...",
            author: "Ion***ong"
          },
          {
            title: "An unexpected surprise.",
            content: "That day, I won a huge jackpot while playing slots, but I...",
            author: "Abb***8"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles for the component */
  </style>
  
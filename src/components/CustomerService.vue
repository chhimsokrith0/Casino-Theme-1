<template>
    <div class="bg-gray-900 min-h-screen text-white p-4">
      <!-- Header Section -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center">
          <img src="../assets/logo-company/logo.png" alt="PP88 Logo" class="w-16" />
        </div>
        <button @click="closePage" class="text-gray-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
  
      <!-- Welcome Message -->
      <div class="text-lg mb-4">Hi~<br />How can I assist you?</div>
  
      <!-- Customer Service Section -->
      <div class="bg-gray-800 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-4">
          <img src="../assets/icon-chatbot/cs-1.jpg" alt="Major Consult" class="w-12 h-12 rounded-full" />
          <div class="ml-4">
            <div class="text-sm font-semibold">Major Consult <span class="text-green-400">● Online</span></div>
            <div class="text-xs text-gray-400">24/7 Online Customer Service</div>
            <div class="text-xs text-gray-500">If the main line is busy, please contact the secondary customer service.</div>
          </div>
          <button class="ml-auto bg-blue-500 text-white rounded-full px-4 py-1 text-sm">Consult</button>
        </div>
      </div>
  
      <div class="bg-gray-800 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-4">
          <img src="../assets/icon-chatbot/cs-2.jpg" alt="Minor Consult" class="w-12 h-12 rounded-full" />
          <div class="ml-4">
            <div class="text-sm font-semibold">Minor Consult <span class="text-green-400">● Online</span></div>
            <div class="text-xs text-gray-400">24/7 Online Customer Service</div>
            <div class="text-xs text-gray-500">If the line is overloaded, please switch to 4G or LTE network and contact customer service again.</div>
          </div>
          <button class="ml-auto bg-blue-500 text-white rounded-full px-4 py-1 text-sm">Consult</button>
        </div>
      </div>
  
      <!-- FAQ Section -->
      <div class="bg-gray-800 rounded-lg p-4">
        <div class="text-lg mb-4">FQA</div>
        <div class="grid grid-cols-2 gap-4">
          <button class="bg-gray-700 text-white rounded-lg p-2">Recharge Issues</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Withdrawal Issues</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Binding Withdrawal Account</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Earn Money</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">VIP</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Change Language</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Account Issues</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Official Channel</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Complaints and Suggestions</button>
          <button class="bg-gray-700 text-white rounded-lg p-2">Exclusive Promo Code</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomerService",
    methods: {
      closePage() {
        console.log("Closing the page...");
        // Implement your logic to close or navigate away from this page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>
  
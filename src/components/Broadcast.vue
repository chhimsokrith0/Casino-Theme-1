<template>
  <div class="bg-gray-900 flex p-4">
    <!-- Broadcast Container -->
    <div class="bg-gray-800 text-white rounded-xl p-4 w-full max-w-md shadow-lg">
      <!-- Header -->
      <div class="relative flex items-center justify-center mb-4">
        <div class="absolute left-0">
          <img src="../assets/icon-navbar-bottom/Promotions.png" alt="Broadcast Icon" class="w-14 h-14" />
        </div>
        <h2 class="text-lg font-semibold text-center text-yellow-400">Dynamic Broadcast</h2>
        <div class="absolute right-0 flex items-center">
          <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
      </div>

      <!-- Broadcast Messages Vertical Slider -->
      <div class="overflow-hidden h-80">
        <div class="vertical-slider space-y-4">
          <div v-for="(message, index) in messages" :key="index" class="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p class="text-sm font-bold">{{ message.user }}</p>
              <p class="text-xs">{{ message.text }}</p>
            </div>
            <p class="text-yellow-400 text-sm font-bold">{{ message.amount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { user: "Jie***666", text: "Participate Next day red packet Event, Receive a bonus", amount: "RM1" },
        { user: "mar***inn", text: "Participate Betting slip reward Event, Receive a bonus", amount: "RM16" },
        { user: "mar***inn", text: "Participate Rush through the coding Event, Receive a bonus", amount: "RM8" },
        { user: "yic***972", text: "Participate Next day red packet Event, Receive a bonus", amount: "RM1" },
        { user: "yic***972", text: "Participate Next day red packet Event, Receive a bonus", amount: "RM1" },
        { user: "yic***972", text: "Participate Next day red packet Event, Receive a bonus", amount: "RM1" },
        { user: "yic***972", text: "Participate Next day red packet Event, Receive a bonus", amount: "RM1" },
        { user: "yic***972", text: "Participate Next day red packet Event, Receive a bonus", amount: "RM1" },
      ],
    };
  },
};
</script>

<style scoped>
/* Vertical slider animation */
@keyframes slide-vertical {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.vertical-slider {
  animation: slide-vertical 10s linear infinite;
  display: flex;
  flex-direction: column;
  height: calc(100% * 0.5); /* Adjust this value based on the number of messages */
}

.vertical-slider > div {
  flex-shrink: 0;
}
</style>

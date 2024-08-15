<template>
  <div class="bg-gray-900 w-full px-4 py-8 text-white">
    <!-- Reviews Header -->
    <div class="flex items-center mb-6">
      <h1 class="text-xl font-semibold">Reviews</h1>
    </div>

    <!-- Horizontal Slider with Hidden Scrollbar and Border Animation -->
    <div class="overflow-x-auto flex space-x-4 hide-scrollbar px-2">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="bg-gray-800 p-4 rounded-lg shadow-lg min-w-[250px] max-w-[300px] flex-shrink-0 border-animated"
      >
        <h3 class="text-yellow-400 font-semibold text-lg mb-3">{{ review.title }}</h3>
        <p class="text-sm mb-4 line-clamp-3">{{ review.content }}</p>
        <div class="flex items-center mb-2">
          <div class="flex items-center mr-2">
            <span v-for="i in 5" :key="i" class="text-yellow-400 mr-1">★</span>
          </div>
          <span class="text-sm">From: {{ review.author }}</span>
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
/* Custom border animation effect */
.border-animated {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.border-animated::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, #3b82f6, transparent);
  animation: rotate-border 4s linear infinite;
}

@keyframes rotate-border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.border-animated::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: inherit;
  z-index: 1;
}

.border-animated > * {
  position: relative;
  z-index: 2;
}

/* Hiding the scrollbar */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Limiting the number of lines for content text */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Ensuring that the cards match the design above */
.overflow-x-auto {
  padding-bottom: 16px;
}

.bg-gray-800 {
  transition: transform 0.3s ease;
}

.bg-gray-800:hover {
  transform: scale(1.05);
}
</style>

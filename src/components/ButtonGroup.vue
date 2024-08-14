<template>
  <div class="bg-gray-900 p-4 flex items-center overflow-x-auto w-full">
    <!-- Scroll Left Button -->
    <button @click="scrollLeft" class="bg-gray-800 text-white p-2 rounded-lg mr-2 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <!-- Button Group with Horizontal Scroll -->
    <div ref="scrollContainer" class="flex space-x-2 overflow-x-auto scrollbar-hide w-full">
      <div v-for="(button, index) in buttons" :key="index" class="flex flex-col items-center flex-grow">
        <button class="bg-gray-800 hover:bg-gray-700 p-2 sm:p-4 rounded-lg flex flex-col items-center justify-center space-y-2 w-full">
          <img :src="button.icon" :alt="button.label" class="w-8 h-8 sm:w-12 sm:h-12" />
          <span class="text-white text-xs sm:text-sm">{{ button.label }}</span>
        </button>
      </div>
    </div>
  
    <!-- Scroll Right Button -->
    <button @click="scrollRight" class="bg-gray-800 text-white p-2 rounded-lg ml-2 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
import icon_slot from '../assets/icon-buttongroup/Slots.png';
import icon_fishing from '../assets/icon-buttongroup/Fishing.png';
import icon_casino from '../assets/icon-buttongroup/Casino.png';

export default {
  name: 'ButtonGroup',
  data() {
    return {
      buttons: [
        { label: 'Sports', icon: icon_slot },
        { label: 'Casino', icon: icon_fishing },
        { label: 'Slots', icon: icon_casino },
        { label: 'Fishing', icon: icon_fishing },
        { label: 'Chess', icon: icon_casino },
        { label: 'Animal', icon: icon_casino },
      ],
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.scrollContainer.scrollBy({ left: -150, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.scrollContainer.scrollBy({ left: 150, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
/* Hide the scrollbar on mobile devices */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

/* Ensure the container is responsive */
.bg-gray-900 {
  width: 100%;
}

.flex-shrink-0 {
  flex-shrink: 0;
}
</style>

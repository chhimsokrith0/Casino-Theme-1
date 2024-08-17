<template>
  <div class="bg-gray-900 p-2 flex items-center overflow-x-auto w-full">
    <!-- Button Group with Horizontal Scroll -->
    <div ref="scrollContainer" class="flex space-x-2 overflow-x-auto scrollbar-hide w-full">
      <div v-for="(button, index) in buttons" :key="index" class="flex flex-col items-center flex-grow">
        <button 
          @click="setActive(index); navigateTo(button.route)"
          :class="[
            'p-2 sm:p-4 rounded-lg flex flex-col items-center justify-center space-y-2 w-full transition-transform duration-300 ease-in-out',
            isActive(index) ? 'bg-gray-700 text-yellow-400 animate-bounce' : 'bg-gray-800 hover:bg-gray-700 text-white hover:scale-105']">
          <img :src="button.icon" :alt="button.label" class="w-8 h-8 sm:w-12 sm:h-12 transition-transform duration-300 ease-in-out transform hover:scale-110" />
          <span :class="['text-xs sm:text-sm transition-colors duration-300', isActive(index) ? 'text-yellow-400' : 'text-white']">{{ $t(button.label) }}</span>
        </button>
      </div>
    </div>
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
      activeIndex: 0, // Track the active button index
      buttons: [
        { label: 'Sports', icon: icon_slot, route: '/sports' },
        { label: 'Casino', icon: icon_fishing, route: '/casino' },
        { label: 'Slots', icon: icon_casino, route: '/slots' },
        { label: 'Fishing', icon: icon_fishing, route: '/fishing' },
        { label: 'Chess', icon: icon_casino, route: '/chess' },
        { label: 'Animal', icon: icon_casino, route: '/animal' },
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
    navigateTo(route) {
      this.$router.push(route);
    },
    setActive(index) {
      this.activeIndex = index;
    },
    isActive(index) {
      return this.activeIndex === index;
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

/* Add bounce animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 0.5s infinite;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.10);
}
</style>

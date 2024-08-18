<template>
  <div class="min-h-screen bg-gray-900 text-white flex">
    <!-- Sidebar -->
    <div class="w-1/10 pl-2 rounded-r-lg flex flex-col space-y-2 sticky top-0 h-screen bg-gray-800">
      <!-- Buttons -->
      <template v-for="(button, index) in buttons" :key="index">
        <button
          :class="buttonClasses(button.active)"
          @click="handleClick(button.name)"
          class="flex flex-col items-center justify-center p-4 rounded-lg text-white"
        >
          <div :class="iconClasses(button.active)" class="w-8 h-8 rounded-full flex items-center justify-center mb-2">
            <i :class="button.icon"></i>
          </div>
          <span class="text-sm">{{ button.name }}</span>
        </button>
      </template>
    </div>

    <!-- Main Content -->
    <div class="w-4/5 p-2">
      <div class="space-y-4">
        <!-- Promos -->
        <template v-for="(promo, index) in promos" :key="index">
          <div class="bg-gray-800 rounded-lg flex flex-col items-center">
            <div class="w-full mb-2">
              <img :src="promo.image" :alt="promo.alt" class="w-full h-full object-cover rounded-lg">
            </div>
            <div class="text-center p-2">
              <p class="text-sm text-gray-400">{{ promo.text }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from '../assets/banner/1.jpg'
import banner2 from '../assets/banner/2.jpg'
import banner3 from '../assets/banner/3.jpg'
import banner4 from '../assets/banner/vanlencia.png'
export default {
  name: 'CustomLayout',
  data() {
    return {
      buttons: [
        { name: 'Integrated', icon: 'fas fa-th-large', active: true },
        { name: 'Sports', icon: 'fas fa-futbol', active: false },
        { name: 'Casino', icon: 'fas fa-dice', active: false },
        { name: 'Poker', icon: 'fas fa-poker-chip', active: false },
        { name: 'Animal', icon: 'fas fa-paw', active: false },
        { name: 'Esports', icon: 'fas fa-gamepad', active: false },
        { name: 'Slot', icon: 'fas fa-flag', active: false }
      ],
      promos: [
        { image: banner1, alt: 'PP88 Free Feast', text: 'High bonus returned immediately' },
        { image: banner2, alt: 'First Deposit Bonus', text: 'Hot event ongoing' },
        { image: banner3, alt: 'Surprises with Bets', text: 'Betting slip reward' },
        { image: banner4, alt: 'Breakthrough Betting', text: 'Claim the generous prize money' }
      ]
    };
  },
  methods: {
    handleClick(name) {
      console.log(`${name} button clicked`);
    },
    buttonClasses(active) {
      return active ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 hover:bg-gray-600';
    },
    iconClasses(active) {
      return active ? 'bg-white text-purple-600' : 'bg-gray-600';
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>

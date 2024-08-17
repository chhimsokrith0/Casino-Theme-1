<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      <TextLoopNotification />
      <ButtonLoginRegister />
      <ButtonGroup />
      
      <div class="bg-gray-900 text-white sm:p-8 w-full">
        <div class="px-4 py-6 sm:px-8 w-full">
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <!-- Image Cards -->
            <div
              v-for="slot in slots"
              :key="slot.title"
              class="relative rounded-lg overflow-hidden shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
              @click="navigateToGame(slot.route)"  
            >
              <img :src="slot.image" :alt="slot.title" class="w-full h-full object-cover mb-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonGroup from '../ButtonGroup.vue';
  import ButtonLoginRegister from '../ButtonLoginRegister.vue';
  import TextLoopNotification from '../TextLoopNotification.vue';
  
  import fishing1 from '../../assets/banner-fishing/fishing1.png';  // Replace with your actual image path
  import fishing2 from '../../assets/banner-fishing/fishing2.png';  // Replace with your actual image path
  
  export default {
    components: {
      ButtonGroup,
      ButtonLoginRegister,
      TextLoopNotification,
    },
    data() {
      return {
        slots: [
          { image: fishing1, title: 'Fishing Game 1', route: '/fishing-game-1' },
          { image: fishing2, title: 'Fishing Game 2', route: '/fishing-game-2' },
        ],
      };
    },
    methods: {
      navigateToGame(route) {
        this.$router.push(route); // Navigate to the specified route
      },
    },
  };
  </script>
  
  <style scoped>
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  .hover\:shadow-2xl:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }
  </style>
  
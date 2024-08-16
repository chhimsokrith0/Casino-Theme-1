<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      <TextLoopNotification />
      <ButtonLoginRegister />
      <ButtonGroup />
      <div class="bg-gray-900 text-white p-4 sm:p-8 w-full">
        <!-- Tabs for Hot Sports and E-Sports -->
        <div class="flex justify-between items-center mb-4 sm:mb-8">
          <button
            class="text-xl font-bold focus:outline-none p-2 w-1/2 sm:w-auto text-center animated-border"
            :class="{
              'active-tab': activeTab === 'hot-sports',
            }"
            @click="activeTab = 'hot-sports'"
          >
            Hot Sports
          </button>
          <button
            class="text-xl font-bold focus:outline-none p-2 w-1/2 sm:w-auto text-center animated-border"
            :class="{
              'active-tab': activeTab === 'e-sports',
            }"
            @click="activeTab = 'e-sports'"
          >
            E-Sports
          </button>
        </div>
  
        <!-- Sports Cards -->
        <div
          v-if="activeTab === 'hot-sports'"
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <div
            v-for="(sport, index) in sports"
            :key="index"
            class="bg-gray-800 rounded-lg overflow-hidden shadow-lg animated-card"
          >
            <img :src="sport.image" alt="" class="w-full h-48 object-cover" />
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg sm:text-xl font-semibold">{{ sport.title }}</h3>
                <span
                  v-if="sport.hot"
                  class="text-xs sm:text-sm bg-red-500 text-white px-2 py-1 rounded-full"
                  >HOT</span
                >
              </div>
              <p class="text-xs sm:text-sm">{{ sport.description }}</p>
              <button
                class="mt-2 sm:mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded w-full"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
  
        <!-- E-Sports Cards -->
        <div
          v-if="activeTab === 'e-sports'"
          class="grid grid-cols-1"
        >
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg animated-card w-full">
            <img :src="esports.image" alt="" class="w-full h-48 object-cover" />
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg sm:text-xl font-semibold">{{ esports.title }}</h3>
                <span
                  v-if="esports.hot"
                  class="text-xs sm:text-sm bg-red-500 text-white px-2 py-1 rounded-full"
                  >HOT</span
                >
              </div>
              <p class="text-xs sm:text-sm">{{ esports.description }}</p>
              <button
                class="mt-2 sm:mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded w-full"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import sport1 from '../../assets/banner-sports/sport1.jpg';
  import sport2 from '../../assets/banner-sports/sport2.jpg';
  import sport3 from '../../assets/banner-sports/sport3.jpg';
  import sport4 from '../../assets/banner-sports/sport4.jpg';
  import sport5 from '../../assets/banner-sports/sport5.jpg';
  import esportsImage from '../../assets/banner-sports/sport_tfgmaing.jpg';
  import ButtonGroup from '../ButtonGroup.vue';
  import ButtonLoginRegister from '../ButtonLoginRegister.vue';
  import TextLoopNotification from '../TextLoopNotification.vue';
  
  export default {
    components: {
      ButtonGroup,
      ButtonLoginRegister,
      TextLoopNotification,
    },
    data() {
      return {
        activeTab: 'hot-sports',
        sports: [
          {
            title: 'SABA Sports',
            description: 'Live',
            image: sport1,
            hot: true,
          },
          {
            title: 'BA88 Sports',
            description: 'Live',
            image: sport2,
            hot: true,
          },
          {
            title: 'Crown Sports',
            description: 'Live',
            image: sport3,
            hot: false,
          },
          {
            title: 'CMD Sports',
            description: 'Live',
            image: sport4,
            hot: false,
          },
          {
            title: 'BTi Sports',
            description: 'Live',
            image: sport5,
            hot: false,
          },
        ],
        esports: {
          title: 'TFGAMING',
          description: 'Live',
          image: esportsImage,
          hot: true,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for animation effect */
  .animated-border {
    position: relative;
    display: inline-block;
    padding-bottom: 5px;
  }
  
  .animated-border::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: #ffa500;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }
  
  .animated-border:hover::before,
  .active-tab::before {
    width: 100%;
    left: 0;
  }
  
  button {
    transition: color 0.3s ease-in-out;
  }
  
  .active-tab {
    color: #ffa500;
  }
  
  button:hover {
    color: #ffa500;
  }
  
  /* Animation effect for grid items */
  .animated-card {
    position: relative;
    overflow: hidden;
    padding: 10px;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
  }
  
  .animated-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: #ffa500;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }
  
  .animated-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 0;
    height: 3px;
    background-color: #ffa500;
    transition: width 0.3s ease-in-out, right 0.3s ease-in-out;
  }
  
  .animated-card:hover::before,
  .animated-card:hover::after {
    width: 100%;
    left: 0;
    right: 0;
  }
  
  .animated-card:hover {
    transform: scale(1.05);
    border-color: #ffa500;
  }
  </style>
  
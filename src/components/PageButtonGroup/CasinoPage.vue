<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      <TextLoopNotification />
      <ButtonLoginRegister />
      <ButtonGroup />
      <div class="bg-gray-900 text-white p-4 sm:p-8 w-full">
        <!-- Tabs for Casino Categories -->
        <div class="flex justify-around items-center mb-4 sm:mb-8">
          <button
            class="text-lg font-bold focus:outline-none p-2"
            :class="{
              'border-b-4 border-yellow-400': activeTab === 'all',
              'text-yellow-400': activeTab === 'all',
            }"
            @click="activeTab = 'all'"
          >
            All
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2"
            :class="{
              'border-b-4 border-yellow-400': activeTab === 'evo-casino',
              'text-yellow-400': activeTab === 'evo-casino',
            }"
            @click="activeTab = 'evo-casino'"
          >
            EVO Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2"
            :class="{
              'border-b-4 border-yellow-400': activeTab === 'dg-casino',
              'text-yellow-400': activeTab === 'dg-casino',
            }"
            @click="activeTab = 'dg-casino'"
          >
            DG Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2"
            :class="{
              'border-b-4 border-yellow-400': activeTab === 'bg-casino',
              'text-yellow-400': activeTab === 'bg-casino',
            }"
            @click="activeTab = 'bg-casino'"
          >
            BG Casino
          </button>
        </div>
  
        <!-- Casino Grid for All -->
        <div
          v-if="activeTab === 'all'"
          class="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div
            v-for="(casino, index) in casinos"
            :key="index"
            class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg animated-card"
          >
            <img :src="casino.image" alt="" class="w-full h-full object-cover" />
            <!-- HOT Label -->
            <span
              v-if="casino.hot"
              class="absolute top-2 right-2 text-xs sm:text-sm bg-red-500 text-white px-2 py-1 rounded-full"
            >
              HOT
            </span>
          </div>
        </div>
        <!-- Casino Grid for EVO Casino -->
        <div v-if="activeTab === 'evo-casino'" class="grid grid-cols-3 md:grid-cols-3 gap-4">
            <div
            v-for="(casino, index) in evoCasinos"
            :key="index"
            class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg animated-card"
            >
            <img :src="casino.image" alt="" class="w-full h-full object-cover" />
            <!-- Game Title -->
            <div class="absolute bottom-2 left-2 right-2 text-center bg-black bg-opacity-60 text-white py-1 rounded-lg">
                {{ casino.title }}
            </div>
            </div>
        </div>
      </div>
    </div>
    <br><br><br>
  </template>
  
  <script>

  import casino1 from '../../assets/banner-casinos/all/casino1.png';
  import casino2 from '../../assets/banner-casinos/all/casino2.png';
  import casino3 from '../../assets/banner-casinos/all/casino3.png';
  import casino4 from '../../assets/banner-casinos/all/casino4.png';
  import casino5 from '../../assets/banner-casinos/all/casino5.png';
  import casino6 from '../../assets/banner-casinos/all/casino6.png';
  import casino7 from '../../assets/banner-casinos/all/casino7.png';
  import casino8 from '../../assets/banner-casinos/all/casino8.png';
  import evoCasino1 from '../../assets/banner-casinos/EVO_Casino/evo1.png';
  import evoCasino2 from '../../assets/banner-casinos/EVO_Casino/evo2.png';
  import evoCasino3 from '../../assets/banner-casinos/EVO_Casino/evo3.png';
  import evoCasino4 from '../../assets/banner-casinos/EVO_Casino/evo4.png';
  import evoCasino5 from '../../assets/banner-casinos/EVO_Casino/evo5.png';
  import evoCasino6 from '../../assets/banner-casinos/EVO_Casino/evo6.png';
  import evoCasino7 from '../../assets/banner-casinos/EVO_Casino/evo7.png';
  import evoCasino8 from '../../assets/banner-casinos/EVO_Casino/evo8.png';
  import evoCasino9 from '../../assets/banner-casinos/EVO_Casino/evo9.png';
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
        activeTab: 'all',
        casinos: [
          {
            image: casino1,
            hot: true,
          },
          {
            image: casino2,
            hot: true,
          },
          {
            image: casino3,
            hot: false,
          },
          {
            image: casino4,
            hot: true,
          },
          {
            image: casino5,
            hot: false,
          },
          {
            image: casino6,
            hot: false,
          },
          {
            image: casino7,
            hot: false,
          },
          {
            image: casino8,
            hot: false,
          },
        ],
        evoCasinos: [
            { image: evoCasino1, title: 'Lightning Baccarat' },
            { image: evoCasino2, title: 'Speed Baccarat' },
            { image: evoCasino3, title: 'No Commission Baccarat' },
            { image: evoCasino4, title: 'Super Sic Bo' },
            { image: evoCasino5, title: 'American Roulette' },
            { image: evoCasino6, title: 'Lightning Roulette' },
            { image: evoCasino7, title: 'Dragon Tiger' },
            { image: evoCasino8, title: 'Lightning Blackjack' },
            { image: evoCasino9, title: 'Free Bet Blackjack' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for animation effect */
  .animated-card {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
    height: 100%;
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
  
  button {
    transition: color 0.3s ease-in-out;
  }
  
  img {
    transition: transform 0.3s ease-in-out;
  }
  
  .animated-card:hover img {
    transform: scale(1.05);
  }
  </style>
  
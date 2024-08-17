<template>
  <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white">
    <TextLoopNotification />
    <ButtonLoginRegister />
    <ButtonGroup />
    <div class="bg-gray-900 text-white p-4 sm:p-8 w-full">
      <!-- Tabs for Casino Categories -->
      <div class="relative">
        <div class="flex justify-around items-center mb-4 sm:mb-8 overflow-x-auto whitespace-nowrap">
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('all')"
            @click="activeTab = 'all'"
          >
            All
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('evo-casino')"
            @click="activeTab = 'evo-casino'"
          >
            EVO Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('dg-casino')"
            @click="activeTab = 'dg-casino'"
          >
            DG Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('bg-casino')"
            @click="activeTab = 'bg-casino'"
          >
            BG Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('ae-casino')"
            @click="activeTab = 'ae-casino'"
          >
            AE Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('ag-casino')"
            @click="activeTab = 'ag-casino'"
          >
            AG Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('wm-casino')"
            @click="activeTab = 'wm-casino'"
          >
            WM Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('sa-casino')"
            @click="activeTab = 'sa-casino'"
          >
            SA Casino
          </button>
          <button
            class="text-lg font-bold focus:outline-none p-2 border-b-4"
            :class="activeTabClass('we-casino')"
            @click="activeTab = 'we-casino'"
          >
            WE Casino
          </button>
        </div>
      </div>

      <!-- Animated Tab Content -->
      <transition name="fade" mode="out-in">
        <div :key="activeTab">
          <!-- Casino Grid for All -->
          <div v-if="activeTab === 'all'" class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="(casino, index) in casinos"
              :key="index"
              class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img :src="casino.image" alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
              <span
                v-if="casino.hot"
                class="absolute top-2 right-2 text-xs sm:text-sm bg-red-500 text-white px-2 py-1 rounded-full"
              >
                HOT
              </span>
            </div>
          </div>

          <!-- Casino Grid for EVO Casino -->
          <div v-if="activeTab === 'evo-casino'" class="grid grid-cols-3 gap-4">
            <div
              v-for="(casino, index) in evoCasinos"
              :key="index"
              class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img :src="casino.image" alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
              <div class="absolute bottom-2 left-2 right-2 text-center bg-black bg-opacity-60 text-white py-1 rounded-lg">
                {{ casino.title }}
              </div>
            </div>
          </div>

          <!-- Casino Grid for DG Casino -->
          <div v-if="activeTab === 'dg-casino'" class="grid grid-cols-3 gap-4">
            <div
              v-for="(casino, index) in dgCasinos"
              :key="index"
              class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img :src="casino.image" alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
              <div class="absolute bottom-2 left-2 right-2 text-center bg-black bg-opacity-60 text-white py-1 rounded-lg">
                {{ casino.title }}
              </div>
            </div>
          </div>

          <!-- Casino Grid for BG Casino -->
          <div v-if="activeTab === 'bg-casino'" class="grid grid-cols-3 gap-4">
            <div v-for="(casino, index) in bgCasinos" :key="index" class="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img :src="casino.image" alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
              <div class="absolute bottom-2 left-2 right-2 text-center bg-black bg-opacity-60 text-white py-1 rounded-lg">
                {{ casino.title }}
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
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

import dgCasino1 from '../../assets/banner-casinos/DG_Casino/dg1.png';
import dgCasino2 from '../../assets/banner-casinos/DG_Casino/dg2.png';
import dgCasino3 from '../../assets/banner-casinos/DG_Casino/dg3.png';
import dgCasino4 from '../../assets/banner-casinos/DG_Casino/dg4.png';
import dgCasino5 from '../../assets/banner-casinos/DG_Casino/dg5.png';
import dgCasino6 from '../../assets/banner-casinos/DG_Casino/dg6.png';
import dgCasino7 from '../../assets/banner-casinos/DG_Casino/dg7.png';
import dgCasino8 from '../../assets/banner-casinos/DG_Casino/dg8.png';
import dgCasino9 from '../../assets/banner-casinos/DG_Casino/dg9.png';

import bgCasino1 from '../../assets/banner-casinos/BG_Casino/bg1.png';
import bgCasino2 from '../../assets/banner-casinos/BG_Casino/bg2.png';
import bgCasino3 from '../../assets/banner-casinos/BG_Casino/bg3.png';
import bgCasino4 from '../../assets/banner-casinos/BG_Casino/bg4.png';
import bgCasino5 from '../../assets/banner-casinos/BG_Casino/bg5.png';
import bgCasino6 from '../../assets/banner-casinos/BG_Casino/bg6.png';
import bgCasino7 from '../../assets/banner-casinos/BG_Casino/bg7.png';
import bgCasino8 from '../../assets/banner-casinos/BG_Casino/bg8.png';
import bgCasino9 from '../../assets/banner-casinos/BG_Casino/bg9.png';

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
        { image: casino1, hot: true },
        { image: casino2, hot: true },
        { image: casino3, hot: false },
        { image: casino4, hot: true },
        { image: casino5, hot: false },
        { image: casino6, hot: false },
        { image: casino7, hot: false },
        { image: casino8, hot: false },
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
      dgCasinos: [
        { image: dgCasino1, title: 'BACCARAT' },
        { image: dgCasino2, title: 'BID BACCARAT' },
        { image: dgCasino3, title: 'INBACCARAT' },
        { image: dgCasino4, title: 'DRAGON TIGER' },
        { image: dgCasino5, title: 'SITE DRAGON TIGER' },
        { image: dgCasino6, title: 'ROULETTE' },
        { image: dgCasino7, title: 'SEDIE' },
        { image: dgCasino8, title: 'FANTAN' },
        { image: dgCasino9, title: 'SITE BACCARAT' },
      ],
      bgCasinos: [
        { image: bgCasino1,  title: "BACCARAT" },
        { image: bgCasino2, title: "SPEED BACCARAT" },
        { image: bgCasino3, title: "FULLCOLOR BACCARAT" },
        { image: bgCasino4, title: "ROULETTE" },
        { image: bgCasino5, title: "SICBO" },
        { image: bgCasino6, title: "BULLBULL" },
        { image: bgCasino7, title: "MICARD BACCARAT" },
        { image: bgCasino8, title: "SEDIE" },
        { image: bgCasino9, title: "WINTHREECARDS" }
      ],
    };
  },
  methods: {
    activeTabClass(tab) {
      return this.activeTab === tab ? 'border-yellow-400 text-yellow-400' : 'border-transparent';
    },
  },
};
</script>

<style scoped>
button {
  transition: color 0.3s ease-in-out;
}

img {
  transition: transform 0.3s ease-in-out;
}

/* Transition for the tab content */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  display: none;
}
</style>

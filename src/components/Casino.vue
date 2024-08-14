<template>
    <div class="bg-gray-900 min-h-screen p-6 text-white">
      <!-- Header Section -->
      <div class="flex items-center mb-6">
        <span class="text-2xl font-bold mr-2">👍 Hot</span>
      </div>
  
      <!-- Casino Games Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(game, index) in games" :key="index" class="relative bg-gray-800 rounded-lg overflow-hidden">
          <img :src="game.image" :alt="game.name" class="w-full h-full object-cover rounded-lg">
          <div v-if="game.isHot" class="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            HOT
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent text-center">
            <span class="text-sm font-semibold">{{ game.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import game1 from '../assets/image-casino/Dreamgaming.png';
  import game2 from '../assets/image-casino/sexy.png';
  import game3 from '../assets/image-casino/saba_sports.png';
  import game4 from '../assets/image-casino/jili.png';
  import game5 from '../assets/image-casino/habanero.png';
  import game6 from '../assets/image-casino/ky_poker.png';
  import game7 from '../assets/image-casino/pragmatic_play.png';
  import game8 from '../assets/image-casino/cq9.png';
  import game9 from '../assets/image-casino/tfgaming.png'
  
  export default {
    name: 'Casino',
    data() {
      return {
        games: [
          { name: 'DreamGaming', image: game1, isHot: true },
          { name: 'AE Sexy', image: game2, isHot: true },
          { name: 'SABA Sports', image: game3, isHot: true },
          { name: 'JILI', image: game4, isHot: true },
          { name: 'Habanero', image: game5, isHot: false },
          { name: 'KY Poker', image: game6, isHot: true },
          { name: 'Pragmatic Play', image: game7, isHot: true },
          { name: 'CQ9 Gaming', image: game8, isHot: false },
          { name: 'TFGaming', image: game8, isHot: false },
          { name: 'TFGaming', image: game9, isHot: false }, // Use another image for unique content
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for the "HOT" label */
  .hot-label {
    background-color: #ff5722; /* Orange color for the HOT label */
    color: #fff;
    padding: 2px 6px;
    font-size: 10px;
    border-radius: 12px;
    position: absolute;
    top: 8px;
    right: 8px;
  }
  </style>
  
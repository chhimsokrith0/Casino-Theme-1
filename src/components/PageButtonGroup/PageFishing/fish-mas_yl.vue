<template>
    <div class="bg-gray-900 min-h-screen text-white">
      <!-- Header Section -->
      <header class="flex items-center justify-between p-4 bg-gray-800">
        <button class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 class="text-lg font-bold">Fishing</h1>
        <button class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </header>
  
      <!-- Logos and Filter Section -->
      <div class="flex items-center justify-start px-4 py-2 space-x-4">
        <!-- Filter Section -->
        <div class="flex items-center space-x-2 w-full">
          <select v-model="selectedFilter" class="bg-gray-700 text-white px-3 py-2 rounded-lg">
            <option value="default">Default</option>
            <option value="rtp">RTP</option>
            <option value="a-z">Letter a-z</option>
            <option value="z-a">Letter z-a</option>
          </select>
          <div class="relative w-full">
            <input v-model="searchQuery" type="text" placeholder="Search game" class="bg-gray-700 text-white px-3 py-2 rounded-lg w-full pl-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
            </svg>
          </div>
        </div>
      </div>
  
      <!-- Category Filter Section -->
      <div class="flex justify-around text-center py-2 bg-gray-800">
    <div class="text-blue-500">
        <!-- Icon for All -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        <span>All</span>
    </div>
    <div class="text-yellow-500">
        <!-- Icon for Hot -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8" />
        </svg>
        <span>Hot</span>
    </div>
    <div class="text-green-500">
        <!-- Icon for Newest -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11l-7 7-7-7" />
        </svg>
        <span>Newest</span>
    </div>
</div>
  
      <!-- Game Grid Section -->
      <div class="grid grid-cols-3 sm:grid-cols-3 gap-4 p-4">
        <div v-for="game in filteredGames" :key="game.title" class="relative text-center">
          <div class="aspect-w-1 aspect-h-1">
            <img :src="game.image" :alt="game.title" class="rounded-lg w-full h-full object-cover">
          </div>
          <p class="mt-2">{{ game.title }}</p>
          <p class="text-sm text-gray-400">Return Rate: {{ game.returnRate }}</p>
        </div>
      </div>
  
      <!-- End of List Indicator -->
      <div class="text-center py-4">
        <span class="text-gray-500">no more</span>
      </div>
    </div>
  </template>
  
  
  <script>
    import fish1 from '../../../assets/banner-fishing/fish-mas_yi/fish-mas_yl1.png';
    import fish2 from '../../../assets/banner-fishing/fish-mas_yi/fish-mas_yl2.png';
    import fish3 from '../../../assets/banner-fishing/fish-mas_yi/fish-mas_yl3.png';
    import fish4 from '../../../assets/banner-fishing/fish-mas_yi/fish-mas_yl4.png';

    export default {
    data() {
        return {
        searchQuery: '',
        selectedFilter: 'default',
        games: [
            { image: fish1, title: 'Fishing 2', returnRate: '96.06%' },
            { image: fish2, title: 'Shark Hunter', returnRate: '94.90%' },
            { image: fish3, title: 'New Fishing Season', returnRate: '96.11%' },
            { image: fish4, title: 'Jackpot Fishery', returnRate: '96.15%' },
        ],
        };
    },
    computed: {
        filteredGames() {
        let filtered = this.games.filter((game) =>
            game.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

        if (this.selectedFilter === 'rtp') {
            return filtered.sort((a, b) => parseFloat(b.returnRate) - parseFloat(a.returnRate));
        } else if (this.selectedFilter === 'a-z') {
            return filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (this.selectedFilter === 'z-a') {
            return filtered.sort((a, b) => b.title.localeCompare(a.title));
        }

        return filtered;
        },
    },
    };

  </script>
  
  <style scoped>
  .aspect-w-1 {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* Maintain a square aspect ratio */
  }
  .aspect-w-1 img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  
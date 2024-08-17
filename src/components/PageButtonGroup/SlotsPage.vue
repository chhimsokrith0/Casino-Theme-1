<template>
    <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      <TextLoopNotification />
      <ButtonLoginRegister />
      <ButtonGroup />
      
      <div class="bg-gray-900 text-white sm:p-8 w-full">
        <div class="px-4 py-6 sm:px-8 w-full">
          <div class="grid grid-cols-3 sm:grid-cols-3 gap-4">
            <div
              v-for="slot in slots"
              :key="slot.title"
              class="relative rounded-lg overflow-hidden shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img :src="slot.image" alt="" class="w-full h-full object-cover mb-2" />
              
              <span
                v-if="slot.hot"
                class="absolute top-2 right-2 text-xs sm:text-sm bg-red-500 text-white px-2 py-1 rounded-full"
              >
                HOT
              </span>
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
  
    
    import slot1 from '../../assets/banner-slots/1hot.webp';
    import slot2 from '../../assets/banner-slots/2jili.webp';
    import slot3 from '../../assets/banner-slots/3pragmatic_play.webp';
    import slot4 from '../../assets/banner-slots/4afb.webp';
    import slot5 from '../../assets/banner-slots/5habanero.webp';
    import slot6 from '../../assets/banner-slots/6jdb.webp';
    import slot7 from '../../assets/banner-slots/7mari_club.webp';
    import slot8 from '../../assets/banner-slots/8spadegaming.webp';
    import slot9 from '../../assets/banner-slots/10nextspin.webp';
    import slot10 from '../../assets/banner-slots/11joker.webp';
    import slot11 from '../../assets/banner-slots/12aviator.webp';
    import slot12 from '../../assets/banner-slots/13mega888.webp';
    import slot13 from '../../assets/banner-slots/14918kiss.webp';
    import slot14 from '../../assets/banner-slots/cq9.webp';
    export default {
      components: {
        ButtonGroup,
        ButtonLoginRegister,
        TextLoopNotification
      },
      data() {
        return {
          slots: [
            { image: slot1, title: 'SLOTS', hot: true },
            { image: slot2, title: 'JILI', hot: true },
            { image: slot3, title: 'PRAGMATIC PLAY', hot: true },
            { image: slot4, title: 'AFB', hot: false },
            { image: slot5, title: 'HABANERO', hot: false },
            { image: slot6, title: 'JB', hot: false },
            { image: slot7, title: 'PRAGMATIC PLAY', hot: false },
            { image: slot8, title: 'AFB', hot: false },
            { image: slot9, title: 'HABANERO', hot: false },
            { image: slot10, title: 'JB', hot: false },
            { image: slot11, title: 'PRAGMATIC PLAY', hot: false },
            { image: slot12, title: 'AFB', hot: false },
            { image: slot13, title: 'HABANERO', hot: false },
            { image: slot14, title: 'JB', hot: false },
          ],
        }
      }
    }
  </script>
  
  <style scoped>
    
    .hover\:scale-105:hover {
      transform: scale(1.05);
    }
    .hover\:shadow-2xl:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }
  </style>
  
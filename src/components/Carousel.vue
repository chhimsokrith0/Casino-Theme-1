<template>
    <div class="relative w-full mx-auto overflow-hidden">
      <!-- Slides -->
      <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
            <img :src="slide.image" :alt="`Slide ${index + 1}`" class="w-full h-auto rounded-lg object-cover" />
          </div>
        </div>
  
        <!-- Custom Pagination -->
        <div class="swiper-pagination"></div>
  
        <!-- Navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css';
  import banner1 from '../assets/banner/1.jpg';
  import banner2 from '../assets/banner/2.jpg';
  import banner3 from '../assets/banner/3.jpg';
  
  export default {
    name: 'Carousel',
    data() {
      return {
        swiper: null,
        slides: [
          { image: banner1 },
          { image: banner2 },
          { image: banner3 },
        ],
      };
    },
    mounted() {
      this.swiper = new Swiper(this.$refs.swiperContainer, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
      });
    },
  };
  </script>
  
  <style scoped>
  .swiper-container {
    width: 100%;
    height: auto;
  }
  
  .swiper-slide img {
    border-radius: 0.5rem;
    max-height: 300px;
    object-fit: cover;
  }
  
  @media (min-width: 640px) {
    .swiper-slide img {
      max-height: 400px;
    }
  }
  
  @media (min-width: 1024px) {
    .swiper-slide img {
      max-height: 500px;
    }
  }
  
  /* Custom pagination bullets */
  .custom-bullet {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    opacity: 1;
  }
  
  .custom-bullet-active {
    background-color: #FFD700;
    width: 20px;
    border-radius: 5px;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
  </style>
  
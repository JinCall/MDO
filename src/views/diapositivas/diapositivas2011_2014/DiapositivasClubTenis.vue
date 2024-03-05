<template>
  <div class="">
    <router-link to="/proyectos/2011-2014" class="backContainer">
    <div class="arrow back"></div>
    </router-link>
    <Loader :class="{ off : loaded }"/>
    <Carousel class="carousel" v-slot="{ currentSlide }">
        <Slide>
            <div class="slide__info">
                <div class="logoWrapper">
                <div class="slide__info__logo" :class="{active : currentSlide === 1}">
                    <img :src="require(`../../../assets/${carouselSlide.logo}.png`)" alt="" >
                </div>
              </div>
                <div class="slide__info__text">
                    <h1 :class="{active : currentSlide === 1}" class="slide__info__title">{{ carouselSlide.presentation.title }}</h1>
                    <p :class="{active : currentSlide === 1}" class="slide__info__description">{{ carouselSlide.presentation.description }}</p>
                    <p :class="{active : currentSlide === 1}" class="slide__info__date">{{ carouselSlide.presentation.date }}</p>
                </div>
            </div>
        </Slide>
        <Slide v-for="(slide, index) in carouselSlide.img" :key="index">
            <div v-show="currentSlide === index + 2" class="slide__info img">
                <div class="slide__imgWrapper">
                    <img  class="slide__info__img" :src="require(`../../../assets/diapositivas/2011-2014/ricazuelas/${slide.img}.jpg`)" alt="slide img">
                    <img  class="slide__info__img" :src="require(`../../../assets/diapositivas/2011-2014/ricazuelas/${slide.img}.jpg`)" alt="slide img">
                </div>
            </div>
        </Slide>
    </Carousel>
    </div>
    <router-view/>
</template>
  
<script>

import Carousel from '../../../components/Carousel.vue'
import Slide from '../../../components/Slide.vue'
import Loader from '../../../components/Loader.vue'
import { ref, onMounted, nextTick } from 'vue';

export default {
  name: 'ChalouhView',
  components: {
    Carousel,
    Slide,
    Loader
  },

  setup() {
    const carouselSlide = {
      logo: "logoMdo",
        presentation: {
        title: "CLUB DE TENNIS LOMAS",
        description: "Desarrollo de proyecto conceptual y renders de remodelación.",
        date: "MDO.ARQUITECTURA.2011-2014"
        },
        img: [
            {
            img: "1"
            },
            {
            img: "2"
            }, 
            {
            img: "3"
            }
        ]
    };

    const loaded = ref(false);

    onMounted(async () => {
      await nextTick();

      const images = document.querySelectorAll('.slide__info__img');
      const totalImages = images.length;

      let imagesCount = 0;

      const addImageCount = () => {
        imagesCount++;
        if (imagesCount === totalImages) {
          loaded.value = true;
        }
      }

      images.forEach((image) => {
        image.addEventListener('load', addImageCount);
      })
    })
    
    return { carouselSlide, loaded };
  },
};
  
  
</script>
  
<style>


  .carousel {
    min-height: 100vh;
  }
  
  .slide__info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 2!important;
  }
  
  .slide__info.img {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    height: 100vh;
  }
  .logoWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -15%;
  }

  .slide__info__text {
    margin: 0;
    margin-top: 14rem;
  }
  
  .slide__imgWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide__info__img:nth-child(1) {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
    margin-left: 2px;
  }

  .slide__info__img:nth-child(2) {
    clip-path: polygon(100% 0, 50% 0, 50% 100%, 100% 100%);
  }
  
  .slide__info__img {
    object-fit: cover;
    min-width: 100%;
    height: auto;
    display: flex;
    transition: all 1s;
    position: absolute;
  }
  
  
  .slide__info__logo {
      width: 290px;
      height: 290px;
      background-color: #000;
      border: dotted #a2a2a2 4px;
      border-radius: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      scale: 0.9;
      margin-left: -125%;
      animation: fade-out 1s linear forwards;
  }

  .slide__info__logo img {
    object-fit: contain;
  }
  
  .slide__info__logo.active {
    animation: rotate 1s linear forwards, roll 1s linear forwards, fade-in 1s linear forwards;
    scale: 1;
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }

    100% {
        opacity: 0!important;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
        opacity: 1;
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes roll {
    100% {
      margin-left: 0;
    }
  }

  .slide__info__logo img {
    width: 220px;
    height: 175px;
    scale: .85;
  }
  
  .slide__info__title {
    opacity: 0;
    margin-top: 4rem;
    transition: 1s;
  }
  
  .slide__info__title.active {
    opacity: 1;
    margin-top: 0;
  }
  
  .slide__info__date, .slide__info__description {
    opacity: 0;
    transition: all 2s;
  }
  
  .slide__info__date.active, .slide__info__description.active {
    opacity: 1;
  }
  
  .slide__info__date, .slide__info__description {
      margin-top: 1rem;
  }
  
  .slide__info__description {
      color:#fff
  }
  
  .slide__info__date, .slide__info__title {
      color: #f87c00;
  }
  
  .slide__info__img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    .slide__info__logo {
      margin-left: -150%;
    }
  }

  @media (max-width: 790px) {

    .slide__info__text{
      margin-top: 15rem;
    }
  }

  @media (max-width: 600px) {
    .slide__info__img {
      transform: scale(0.4);
    }
  }

  @media (max-width: 540px) {
    .slide__info__logo {
      margin-left: -170%;
    }
  }

  @media (max-width: 390px) {
    .slide__info__logo {
      margin-left: -190%;
    }
  }
  
  </style>
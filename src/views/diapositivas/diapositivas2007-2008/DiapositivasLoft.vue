<template>
    <div class="">
    <router-link to="/proyectos/2007-2008" class="backContainer">
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
                    <img class="slide__info__img" :src="require(`../../../assets/diapositivas/2007-2008/loft/${slide.img}.jpg`)" alt="slide img">
                    <img class="slide__info__img" :src="require(`../../../assets/diapositivas/2007-2008/loft/${slide.img}.jpg`)" alt="slide img">
                </div>
            </div>
        </Slide>
    </Carousel>
    </div>
    <router-view/>
</template>
  
<script>
import Loader from '@/components/Loader.vue'
import Carousel from '../../../components/Carousel.vue'
import Slide from '../../../components/Slide.vue'
import { ref, onMounted, nextTick } from 'vue'

export default {
    name: 'LoftView',
    components: {
    Carousel, Slide,
    Loader
},
    
    setup() {
    const carouselSlide = {
        logo: "logoMdo",
        presentation: {
        title: "LOFT",
        description: "Desarrollo de proyecto conceptual y renders.",
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
            },
            {
            img: "4"
            },
            {
            img: "5"
            },
            {
            img: "6"
            },
            {
            img: "7"
            }
        ]
    }
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
        console.log(loaded.value)
      }

      images.forEach((image) => {
        image.addEventListener('load', addImageCount);
      })
    })
    
    return { carouselSlide, loaded };
    }
}
</script>

<style scoped>
</style>
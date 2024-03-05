<template>
    <div class="servicios">
      <div class="serviciosWrapper">
        <div class="servicios__header">
          <img src="../assets/logoMdo.png" alt="logo de Mdo" class="servicios__header__logo">
          <h1 class="servicios__header__title">Servicios</h1>
        </div>
        <div class="servicios__info">
            <div class="servicios__info__container">
              <ul class="servicios__info__container__list">
                <li @mouseover="hover1 = true" @mouseleave="hover1 = false" class="servicios__info__container__list__item" id="img1"> 
                  <span class="servicios__info__container__list__item__title">Proyecto</span>
                  <span class="servicios__info__container__list__item__text">Conceptual</span>
                  <img :class="{on1: hover1}" class="img1" src="../assets/servicios/1.jpg" alt="">
                </li>
                <li @mouseover="hover2 = true" @mouseleave="hover2 = false" class="servicios__info__container__list__item" id="img2"> 
                  <span class="servicios__info__container__list__item__title">Proyecto</span>
                  <span class="servicios__info__container__list__item__text">Arquitectonico</span>
                  <img :class="{on2: hover2}" class="img2" src="../assets/servicios/2.jpg" alt="">
                </li>
                <li @mouseover="hover3 = true" @mouseleave="hover3 = false" class="servicios__info__container__list__item" id="img3"> 
                  <span class="servicios__info__container__list__item__title">Proyecto</span>
                  <span class="servicios__info__container__list__item__text">Ejecutivo</span>
                  <img :class="{on3: hover3}" class="img3" src="../assets/servicios/3.jpg" alt="">
                </li>
                <li @mouseover="hover4 = true" @mouseleave="hover4 = false" class="servicios__info__container__list__item" id="img4"> 
                  <span class="servicios__info__container__list__item__title">Perspectiva</span>
                  <span class="servicios__info__container__list__item__text">Digitales</span>
                  <img :class="{on4: hover4}" class="img4" src="../assets/servicios/4.jpg" alt="">
                </li>
                <li @mouseover="hover5 = true" @mouseleave="hover5 = false" class="servicios__info__container__list__item" id="img5"> 
                  <span class="servicios__info__container__list__item__title">Maquetas</span>
                  <span class="servicios__info__container__list__item__text">Virtuales</span>
                  <img :class="{on5: hover5}" class="img5" src="../assets/servicios/5.jpg" alt="">
                </li>
                <li @mouseover="hover6 = true" @mouseleave="hover6 = false" class="servicios__info__container__list__item" id="img6"> 
                  <span class="servicios__info__container__list__item__title">Desarrollo de</span>
                  <span class="servicios__info__container__list__item__text">Proyectos Especial</span>
                  <img :class="{on6: hover6}" class="img6" src="../assets/servicios/6.jpg" alt="">
                </li>
                <li @mouseover="hover7 = true" @mouseleave="hover7 = false" class="servicios__info__container__list__item" id="img7"> 
                  <span class="servicios__info__container__list__item__title">Proyecto</span>
                  <span class="servicios__info__container__list__item__text">Conceptual</span>
                  <img :class="{on7: hover7}" class="img7" src="../assets/servicios/7.jpg" alt="">
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
  const hover1 = ref(false);
  const hover2 = ref(false); 
  const hover3 = ref(false); 
  const hover4 = ref(false); 
  const hover5 = ref(false); 
  const hover6 = ref(false); 
  const hover7 = ref(false);  
</script>

<style>
.servicios {
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.serviciosWrapper {
  width: 100%;
  min-height: 10%;
  background-color: #000;
}

.servicios__header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  flex-direction: column;
  margin-bottom: 1rem;
}

.servicios__header__logo {
  width: 200px;
  margin-right: 40%;
}


.servicios__header__title {
  color: #f87c00;
  margin-bottom: 6rem;
}

.servicios__info {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.servicios__info__container{
  width: 70%;
  height: 100%;
  margin-bottom: 2rem;
}

.servicios__info__container__list {
  list-style: none;
  width: 50%;
  height: 110%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
}

.servicios__info__container__list__item {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0.8rem 0.8rem 0.5rem 1rem;
  transition: 400ms;
  border-right: #f87c00 3px solid;
}

.servicios__info__container__list__item:hover {
  background-color: #f87c00;
  border-right: #000 3px solid;
}

.servicios__info__container__list__item:hover .servicios__info__container__list__item__title {
  color: #000;
}

.servicios__info__container__list__item:hover .servicios__info__container__list__item__text {
  color: #fff;
}

.servicios__info__container__list__item__title {
  font-style: italic;
  color: #fff;
  transition: 400ms;
}

.servicios__info__container__list__item__text {
  color: #f87c00;
  font-size: 1.2rem;
  transition: 400ms;
}

.img1, .img2, .img3 , .img4 , .img5, .img6, .img7  {
  position: absolute;
  left: 50.04%;
  top: 1%;
  transition: all 400ms;
  visibility: hidden;
  animation: fade-out 400ms forwards;
}


.img1.on1, .img2.on2, .img3.on3 , .img4.on4 , .img5.on5, .img6.on6, .img7.on7 {
  animation: fade-in 400ms forwards ease-in-out;
  visibility: visible;
}

@keyframes fade-out {  
  100% {
    opacity: 0;
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

@media (max-width: 1220px) {
  .servicios__header {
    margin-top: 10rem;
  }
}

@media (max-width: 1070px) {
  .servicios__info__container__list__item {
    width: 100%;
  }
}

@media (max-width: 776px) {


  .servicios__header {
    height: 5rem;
    
    scale: 1.3;
  }

  .servicios__header__logo {
    display: none;
  }
}

@media (max-width: 730px) {
  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.8);
  }
}

@media (max-width: 640px) {
  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.8);
    left: 46%;
  }
  .servicios__info__container__list__item {
    padding-right: 1.75rem;
  }
}

@media (max-width: 600px) {
  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.7);
    left: 43%;
  }
}

@media (max-width: 530px) {
  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.65);
    left: 41%;
  }
  .servicios__info__container__list__item {
    padding-right: 2.25rem;
  }
}

@media (max-width: 500px) {
  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.6);
    left: 30%;
  }
  .servicios__info__container__list__item {
    padding-right: 0rem;
    border: none;
    width: 120%;
  }

  
  .servicios__info__container__list__item:hover {
      background: transparent;
      border: none;
  }

  .servicios__info__container__list__item:hover .servicios__info__container__list__item__title{
    color: #fff;
  }
}


@media (max-width: 490px) {

  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.55);
    left: 25%;
  }

  .servicios__info__container__list__item {
    padding-right: 2rem;
    width: 90%;
  }

  .servicios__header__title {
    margin-bottom: 0;
  }
}

@media (max-width: 380px) {

  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.5);
    left: 22%;
  }

  
  .servicios__info__container__list__item:hover .servicios__info__container__list__item__title {
    color: #f87c00;
  }

  .servicios__info__container__list__item:hover .servicios__info__container__list__item__text {
    color: #fff;
  }
  
}

@media (max-width: 340px) {

  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.45);
    left: 20%;
  }

  .servicios__info__container__list__item {
    padding-right: 0;
    width: 70%;
    margin-left: 2rem;
    padding-right: 3.5rem;
  }
}

@media (max-width: 320px) {

.img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
  transform: scale(0.4);
  left: 15%;
}

.servicios__info__container__list__item {
  padding-right: 0;
  width: 70%;
  border: none;
  margin-left: 2rem;
  padding-right: 3.5rem;
}
}

@media (max-width: 310px) {

  .img1, .img2, .img3 , .img4 , .img5, .img6, .img7 {
    transform: scale(0.4);
    left: 15%;
  }

  .servicios__info__container__list__item {
    padding-right: 0;
    width: 70%;
    border: none;
    margin-left: 2rem;
    padding-right: 3.5rem;
  }
}
</style>
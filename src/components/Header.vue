<template>
    <div class="header">
        <ul class="header__menu">
            <router-link @click="selectRoute(item.route)" v-for="(item, index) in headerItems" :to="item.route" :class="['link', 'header__menu__list' + item.title, { 'on': currentRoute === item.route }]" :key="index">
                <p class="text">{{ item.title }}</p>
            </router-link>
        </ul>
    </div>
    <div class="navbar" id="navbar">
        <div class="navbar__container" id="navbarContainer">
            <div class="navbar__container__header">
                <div @click="toggler = !toggler" :class="{ active: toggler }" class="toggler">
                    <span class="togglerBar"></span>
                    <span class="togglerBar"></span>
                    <span class="togglerBar"></span>
                </div>
            </div>
            <div  @click="toggler = !toggler" :class="{ active: toggler }" class="navbar__container__menu" id="navMenu">
                <router-link class="navbar__container__menu__link" id="btnH" to="/">Home</router-link>
                <router-link class="navbar__container__menu__link" id="btnN" to="/nosotros">Nosotros</router-link>
                <router-link class="navbar__container__menu__link" id="btnS" to="/servicios">Servicios</router-link>
                <router-link class="navbar__container__menu__link" id="btnP" to="/proyectos">Proyectos</router-link>
                <router-link class="navbar__container__menu__link" id="btnC" to="/contacto">Contact</router-link>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script setup> 
import { ref } from 'vue';

const toggler = ref(false);
const currentRoute = ref(window.location.pathname);
console.log(toggler.value)
const selectRoute = (route) => {
    currentRoute.value = route;
};


const headerItems = [
    { 
        title: 'H', 
        route: '/' 
    },
    { 
        title: 'N', 
        route: '/nosotros' 
    },
    { 
        title: 'S', 
        route: '/servicios' 
    },
    { title: 'P', 
    route: '/proyectos' 
    },
    { 
        title: 'C', 
        route: '/contacto' 
    },
];
</script>

<style>


    .link.on {
        background-color: #f87c00;
    }
    

    .link.on .text{
        color: #fff;
    }
    .header {
        height: 40px;
        width: 100%;
        background-color: #000;
    }

    .navbar {
        display: none;
    }

    .header__menu {
        height: 100%;
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .link {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        transition: 500ms;
        text-decoration: none;
    }

    .text {
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 1.25rem;
        transition: all 500ms;
    }

    .header__menu__listH  {
        background-color: #2e2e2e;
    }
    .header__menu__listN  {
        background-color: #4e4e4e;
    }
    .header__menu__listS  {
        background-color: #707070;
    }
    .header__menu__listP  {
        background-color: #989898;
    }

    .header__menu__listC {
        background-color: #c3c3c3;
    }

    .link:hover {
        background-color: #fff;
    }

    .link:hover .text {
        color: #000;
    }

@media (max-width: 1220px) {

    .header {
        display: none;
        width: 100vw;
    }

    .navbar {
        position: fixed;
        display: block;
        width: 100%;
        height: 4rem;
        z-index: 3;
    }

    .navbar__container {
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        height: 4rem;
        background-color: #000;
        position: relative;
    }

    .navbar__container__menu {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        flex-direction: column;
        top: 100%;
        right: -100%;
        width: 100%;
        background-color: #f87c00;
        transition: all 400ms;
    }

    .navbar__container__menu.active {
        right: 0;
    }

    .navbar__container__menu__link {
        padding: .5rem 0;
        text-decoration: none;
        color: #fff;
        border-bottom: 2px solid #fff;
        width: 100%;
        text-align: center;
    }

    .toggler {
        cursor: pointer;
        margin-right: auto;
        border: 4px solid white;
        border-radius: 15px;
        padding: 0.3rem 0.4rem;
        width: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-right: 0.5rem;
    }

    .toggler.active .togglerBar:nth-child(1) {
        transform: translateY(8px) rotate(40deg);
    }

    .toggler.active .togglerBar:nth-child(2) {
        opacity: 0;
    }

    .toggler.active .togglerBar:nth-child(3) {
        transform: translateY(-8px) rotate(-40deg);
    }

    .togglerBar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 300ms ease-in-out;
        background-color: white;
    }
}
</style>
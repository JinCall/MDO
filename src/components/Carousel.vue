<template>
    <slot :currentSlide="currentSlide" />
    <div @click="previous" class="arrow left" id="previous"></div>
    <div @click="next" class="arrow right" id="next"></div>
    <div class="pagination">
        <span @click="goToSlide(index)" class="pagination__page" v-for="(page, index) in getSlideCount" :key="index" :class="{active : index + 1 === currentSlide }"></span>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

/* eslint-disable */
export default {
    name: "Carousel",
    setup() {
        const currentSlide = ref(1);
        const getSlideCount = ref(null);


        const next = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
            console.log(currentSlide.value);
        };
        const previous = () => {
            if (currentSlide.value === 1) {
                currentSlide.value = getSlideCount.value;
                return;
            }
            currentSlide.value += -1;
        };
        const goToSlide = (index) => {
            currentSlide.value = index + 1;
        };
        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".slide").length;
        });
        return { currentSlide, next, previous, getSlideCount, goToSlide };
    },
}
</script>


<style>
.pagination {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
    gap: 1rem;
    z-index: 3!important;
}

.pagination__page {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 1px 1px rgb(132, 132, 132), inset 0 1px 1px rgba(0,0,0,0.1), 0 0 0 2px rgb(132, 132, 132);
    transition: all 200ms;
}

.pagination__page:hover {
    box-shadow: 0 1px 1px rgba(248,124,0,1), inset 0 1px 1px rgba(0,0,0,0.1), 0 0 0 5px rgba(248,124,0,1);
}

.pagination__page.active {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(248,124,0,1), inset 0 1px 1px rgba(0,0,0,0.1), 0 0 0 5px rgba(248,124,0,1);
    border: none;
}

.arrow {
    border: solid rgb(255, 255, 255);
    border-width: 0 6.5px 6.5px 0;
    display: inline-block;
    padding: 6.5px;
    transition: 400ms;
    z-index: 3!important;
    cursor: pointer;
}

.arrow:hover {
    border-color: #f87c00;
}

.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    right: 5%;
}

.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    position: absolute;
    top: 50%;
    left: 5%;
}

.backContainer {
    position: absolute;
    background-color: #f87c00;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 400ms;
    z-index: 3!important;
    top: 0;
}

.backContainer:hover {
    background-color: #fff;
}

.arrow.back {
    position: relative;
    z-index: 3!important;
}

.back {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    position: absolute;
    top: 5%;
    left: 5%;
}

@media (max-width: 500px) {

    .pagination {

    }
    .pagination__page {
        scale: 0.9;
    }
}
</style>
<template>
    <div class="slide">
        <transition name="split">
            <slot />
        </transition>
    </div>
</template>

<script>
/* eslint-disable */
export default  {
    name: "Slide"
}
</script>

<style>
.split-enter-active, .split-leave-active {
    transition: opacity 0.7s ease-in-out;
}

.split-enter-from, .split-leave-to  {
    opacity: 0;
}

.split-enter-from img:nth-child(1) {
    opacity: 1;
    transform: translateX(-100%);
}

.split-enter-from img:nth-child(2) {
    opacity: 1;
    transform: translateX(100%);
}

.split-leave-to img {
    opacity: 0;
    scale: 0.8;
    margin-left: 0;
}


.split-leave-to img:nth-child(2) {
    opacity: 0;
    scale: 0.8;
}

.split-enter-to, .split-leave-from {
    opacity: 1;
}

</style>
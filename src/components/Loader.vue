<template>
    <div class="loader" >
        <img src="../assets/Loader.svg" alt="" class="loader__img">
    </div>
</template>

<script setup> 
    
</script>

<style>
    .loader {
        position: absolute;
        height: 100vh;
        width: 100vw;
        color: #FFF;
        z-index: 40!important;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
    }

    .loader.off {
        display: none;
    }
</style>
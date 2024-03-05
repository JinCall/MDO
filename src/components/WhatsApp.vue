<template>
    <a href="https://wa.me/5520552181" class="whatsApp">
        <img src="../assets/whatsapp.png" alt="">
    </a>
</template>

<script>
export default {
    name: "WhatsApp"
}
</script>

<style>
    .whatsApp {
        height: 3.5rem;
        width: 3.5rem;
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 1;
    }

    .whatsApp img {
        width: 100%;
    }

    @media (max-width: 600px) {

        .whatsApp {
            bottom: 0;
            right: 0;
        }

        .whatsApp img {
        width: 80%;
        }
    }
</style>
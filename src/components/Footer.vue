<template>
    <div class="footer">
        <div class="footer__border"></div>
        <FooterDetail/>
    </div>
</template>

<script>
    import FooterDetail from './FoooterDetail.vue';

    export default {
        name: "FooterContact",
        components: {
            FooterDetail,
        }
    }
</script>

<style>
    .footer {
        background-color: #F87C00;
        width: 100vw;
        min-height: 155px;
        margin-top: auto;
        position: relative;
        overflow-x: hidden;
    }

    .footer__border {
        content: "";
        width: 100%;
        height: 10px;
        position: absolute;
        left: 0;
        top: 10px;
        background-image: radial-gradient(white 30%, transparent 30%);
        background-size: 15px;
        background-repeat: space;
    }
</style>

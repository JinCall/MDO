<template>
    <nav class="footer__info">
        <div class="footer__info__list">
            <a href="mailto:proyectos@mdoarquitectura.com" class="footer__info__list__link1"></a>
            <a href="https://www.facebook.com/mdoarquitectura?ref_type=bookmark" class="footer__info__list__link2"></a>
            <a href="https://twitter.com/MdOArq" class="footer__info__list__link3"></a>
            <a href="/contacto" class="footer__info__list__link4"></a>
        </div>
        <div class="footer__info__aviso">
            <a href="#/" class="footer__info__aviso__text">Aviso de privacidad</a>
        </div>
        <div class="footer__info__derechos">
            <p class="footer__info__derechos__text">Derechos Reservados ©<span class="date">{{ date }}</span></p>
        </div>
    </nav>
</template>

<script>
    export default {
    name: "FooterInfo",

    setup() {
        const date = new Date().getFullYear();

        return{date}
    }
}
</script>

<style>
        .footer__info {
        min-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .footer__info__list {
        width: 20%;
        display: flex;
        justify-content: center;
        list-style: none;
        margin-bottom: 5rem;
    }

    .footer__info__list__link1, .footer__info__list__link2, .footer__info__list__link3, .footer__info__list__link4 {
        transition: 500ms;
        min-width: 41px;
        min-height: 38px;
        margin-top: 10%;
    }

    .footer__info__list__link1 {
        background-image: url("../assets/footer/mail.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .footer__info__list__link2 {
        background-image: url("../assets/footer/facebook.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .footer__info__list__link3 {
        background-image: url("../assets/footer/twitter.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .footer__info__list__link4 {
        background-image: url("../assets/footer/phone.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .footer__info__list__link1:hover {
        background-image: url("../assets/footer/mail_ho.jpg");
    }

    .footer__info__list__link2:hover {
        background-image: url("../assets/footer/facebook_ho.jpg");
    }

    .footer__info__list__link3:hover {
        background-image: url("../assets/footer/twitter_ho.jpg");
    }

    .footer__info__list__link4:hover {
        background-image: url("../assets/footer/phone_ho.jpg");
    }

    .footer__info {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .footer__info__list {
        width: 20%;
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 5px 0;
        gap: 1rem;
    }

    .footer__info__aviso {
        margin-bottom: 5px;
    }

    .footer__info__aviso__text, .footer__info__derechos__text {
        font-size: .85rem;
    }

    .footer__info__aviso__text {
        text-decoration: none; 
        color: #000;
        transition: 500ms;
    }

    .footer__info__aviso__text:hover {
        color: #fff;
    }

    .footer__info__derechos__text {
        color: #fff;
    }

    @media (max-width: 670px) {
        .footer__info__list__link1, .footer__info__list__link2, .footer__info__list__link3, .footer__info__list__link4 {
        transition: 500ms;
        margin-top: 35%;
        scale: 1.2;
    }
    }
</style>
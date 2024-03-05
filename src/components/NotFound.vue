<template>
    <div class="notFound">
        <div class="notFound__container">
            <h1 class="notFound__container__text">404 ERROR PAGE NOT FOUND</h1>
            <router-link class="notFound__container__btn" to="/">
                <p>Regresar a inicio</p>
            </router-link>
        </div>
    </div>
    <router-view/>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style>
    .notFound {
        position: absolute;
        color: #fff;
        background-color: #000;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    .notFound__container {
        padding: 1rem 2rem;
    }

    .notFound__container__btn {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        color: #fff;
    }

    p {
        width: 100%;
        transition: 400ms;
    }

    .notFound__container__btn p:hover {
        text-decoration: underline;
        color: #F87C00;
    }
</style>
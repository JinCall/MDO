<template>
    <div class="home__container">
        <div class="home__mobile">
            <img class="home__mobile__img" src="../assets/1mobile.jpg" alt="">
        </div>
        <div class="homeWrapper">
            <router-link to="/proyectos" class="home__projects">
                <a class="home__projects__link1"></a>
                <a class="home__projects__link2"></a>
                <a class="home__projects__link3"></a>
                <a class="home__projects__link4"></a>
            </router-link>
        </div>
    </div>
    <router-view/>
</template>

<script>
    export default {
        name: "HomeProjects"
    }
</script>

<style>

    .home__mobile {
        display: none;
    }

    .home__projects__link1, .home__projects__link2, .home__projects__link3 ,.home__projects__link4 {
        width: 600px;
        height: 400px;
        transition: 500ms;
    }

    .home__projects__link1 {
        background-image: url("../assets/index1.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .home__projects__link2 {
        background-image: url("../assets/index2.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .home__projects__link3 {
        background-image: url("../assets/index4.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .home__projects__link4 {
        background-image: url("../assets/index5.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .home__projects__link1:hover {
        background-image: url("../assets/index1_h.jpg");
    }

    .home__projects__link2:hover {
        background-image: url("../assets/index2_h.jpg");
    }

    .home__projects__link3:hover {
        background-image: url("../assets/index4_h.jpg");
    }

    .home__projects__link4:hover {
        background-image: url("../assets/index5_h.jpg");
    }

    @media (max-width: 1220px) {
        .homeWrapper ,.home__projects__link1, .home__projects__link2, .home__projects__link3, .home__projects__link4 {
            display: none;
        }

        .home__container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            position: relative;
        }

        .home__mobile {
            z-index: 1;
            height: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
        }

        .home__mobile__img {
            width: 100%;
            height: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
            clip-path: polygon(0 0, 100% 0, 100% 97%, 0 97%);
            margin-top: 5%;
        }
    }
</style>
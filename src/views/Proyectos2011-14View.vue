<template>
    <div class="projectsList">
        <div class="projectsListWrapper">
            <router-link to="/proyectos">
                <div class="btn">
                    <div class="btn__line upper"></div>
                    <div class="btn__line lower"></div>
                </div>
            </router-link>
            <div class="projectsList__container">
                <h2 class="projectsList__container__title">Proyectos 2011 - 2014</h2>
                <div class="projectsList__container__projects">
                    <router-link to="/proyectos/2011-2014/club_de_tenis" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.1.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Club de tenis Lomas</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/shirakaba" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.3.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Restuarante Shirakaba</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/chalouh" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.4.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Casa Chalouh</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/morales" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.6.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Casa Morales</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/prieto" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.7.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Edificio Adolfo Prieto</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/hajayim" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.8.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Auditorio Colegio Or Hajayim</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/sustentable" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.9.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Casa Sustentable</p>
                    </router-link>
                    <router-link to="" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.2.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">La Castellana</p>
                    </router-link>
                    <router-link to="/proyectos/2011-2014/ricazuelas" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2011-2014/1.5.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Restaurante Ricazuelas Yoli</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>

</script>

<style>
.projectsList {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: #000;
}

.projectsListWrapper {
    width: 100%!important;
    min-height: 100%;
}

.projectsList__container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.projectsList__container__title {
    color: #f87c00;
    display: flex;
    justify-content: center;
}

.projectsList__container__projects {
    height: 80%;
    width:70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-content: center;
}

.projectsList__container__projects__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 100%;
    margin: 1.5rem 1rem;
    transition: 400ms;
}

.projectsList__container__projects__link:hover {
    opacity: 0.6;
}

.projectsList__container__projects__link__name {
    color: #fff;
    margin-top: 0.5rem;
    text-align: center;
}

.projectsList__container__projects__link__img {
    width: 70%;
}

@media (max-width: 1150px) {
    .projectsList__container__projects {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 690px) {
    .projectsList__container__projects {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 420px) {
    .projectsList__container__projects {
        grid-template-columns: repeat(1, 1fr);
    }

    .projectsList__container__projects__link__img {
    width: 100%;
}
}
</style>
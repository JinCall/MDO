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
                <h2 class="projectsList__container__title">Proyectos 2007 - 2008</h2>
                <div class="projectsList__container__projects">
                    <router-link to="/proyectos/2007-2008/sol" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.1.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Edificio Ciudad del Sol</p>
                    </router-link>
                    <router-link to="/proyectos/2007-2008/palmar" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.2.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Edificio El Palmar Acapulco</p>
                    </router-link>
                    <router-link to="/proyectos/2007-2008/tane" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.3.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Joyerias TANE</p>
                    </router-link>
                    <router-link to="/proyectos/2007-2008/ayamonte" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.4.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Casas Ayamonte</p>
                    </router-link>
                    <router-link to="/proyectos/2007-2008/jeju" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.5.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Hotel Casa del Agua Jeju Corea</p>
                    </router-link>
                    <router-link to="/proyectos/2007-2008/loft" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.6.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Loft</p>
                    </router-link>
                    <router-link to="/proyectos/2007-2008/moscana" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2007-2008/3.7.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Proyecto Moscona</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>

</script>

<style scoped>

</style>
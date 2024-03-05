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
                <h2 class="projectsList__container__title">Proyectos 2004 - 2007</h2>
                <div class="projectsList__container__projects">
                    <router-link to="/proyectos/2004-2007/alameda" class="projectsList__container__projects__link">
                        <img loading="lazy" src="../assets/projectos/2004-2007/4.1.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Puerta Alameda</p>
                    </router-link>
                    <router-link to="/proyectos/2004-2007/coyoacan" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2004-2007/4.2.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Puerta Coyoacan</p>
                    </router-link>
                    <router-link to="" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2004-2007/4.3.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Edificio Río Rhin</p>
                    </router-link>
                    <router-link to="" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2004-2007/4.4.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Edificio Puerta Polanco</p>
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
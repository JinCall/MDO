<template>
    <div class="projectsList">
        <div class="projectsListWrapper">
            
            <router-link to="/proyectos" class="">
                <div class="btn">
                    <div class="btn__line upper"></div>
                    <div class="btn__line lower"></div>
                </div>
            </router-link>
            <div class="projectsList__container">
                <h2 class="projectsList__container__title">Proyectos 2008 - 2011</h2>
                <div class="projectsList__container__projects">
                    <router-link to="/proyectos/2008-2011/alpha" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.1.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Club Deportivo Alpha</p>
                    </router-link>
                    <router-link to="/proyectos/2008-2011/juriquilla" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.3.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Club de Golf Juriquilla</p>
                    </router-link>
                    <router-link to="/proyectos/2008-2011/sun" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.4.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Sun Hills Valley Campus Juriquilla</p>
                    </router-link>
                    <router-link to="/proyectos/2008-2011/mahatma" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.7.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Colegio Mahatma Gandhi</p>
                    </router-link>
                    <router-link to="/proyectos/2008-2011/ANV" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.8.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">ANV León</p>
                    </router-link>
                    <router-link to="/proyectos/2008-2011/esmeralda" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.9.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">ANV Zona Esmeralda</p>
                    </router-link>
                    <router-link to="" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.2.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Casa Habitacional Lomas Verdes</p>
                    </router-link>
                    <router-link to="" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.5.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Club Deportivo en Atizapan</p>
                    </router-link>
                    <router-link to="" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2008-2011/2.6.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Casa Lhelguen</p>
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
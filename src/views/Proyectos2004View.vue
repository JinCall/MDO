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
                <h2 class="projectsList__container__title">Proyectos 2004</h2>
                <div class="projectsList__container__projects">
                    <router-link to="/proyectos/2004/ejecutivas" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/2004/6.1.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Hangar para Aerolíneas Ejecutivas</p>
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
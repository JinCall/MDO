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
                <h2 class="projectsList__container__title">Concursos</h2>
                <div class="projectsList__container__projects">
                    <router-link to="/proyectos/concursos/ondas" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/concursos/c1.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Ondas modeladoras 4</p>
                    </router-link>
                    <router-link to="/proyectos/concursos/umbral" class="projectsList__container__projects__link">
                        <img src="../assets/projectos/concursos/c2.jpg" alt="" class="projectsList__container__projects__link__img">
                        <p class="projectsList__container__projects__link__name">Umbral de Las Américas</p>
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
<template>
  <div class="projects">
    <div class="wrapper">
      <div class="projects__mobile">
        <img src="../assets/bgP_mobile.jpg" alt="">
        <router-link to="/proyectos/2011-2014" class="projects__mobile__link1"></router-link>
        <router-link to="/proyectos/concursos" class="projects__mobile__link2"></router-link>
        <router-link to="/proyectos/2004" class="projects__mobile__link3"></router-link>
        <router-link to="/proyectos/2008-2011" class="projects__mobile__link4"></router-link>
        <router-link to="/proyectos/2007-2008" class="projects__mobile__link5"></router-link>
        <router-link to="/proyectos/2004-2007" class="projects__mobile__link6"></router-link>
      </div>
      <div class="title__container">
        <h1 class="projects__title">Proyectos</h1>
        <img src="../assets/logoMdo.png" alt="Mdo-Arquitectura logo" class="projects__img">
      </div>
      <div class="link__container">
        <img src="../assets/logoMdo.png" alt="Mdo-Arquitectura logo" class="projects__link__img">
        <h1 class="projects__link__title">Proyectos</h1>
        <router-link to="/proyectos/2011-2014" class="projects__link1">
        <p class="projects__link__text">2011 / 2014</p>
        </router-link>
        <router-link to="/proyectos/concursos" class="projects__link2">
          <p class="projects__link__text">Concursos</p>
        </router-link>
        <router-link to="/proyectos/2004" class="projects__link3">
          <p class="projects__link__text">2004</p>
        </router-link>
        <router-link to="/proyectos/2008-2011" class="projects__link4">
          <p class="projects__link__text">2008 / 2011</p>
        </router-link>
        <router-link to="/proyectos/2007-2008" class="projects__link5">
          <p class="projects__link__text">2007 / 2008</p>
        </router-link>
        <router-link to="/proyectos/2004-2007" class="projects__link6">
          <p class="projects__link__text">2004 / 2007</p>
        </router-link>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<script>

</script>

<style scoped>
.projects {
  background-color: #000;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bgP.jpg");
  background-repeat: no-repeat;
  background-position: center;
  margin: 4rem 0;
}

.projects__title {
  color: #f87c00;
  position: absolute;
  top: 05%;
  left: 05%;
  font-size: 3rem;
  font-weight: 300;
} 
.projects__img {
  position: absolute;
  width: 250px;
  left: 42%;
  top: 15%;
}

.projects__mobile {
  display: none;
}

.projects__link1, .projects__link2, .projects__link3, .projects__link4, .projects__link5, .projects__link6 {
  text-decoration: none;
  position: absolute;
}

.projects__link1 {
  top: 26%;
  left: 25.5%;
}

.projects__link2 {
  top: 62%;
  left: 29%;
}

.projects__link3 {
  top: 68%;
  left: 13%;
}

.projects__link4 {
  top: 19.75%;
  left: 71%;
}

.projects__link5 {
  top: 35.5%;
  left: 50.5%;
}

.projects__link6 {
  left: 81.5%;
  top: 67.5%;
}

.projects__link__img {
  display: none;
}

.projects__link__text {
  color: #f87c00;
  font-size: 1.25rem;
  transition: 400ms;
}

.projects__link__text:hover {
  color: #fff;
}

@media (max-width: 1220px) {
  .projects__title {
    margin-top: 5rem;
  }
}

@media (max-width: 1200px) {

  .wrapper {
    width: 100vw;
  }
  .title__container {
    display: none;
  }

  .link__container {
    display: none;
  }

  .wrapper {
    background-image: none;
    display: flex;
    justify-content: center;
  }

  .projects__mobile {
    display: flex;
    justify-content: center;
    align-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .projects__mobile__link1, .projects__mobile__link2, .projects__mobile__link3, .projects__mobile__link4, .projects__mobile__link5, .projects__mobile__link6 {
    position: absolute;
  }

  .projects__mobile__link1 {
    top: 15.75%;
    left: 56%;
    width: 19%;
    height: 9%;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 82%;
    width: 9%;
    height: 26%;
  }

  .projects__mobile__link3 {
    top: 45%;
    left: 12%;
    width: 8%;
    height: 26%;
  }

  .projects__mobile__link4 {
    top: 37%;
    left: 55%;
    width: 20%;
    height: 7%;
  }

  .projects__mobile__link5 {
    top: 71.5%;
    left: 57%;
    width: 20%;
    height: 7%;
  }

  .projects__mobile__link6 {
    top: 68.5%;
    left: 26%;
    width: 20%;
    height: 7%;
  }
}

@media (max-width: 1040px) {
  .projects__mobile {
    scale: .7;
  }
}

@media (max-width: 1025px) {
  .projects__mobile__link1 {
    top: 15.75%;
    left: 58%;
    width: 21%;
    height: 9%;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 86%;
    width: 11%;
    height: 26%;
  }

  .projects__mobile__link3 {
    top: 45%;
    left: 8%;
    width: 8%;
    height: 26%;
  }

  .projects__mobile__link4 {
    top: 37%;
    left: 59%;
    width: 22%;
    height: 8%;
  }

  .projects__mobile__link5 {
    top: 71.5%;
    left: 59%;
    width: 24%;
    height: 7%;
  }

  .projects__mobile__link6 {
    top: 68.5%;
    left: 21%;
    width: 24%;
    height: 7%;
  }
}

@media (max-width: 1025px) {
  .projects__mobile__link1 {
    top: 15.75%;
    left: 55%;
    width: 14rem;
    height: 9%;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 86%;
    width: 11%;
    height: 26%;
  }

  .projects__mobile__link3 {
    top: 45%;
    left: 8%;
    width: 8%;
    height: 20%;
  }

  .projects__mobile__link4 {
    top: 37%;
    left: 59%;
    width:  14rem;
    height: 8%;
  }

  .projects__mobile__link5 {
    top: 71.5%;
    left: 59%;
    width:  14rem;
    height: 7%;
  }

  .projects__mobile__link6 {
    top: 68.5%;
    right: 20%;
    width:  16rem;
    height: 7%;
  }
}

@media (max-width: 890px) {
  .projects__mobile {
    scale: .7;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 95%;
    width: 20%;
    height: 25%;
  }

  .projects__mobile__link3 {
    top: 45%;
    left: -5%;
    width: 15%;
    height: 20%;
  }

  .projects__mobile__link6 {
    top: 68.5%;
    left: 10%;
    width:  16rem;
    height: 7%;
  }
}

@media (max-width: 720px) {
  .projects__mobile__link2 {
    top: 30%;
    left: 95%;
    width: 23%;
    height: 25%;
  }

  .projects__mobile__link3 {
    top: 45%;
    left: -20%;
    width: 30%;
    height: 20%;
  }

  .projects__mobile__link6 {
    top: 68.5%;
    left: 10%;
    width:  16rem;
    height: 7%;
  }
}

@media (max-width: 650px) {
  .projects__mobile {
    scale: .65;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 100%;
    width: 27%;
    height: 25%;
  }
}

@media (max-width: 600px) {
  .projects__mobile {
    scale: .6;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 110%;
    width: 14%;
    height: 25%;
  }

  .projects__mobile__link4 {
    top: 37%;
    left: 55%;
    width: 40%;
    height: 7%;
  }
}

@media (max-width: 560px) {
  .projects__mobile {
    scale: .75;
  }

  .wrapper {
    height: 600px;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 98%;
    width: 14%;
    height: 25%;
  }
}

@media (max-width: 510px) {
  .projects__mobile {
    scale: .8;
  }
}

@media (max-width: 500px) {

.projects__mobile {
  scale: .65;
}
}


@media (max-width: 470px) {

  .wrapper {
    height: 600px;
  }
  .projects__mobile {
    scale: .7;
  }
  .projects__mobile__link2 {
    top: 30%;
    left: 105%;
    width: 14%;
    height: 25%;
  }
}

@media (max-width: 445px) {

.wrapper {
  height: 700px;
}
.projects__mobile {
  scale: .65;
}
.projects__mobile__link2 {
    top: 30%;
    left: 100%;
    width: 25%;
    height: 25%;
  }
}

@media (max-width: 445px) {

.wrapper {
  height: 600px;
}
.projects__mobile {
  scale: .6;
  margin-top: 0rem;
}
}

@media (max-width: 380px) {
  .projects__mobile {
    scale: .55;
    margin-top: 1rem;
  }

  .projects__mobile__link2 {
    top: 30%;
    left: 110%;
    width: 25%;
    height: 25%;
  }

  .projects__mobile__link3 {
    top: 45%;
    left: -50%;
    width: 50%;
    height: 20%;
  }

  .projects__mobile__link4 {
    top: 37%;
    left: 59%;
    width:  14rem;
    height: 8%;
  }


  .projects__mobile__link6 {
    top: 68.5%;
    left: -10%;
    width:  16rem;
    height: 7%;
  }
}

@media (max-width: 350px) {
  .projects__mobile {
    scale: .5;
  }
  .projects__mobile__link2 {
    top: 30%;
    left: 120%;
    width: 25%;
    height: 25%;
  }
}

@media (max-width: 320px) {
  .projects__mobile {
    scale: .45;
  }

  
}

@media (max-width: 285px) {
  .projects__mobile {
    scale: .55;
  }

  .wrapper {
    height: 450px;
  }
}

@media (max-width: 255px) {
  .projects__mobile {
    scale: .5;
  }
}
</style>
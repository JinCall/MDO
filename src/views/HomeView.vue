<template>
  <div class="home">
      <div class="home__img">
          <img src="../assets/logoMdo.png" alt="">
      </div>
      <HomeDetail/>
  </div>
</template>
<script>
import HomeDetail from '../components/HomeDetail.vue'
export default {
  name: "HomeView",
  components: {
    HomeDetail
  }
}
</script>

<style>
  .home {
      background-color: #000;
      min-height: 100vh;
      min-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
  }

  .home__img {
      position: absolute;
      z-index: 4;
  }

  .home__projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
  }

  @media (max-width: 1220px) {
    .home__img {
      display: none;
    }

    .home {
      height: 950px;
    }
  }

  @media (max-width: 900px) {
    .home__img {
      display: none;
    }

    .home {
      height: 750px;
    }
  }

  @media (max-width: 800px) {
    .home__img {
      display: none;
    }

    .home {
      height: 650px;
    }
  }

</style>
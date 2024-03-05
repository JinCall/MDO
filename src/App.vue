<template>
  <Header/>
  <Footer/>
  <WhatsApp/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import WhatsApp from './components/WhatsApp.vue';
export default {
  name: "App",
  components: {
    Header,
    Footer,
    WhatsApp
}
}
</script>

<style>
  #app {
    position: relative;
    font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
    overflow: hidden;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .wrapper {
    width: 60%;
    min-height: 100%;
  }

  .btnContainer {
    width: 100%;
    height: 2rem;
    background-color: aqua;
  }

  .btn {
    width: 2rem;
    height: 2rem;
    background-color: #f87c00;
    position: relative;
    transition: 400ms;
    margin-top: 4rem;
    margin-right: auto;
    z-index: 2;
  }

  .btn:hover {
      background-color: #fff;
  }

  .btn:hover .btn__line {
      border-color: #f87c00;
  }

  .btn__line {
      border: 2px solid #fff;
      position: absolute;
      width: 80%;
      transition: 400ms;
  }

  .btn__line.upper {
      transform: rotate(45deg);
      top: 45%;
      left: 4%;
  }

  .btn__line.lower {
      transform: rotate(-45deg);
      top: 45%;
      left: 4%;
  }
</style>

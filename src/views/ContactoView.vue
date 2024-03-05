<template>
  <div class="contact">
    <div class="wrapper">
      <div class="contact__header">
        <img src="../assets/logoMdo.png" alt="logo de Mdo" class="contact__header__logo">
        <h1 class="contact__header__title">Contact</h1>
      </div>
      <h2 class="contact__text">Denos la oportunidad de participar en su proyecto:</h2>
      <form action="" method="">
        <div class="contact__container">
          <div class="contact__container__box">
              <input required type="text" placeholder="Nombre" class="contact__container__box__input">
              <input required type="email" placeholder="E-mail" class="contact__container__box__input">
              <input required type="number" placeholder="Telefono" class="contact__container__box__input">
              <input required type="text" placeholder="Empresa" class="contact__container__box__input">
          </div>
          <textarea placeholder="Mensaje" name="comentario" id="" cols="30" rows="10" class="contact__container__textarea"></textarea>
        </div>
        <div class="contact__btn">
          <button type="submit" class="contact__btn">Enviar</button>
        </div>
      </form>
      
      <div class="contact__info">
        <span class="contact__info__number">5361.5954 <span class="sub">/</span> 5601.8826</span>
        <span class="contact__info__text">Emiliano Zapata No.13 Piso 3 San Lucas Tepetlacalco, Tlalnepantla, Edo. de Méx., C.P. 54055</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.contact {
  min-height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact__header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9rem;
  margin-top: 3rem;
  position: relative;
  flex-direction: column;
}

.wrapper {
  min-height: 100%;
}

.contact__header__logo {
  width: 200px;
  margin-right: 40%;
}

.contact__header__title {
  position: relative;
}

.contact__header__title {
  color: #f87c00;
}

.contact__info {
  margin-bottom: 10%;
}

.contact__text, .contact__info__number, .contact__info__text {
  color: #fff;
}

.contact__text {
  width: 100%;
  margin-top: 3rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
}

.contact__container {
  display: flex;
  height: 350px;
  justify-content: center;
  align-items: center;
}

.contact__container__box {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.contact__container__box__input {
  margin: 1.6rem;
  padding: .5rem 1rem;
  border-bottom: 3px solid #fff;
  transition: 400ms;
}

.contact__container__box__input:hover, .contact__container__box__input:focus {
  border-bottom: 3px solid #f87c00;
}

.contact__container__box__input::-webkit-outer-spin-button, .contact__container__box__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.contact__container__textarea {
  height: 277.5px;
  resize: none;
  padding: 0.5rem;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: none;
}

.contact__btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contact__btn button{
  padding: .5rem 1rem;
  width: 5rem;
  border: none;
  background-color: #f87c00;
  color: #fff;
  transition: 400ms;
}

.contact__btn:hover {
  color: #000;
  scale: 1.05;
}

.contact__info {
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  width: 100%;
  align-items: center;
}

.sub {
  color: #f87c00;
}

@media (max-width: 1220px)  {
  .contact__header {
    margin-top: 6rem;
  }
}

@media (max-width: 760px) {

  .contact__text {
    text-align: center;
  }

  .contact__header {
    margin: 1rem 0;
    height: 5rem;
  }

  .contact__header__logo {
    display: none;
  }

  .contact__header__title {
    margin-top: 5rem;
  }

  .contact__container {
    flex-direction: column;
    height: auto;
  }

  .contact__container__box__input {
    margin: 1rem;
  }

  .contact__container__textarea {
    width: 249px;
    margin-bottom: 1rem;
  }

  .contact__info {
    margin-top: 2rem;
  }

  .contact__info__text {
    text-align: center;
  }
}
</style>
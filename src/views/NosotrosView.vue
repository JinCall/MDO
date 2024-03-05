<template>
  <div class="nosotros">
    <div class="wrapper">
      <div class="nosotros__header">
        <img src="../assets/logoMdo.png" alt="logo de Mdo" class="nosotros__header__logo">
        <h1 class="nosotros__header__title">Nosotros</h1>
      </div>
      <p class="nosotros__description"> Somos un <span class="sub">taller de arquitectura</span> en donde desarrollamos propuestas de vanguardia para nuestros clientes, atendiendo siempre a las necesidades particulares de cada proyecto, poniendo especial cuidado en el diseño e involucrando siempre alternativas novedosas. Nos hemos especializado en el desarrollo de proyectos de <span class="sub">casas habitacionales, instalaciones deportivas, viviendas plurifamiliares, diseño de interiores, espacios recreativos y proyectos sustentables</span>, que resulten tanto funcionales como acogedores. Nos mantenemos siguiendo el state-of-the-art de la arquitectura nacional y global, lo que nos permite ofrecer a nuestros clientes proyectos que superen sus expectativas de funcionalidad, economía, viabilidad y estética.</p>
      <div class="nosotros__info nayelly">
        <div class="nosotros__info__container">
          <h2 class="nosotros__info__container__title">Arq. Nayelly Montes de Oca</h2>
          <p class="nosotros__info__container__text">Nacida en la Ciudad de México en 1983, se graduó de la <span class="sub">Licenciatura de Arquitectura</span> en la Universidad Tecnológica de México en el año de 2005, posteriormente estudio una <span class="sub">Maestría en Diseño de Interiores</span> en la Universidad Motolinía del Pedregal y diversos diplomados en la Universidad Autónoma de México, en San Diego Global Knowledge University y recientemente un <span class="sub">MBA</span> en su alma mater, la Universidad Tecnológica de México.

          Su experiencia profesional comienza en el despacho Desarrolladora del Parque donde participó en el desarrollo de proyectos de gran envergadura como los complejos habitacionales Puerta Alameda ganadora de Mención Especial del Premio Nacional de Vivienda 2006, Puerta Coyoacán y el Edificio Rio Rhin.

          Posteriormente en el taller de Arquitectura Legorreta + Legorreta participó en importantes proyectos como El Palmar Acapulco, Hotel Casa del Agua Jeju Corea, Casas Ayamonte, Joyerias TANE, Edificio habitacional Ciudad del Sol, entre otros.

          Más adelante colaboró en el despacho David Cano & Arquitectos, liderando proyectos como el Campus Juriquilla del Colegio Sunhills Valley, ANV Zona Esmeralda, la Ampliación del Colegio Mahatma Gandhi y el Complejo Acuático Club de Golf Juriquilla.

          En esta etapa de su vida profesional Nayelly Montes de Oca dirige el Taller de MdO Arquitectura, llevando a cargo proyectos como la remodelación del Club de Tenis Lomas, la remodelación de La Castellana y del Restaurante Shirakaba, la ampliación y remodelación de la Casa Chalouh y la Casa Morales, así como el Auditorio Colegio Or Hajayim y el Edificio Adolfo Prieto, por mencionar algunos.

          Sus intereses profesionales abarcan también áreas menos ortodoxas de la arquitectura, como remodelación de espacios urbanos, proyectos especiales para acondicionar espacios de mascotas en casas habitación, asesorías en desarrollos inmobiliarios y diseño de espacios interiores.
          </p>
        </div>
        <img src="../assets/nayelly.jpg" alt="nayelly photo" class="nosotros__info__img">
      </div>
      <div class="nosotros__info alejandro">
        <h2 class="nosotros__info__title">Arq. Alejandro Hernández</h2>
        <p class="nosotros__info__text">Nace en la Ciudad de México en 1985. Cursa <span class="sub">estudios superiores de Arquitectura</span> en el Instituto Tecnológico y de Estudios Superiores de Monterrey. Durante sus estudios participa en el programa de intercambio con la Universidad San Pablo CEU, en Madrid, España. De 2009 a 2011 colaboró en el despacho David Cano & Arquitectos, desarrollando proyectos residenciales y de complejos deportivos acuáticos en distintos estados de la República Mexicana.

        Desde 2011 a la fecha colabora en MdO Arquitectura, donde ha dibujado y modelado en 3D distintos edificios con estructura de acero, así como también ha colaborado en el desarrollo de proyectos arquitectónicos para la remodelación de casas habitación. Ha participado en concursos como: Arquine (Albergue para desplazados, Umbral de las Américas) y Radio Arquitectura (Ondas Modeladoras 4).</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nosotros {
  min-height: 100vh;
  padding-bottom: 5%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.wrapper {
  min-height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub {
  font-style: italic;
}

.nosotros__header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 8rem;
  position: relative;
  flex-direction: column;
}

.nosotros__header__logo {
  width: 200px;
  margin-right: 83%;
}

.nosotros__header__title {
  position: relative;
}

.nosotros__header__title, .sub, .nosotros__info__container__title, .nosotros__info__title {
  color: #f87c00;
  text-align: justify;
}

.nosotros__description, .nosotros__info__container {
  color: #fff;
  margin-top: 1.5rem;
  width: 100%;
  text-align: justify;
}

.nosotros__info.nayelly {
  display: flex;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
}

.nosotros__info__container__text {
  width: 100%;
}

.nosotros__info__img {
  margin-left: 2%;
}

.nosotros__info__container__text, .nosotros__info__text {
  margin-top: .5rem;
  text-align: justify;
  font-size: .8rem;
  color: #fff;
}

@media (max-width: 1580px) {

  .nosotros__info__container {
    margin-bottom: 3rem;
  }
  .nosotros__info__container__text {
    width: 100%;
  }

  .nosotros__info__img {
    width: 23rem;
    min-height: 23rem;
  }

}

@media (max-width: 1220px) {
  .nosotros__header {
  margin-top: 5rem;
}
}

@media (max-width: 1170px) {

  .nosotros__info.nayelly {
    flex-direction: column;
  }

  .nosotros__info__img {
    margin-bottom: 2rem;
  }
}

@media (max-width: 750px) {

  .nosotros__header__logo {
    display: none;
  }
}

@media (max-width: 370px) {

  .nosotros__info__img {
    transform: scale(0.8);
  }
}
</style>

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ProyectosView from '../views/ProyectosView.vue'
import Proyectos2011View from '../views/Proyectos2011-14View.vue'
import DiapositivasClubTenis from '../views/diapositivas/diapositivas2011_2014/DiapositivasClubTenis.vue'
import DiapositivasShirakaba from '../views/diapositivas/diapositivas2011_2014/DiapositivasShirakaba.vue'
import DiapositivasChalouh from '../views/diapositivas/diapositivas2011_2014/DiapositivasChalouh.vue'
import DiapositivasMorales from '../views/diapositivas/diapositivas2011_2014/DiapositivaMorales.vue'
import DiapositivasPrieto from '../views/diapositivas/diapositivas2011_2014/DiapositivasPrieto.vue'
import DiapositivasSustentable from '../views/diapositivas/diapositivas2011_2014/DiapositivaSustentable.vue'
import DiapositivasHajayim from '../views/diapositivas/diapositivas2011_2014/DiapositivasHajayim.vue'
import DiapositivasRicazuelas from '../views/diapositivas/diapositivas2011_2014/DiapositivaRicazuelas.vue'
import ProyectosConcursoView from '../views/ProyectosConcursoView.vue'
import DiapositivasOndas from '../views/diapositivas/diapositivasConcurso/DiapositivaOndas.vue'
import DiapositivasUmbral from '../views/diapositivas/diapositivasConcurso/DiapositivaUmbral.vue'
import Proyectos2004View from '../views/Proyectos2004View.vue'
import DiapositivasEjecutivas from '../views/diapositivas/diapositivas2004/DiapositivasEjecutivas.vue'
import Proyectos2008View from '../views/Proyectos2008View.vue'
import DiapositivasAlpha from '../views/diapositivas/diapositivas2008_2011/DiapositivasAlpha.vue'
import DiapositivasJuriquilla from '../views/diapositivas/diapositivas2008_2011/DiapositivasJuriquilla.vue'
import DiapositivasSun from '../views/diapositivas/diapositivas2008_2011/DiapositivasSun.vue'
import DiapositivasMahatma from '../views/diapositivas/diapositivas2008_2011/DiapositivasMahatma.vue'
import DiapositivasANV from '../views/diapositivas/diapositivas2008_2011/DiapositivasANV.vue'
import DiapositivasEsmeralda from '../views/diapositivas/diapositivas2008_2011/DiapositivasEsmeralda.vue'
import Proyectos2007View from '../views/Proyectos2007View.vue'
import DiapositivasSol from '../views/diapositivas/diapositivas2007-2008/DiapositivasSol.vue'
import DiapositivasPalmar from '../views/diapositivas/diapositivas2007-2008/DiapositivasPalmar.vue'
import DiapositivasTane from '../views/diapositivas/diapositivas2007-2008/DiapositivasTane.vue'
import DiapositivasAyamonte from '../views/diapositivas/diapositivas2007-2008/DiapositivasAyamonte.vue'
import DiapositivasJeju from '../views/diapositivas/diapositivas2007-2008/DiapositivasJeju.vue'
import DiapositivasLoft from '../views/diapositivas/diapositivas2007-2008/DiapositivasLoft.vue'
import DiapositivasMoscana from '../views/diapositivas/diapositivas2007-2008/DiapositivasMoscana.vue'
import Proyectos2004_07View from '../views/Proyectos2004-07View.vue'
import DiapositivasAlameda from '../views/diapositivas/diapositivas2004-2007/DiapositivasAlamenda.vue'
import DiapositivasCoyoacan from '../views/diapositivas/diapositivas2004-2007/DiapositivasCoyoacan.vue'
import ContactoView from '../views/ContactoView.vue'
import NotFound404 from '../components/NotFound.vue'

const routes = [
  {
    path: '/:pathMatch(.*)',
    component: NotFound404
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosView
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProyectosView
  },
  {
    path: '/proyectos/2011-2014',
    name: 'proyectos2011',
    component: Proyectos2011View
  },
  {
    path: '/proyectos/2011-2014/club_de_tenis',
    name: 'diapositivasClubTenis',
    component: DiapositivasClubTenis
  },
  {
    path: '/proyectos/2011-2014/shirakaba',
    name: 'ShirakabaView',
    component: DiapositivasShirakaba
  },
  {
    path: '/proyectos/2011-2014/chalouh',
    name: 'ChalouhView',
    component: DiapositivasChalouh
  },
  {
    path: '/proyectos/2011-2014/morales',
    name: 'MoralesView',
    component: DiapositivasMorales
  },
  {
    path: '/proyectos/2011-2014/prieto',
    name: 'PrietoView',
    component: DiapositivasPrieto
  },
  {
    path: '/proyectos/2011-2014/hajayim',
    name: 'HajayimView',
    component: DiapositivasHajayim
  },
  {
    path: '/proyectos/2011-2014/sustentable',
    name: 'SustentableView',
    component: DiapositivasSustentable
  },
  {
    path: '/proyectos/2011-2014/ricazuelas',
    name: 'RicazuelasView',
    component: DiapositivasRicazuelas
  },
  {
    path: '/proyectos/concursos',
    name: 'proyectosConcurso',
    component: ProyectosConcursoView
  },
  {
    path: '/proyectos/concursos/ondas',
    name: 'OndasView',
    component: DiapositivasOndas
  },
  {
    path: '/proyectos/concursos/umbral',
    name: 'UmbralView',
    component: DiapositivasUmbral
  },
  {
    path: '/proyectos/2004',
    name: 'proyectos2004',
    component: Proyectos2004View
  },
  {
    path: '/proyectos/2004/ejecutivas',
    name: 'EjecutivasView',
    component:  DiapositivasEjecutivas
  },
  {
    path: '/proyectos/2008-2011',
    name: 'proyectos2008',
    component: Proyectos2008View
  },
  {
    path: '/proyectos/2008-2011/alpha',
    name: 'AlphaView',
    component: DiapositivasAlpha
  },
  {
    path: '/proyectos/2008-2011/juriquilla',
    name: 'JuriquillaView',
    component: DiapositivasJuriquilla
  },
  {
    path: '/proyectos/2008-2011/sun',
    name: 'SunView',
    component: DiapositivasSun
  },
  {
    path: '/proyectos/2008-2011/mahatma',
    name: 'MahatmaView',
    component: DiapositivasMahatma
  },
  {
    path: '/proyectos/2008-2011/ANV',
    name: 'ANVView',
    component: DiapositivasANV
  },
  {
    path: '/proyectos/2008-2011/esmeralda',
    name: 'EsmeraldaView',
    component: DiapositivasEsmeralda
  },
  {
    path: '/proyectos/2007-2008',
    name: 'proyectos2007',
    component: Proyectos2007View
  },
  {
    path: '/proyectos/2007-2008/sol',
    name: 'SolView',
    component: DiapositivasSol
  },
  {
    path: '/proyectos/2007-2008/palmar',
    name: 'PalmarView',
    component: DiapositivasPalmar
  },
  {
    path: '/proyectos/2007-2008/tane',
    name: 'TaneView',
    component: DiapositivasTane
  },
  {
    path: '/proyectos/2007-2008/ayamonte',
    name: 'AyamonteView',
    component: DiapositivasAyamonte
  },
  {
    path: '/proyectos/2007-2008/jeju',
    name: 'JejuView',
    component: DiapositivasJeju
  },
  {
    path: '/proyectos/2007-2008/loft',
    name: 'LoftView',
    component: DiapositivasLoft
  },
  {
    path: '/proyectos/2007-2008/moscana',
    name: 'MoscanaView',
    component: DiapositivasMoscana
  },
  {
    path: '/proyectos/2004-2007',
    name: 'proyectos2004-07',
    component: Proyectos2004_07View
  },
  {
    path: '/proyectos/2004-2007/alameda',
    name: 'AlamedaView',
    component: DiapositivasAlameda
  },
  {
    path: '/proyectos/2004-2007/coyoacan',
    name: 'CoyoacanView',
    component: DiapositivasCoyoacan
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
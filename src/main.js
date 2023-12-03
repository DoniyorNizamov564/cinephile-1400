import './assets/style/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import BtnMore from './components/UI/BtnMore.vue'
import Actors from './components/UI/Actors.vue'
import Trailer from './components/UI/Trailer.vue'
import VueLazyload from 'vue-lazyload'
library.add(fas, fab, far);
import errorimage from './assets/img/no-image.png';
import loadimage from './assets/img/loading.gif';

createApp(App)
.use(router)
.use(pinia)
.use(VueLazyload, {
    error: errorimage,
    loading: loadimage,
    preLoad: 1.3,
    attempt: 1
  })
.component('font-awesome-icon', FontAwesomeIcon)
.component('BtnMore', BtnMore)
.component('Actors', Actors)
.component('Trailer', Trailer)
.mount('#app')

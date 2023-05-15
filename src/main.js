
import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import './index.css'

// import vueCountdown from '../plugins/vue-countdown'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Vue.use(vueCountdown)
/* add icons to the library */
library.add(faUserSecret, faEnvelope)

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

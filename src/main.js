import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { store } from './store/main'

library.add(faShoppingCart)

createApp(App)
  .use(router)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app')

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store, {key} from './store'
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/main.css'

createApp(App).use(store, key).use(router).mount('#app')

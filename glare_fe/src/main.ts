import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primevue/resources/themes/aura-light-green/theme.css'       //theme
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import CanvasJSChart from '@canvasjs/vue-charts';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(CanvasJSChart);
app.use(PrimeVue);

app.mount('#app')

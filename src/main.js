import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './assets/style.css'
import { useStore } from './stores/store'; // Adjust the path to your store.js file

const app = createApp(App);

app.use(router);
app.use(createPinia()); // Use createPinia instead of pinia

const vuetify = createVuetify({
    components,
    directives,
});

app.use(vuetify).mount('#app');

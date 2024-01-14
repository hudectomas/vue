// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ONas from '../views/ONas.vue';
import Sluzby from '../views/Sluzby.vue';
import KlientskaZona from '../views/KlientskaZona.vue';
import Porovnanie from '../views/Porovnanie.vue'; // Updated import statement
import Kontakt from '../views/Kontakt.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/o-nas', component: ONas },
    { path: '/sluzby', component: Sluzby },
    { path: '/porovnanie', component: Porovnanie },
    { path: '/klientska-zona', component: KlientskaZona },
    { path: '/kontakt', component: Kontakt },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
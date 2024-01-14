<template>
  <v-app>
    <v-container>
      <NavbarComponent />
      <router-view />
      <FooterComponent />
    </v-container>
  </v-app>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>


<template>
  <nav class="navbar">
    <div class="nav-logo">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-link">Hlavná stránka</router-link>
      <router-link to="/o-nas" class="nav-link">O nás</router-link>
      <router-link to="/sluzby" class="nav-link">Služby</router-link>
      <router-link to="/porovnanie" class="nav-link">Porovnanie</router-link>
      <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
    </div>
    <div class="theme-button">
      <v-btn @click="toggleTheme">
        <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
        Zmeniť tému
      </v-btn>
    </div>
    <router-link to="/klientska-zona" class="nav-button">
      Klientská zóna
    </router-link>
  </nav>
</template>

<script>
import { useTheme } from 'vuetify';

export default {
  name: 'Navbar',
  setup() {
    const theme = useTheme();

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    };

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
/* prispôsobte štýl podľa potreby */
</style>

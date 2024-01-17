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
        <v-icon>{{ themeIcon }}</v-icon>
        Zmeniť tému
      </v-btn>
    </div>
    <router-link to="/klientska-zona" class="nav-button">
      Klientská zóna
    </router-link>
  </nav>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useTheme } from 'vuetify';

export default {
  name: 'Navbar',
  setup() {
    const theme = useTheme();
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      theme.global.name.value = storedTheme;
    }
    const themeIcon = ref(theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night');

    const toggleTheme = () => {
      const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
      theme.global.name.value = newTheme;
      localStorage.setItem('theme', newTheme);
    };

    watchEffect(() => {
      themeIcon.value = theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
    });

    return {
      theme,
      themeIcon,
      toggleTheme,
    };
  },
};
</script>

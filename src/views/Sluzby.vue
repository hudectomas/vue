<template>
  <v-container class="sluzby-container">
    <h1>Služby</h1>
    <p>Ponúkame širokú škálu služieb, ktorými pokrývame celý trh s videoprodukciou.</p>

    <CennikComponent @add-to-comparison="addToComparison" />

  </v-container>
</template>

<script>
import CennikComponent from '../components/Cennik.vue';
import { useStore } from '../stores/store';

export default {
  components: {
    CennikComponent,
  },
  data() {
    const store = useStore();

    return {
      addToComparison(sluzba) {
        store.addToComparison(sluzba);
        console.log('Pridané do porovnania:', sluzba);
      },
    };
  },
};
</script>

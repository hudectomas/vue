<template>
  <div>
    <h1>Služby</h1>
    <!-- Další obsah stránky Sluzby.vue -->

    <!-- Vložení komponenty Cennik s použitím piny -->
    <Cennik @add-to-comparison="addToComparison" />

    <!-- Další obsah stránky Sluzby.vue -->
  </div>
</template>

<script>
import Cennik from '../components/Cennik.vue';
import { useStore } from '../stores/store'; // Adjust the path to your store.js file
import { onMounted, ref } from 'vue';

export default {
  components: {
    Cennik,
  },
  setup() {
    const store = useStore();

    const addToComparison = (sluzba) => {
      store.addToComparison(sluzba);
      console.log('Služba přidána do porovnání:', sluzba);
    };

    return {
      addToComparison,
    };
  },
};
</script>

<style scoped>
.sluzby-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Další styly pro váš obsah */
</style>

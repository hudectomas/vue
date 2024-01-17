<template>
  <div>
    <h1>Služby</h1>
    <Cennik @add-to-comparison="addToComparison" />
  </div>
</template>

<script>
import Cennik from '../components/Cennik.vue';
import { useStore } from '../stores/store';
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

</style>

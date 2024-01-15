<template>
  <div v-if="zakazka">
    <h2>{{ zakazka.nazov }}</h2>
  </div>
  <div v-else>
    <p>UPS, nie je tu žiaden obsah. Skúste prosím zadať iné heslo alebo to skúste neskôr.</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['zakazka'],
  data() {
    return {
      zakazka: ref(this.zakazka),
    };
  },
};
</script>

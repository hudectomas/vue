<template>
  <div>
    <ZakazkaObsahComponent :zakazka="zakazka" v-if="zakazka" />
    <div v-else>
      <p>UPS, nie je tu žiaden obsah. Skúste prosím zadať iné heslo alebo to skúste neskôr.</p>
    </div>
  </div>
</template>

<script>
import ZakazkaObsahComponent from './ZakazkaObsah.vue';

export default {
  props: ['zakazka'],
  components: {
    ZakazkaObsahComponent,
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

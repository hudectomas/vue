<template>
  <div>
    <h1>Klientská zóna</h1>
    <FormularComponent @zobrazZakazku="zobrazZakazku" />
    <ZakazkaComponent v-if="zakazka" :zakazka="zakazka" />
  </div>
</template>

<script>
import FormularComponent from '../components/Formular.vue';
import ZakazkaComponent from '../components/Zakazka.vue';

export default {
  name: 'KlientskaZona',
  data() {
    return {
      zakazka: null,
    };
  },
  methods: {
    zobrazZakazku(data) {
      this.zakazka = data;
    },
  },
  components: {
    FormularComponent,
    ZakazkaComponent,
  },
};
</script>


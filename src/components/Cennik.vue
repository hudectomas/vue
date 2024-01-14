<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="služby"
      item-key="id"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Cenník služieb</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn @click="addToComparison(item)" icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      služby: [
      { id: 1, nazov: 'Svadba plus', cena: '800€', info: 'Začiatok natáčania od obradu' },
          { id: 2, nazov: 'Svadba pro', cena: '950€', info: 'Celodenné natáčanie' },
          { id: 3, nazov: 'Svadba premium', cena: '1650€', info: 'Celodenné natáčanie s 2 kameramani, 2 videá  (15-minútový klip a vyše 40 minútový film tvorený zo záznamov a ilustračných záberov)' },
          { id: 4, nazov: 'Stužková basic', cena: '900€', info: 'Jedna kamera, 3-minútový klip + film' },
          { id: 5, nazov: 'Stužková plus', cena: '1250€', info: 'Dve kamery, 3-minútový klip + film' },
          { id: 6, nazov: 'Propagačné video', cena: 'od 350€', info: 'Propagácia firmy, služby a produktov.' },
          { id: 7, nazov: 'Video zo stretávky', cena: 'od 680€', info: 'Video zo stretávky - 1 kamera' },
          { id: 8, nazov: 'Video zo stretávky', cena: 'od 880€', info: 'Video zo stretávky - 2 kamery' },
          { id: 9, nazov: 'Video z cirkevných akcií', cena: 'od 780€', info: 'Video z krstu, prijímania a birmovky - 1 kamera' },
          { id: 9, nazov: 'Video z cirkevných akcií', cena: 'od 1080€', info: 'Video z krstu, prijímania a birmovky - 2 kamery' },
          { id: 10, nazov: 'Záznam na USB nosič - jednotilivec', cena: 'od 12€', info: 'Vloženie záznamu na USB nosič' },
          { id: 11, nazov: 'Záznam na USB nosič - skupina', cena: 'od 9€/ks', info: 'Vloženie záznamu na USB nosič pre viac ako 10 osôb' },
      ],
      headers: [
        { title: 'Služba', value: 'nazov' },
        { title: 'Cena', value: 'cena'},
        { title: 'Základné informácie', value: 'info' },
        { title: 'Porovnanie', value: 'actions', sortable: false },
      ],
    };
  },
  methods: {
    addToComparison(sluzba) {
      this.$emit('add-to-comparison', sluzba);
    },
  },
};
</script>

<style scoped>
/* Styling according to your needs */
</style>

<template>
  <v-container fluid class="container">
    <v-form @submit.prevent="odoslatFormular" class="form">
      <v-text-field
        v-if="!zobrazitData"
        v-model="heslo"
        :rules="rules"
        label="Zadajte heslo"
      ></v-text-field>
      <v-btn v-if="!zobrazitData" type="submit" block class="mt-2">Zobraziť zákazku</v-btn>
    </v-form>
    <v-alert v-if="chyba" type="error" class="error-message">{{ chyba }}</v-alert>

    <!-- Zobrazenie údajov z formulára -->
    <v-row v-if="zobrazitData" class="content-container">
      <v-col cols="12">
        <h2>{{ zaznam.nazov }}</h2>
        <h3>Video:</h3>
        <iframe
          width="100%"
          height="400"
          :src="zaznam.video"
          :title="zaznam.nazov"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>
          Link na stiahnutie:
          <a :href="zaznam.stiahnutie" target="_blank" rel="noopener noreferrer">{{ zaznam.stiahnutie }}</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'YourComponentName',
  setup() {
    const heslo = ref('');
    const chyba = ref('');
    const zaznam = ref(null);
    const zobrazitData = ref(false);
    const hesla = ref([]);
    
    const rules = [
      value => {
        if (value) return true;
        return 'Musíte zadať heslo.';
      },
    ];

    const odoslatFormular = async () => {
      zobrazitData.value = false;

      if (hesla.value.includes(heslo.value)) {
        try {
          const response = await axios.get('./src/data.json');
          const data = response.data;

          const zaznamData = data[heslo.value];

          if (zaznamData) {
            zaznam.value = zaznamData;
            chyba.value = '';
            zobrazitData.value = true;
          } else {
            chyba.value = 'Nesprávne heslo. Skúste to znova.';
          }
        } catch (error) {
          console.error('Chyba pri načítavaní údajov:', error);
          chyba.value = 'Chyba pri načítavaní údajov.';
        }
      } else {
        chyba.value = 'Nesprávne heslo. Skúste to znova.';
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('./src/data.json');
        hesla.value = Object.keys(response.data);
      } catch (error) {
        console.error('Chyba pri načítavaní hesiel:', error);
      }
    };

    fetchData();

    return {
      heslo,
      chyba,
      zaznam,
      zobrazitData,
      hesla,
      rules,
      odoslatFormular,
    };
  },
};
</script>

<style scoped>
/* Your styles here */
</style>

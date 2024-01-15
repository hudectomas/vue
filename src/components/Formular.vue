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
import { ref, onMounted } from 'vue';

export default {
  name: 'YourComponentName',
  data() {
    return {
      heslo: '',
      chyba: '',
      zaznam: null,
      zobrazitData: false,
      hesla: [],
      rules: [
        value => {
          if (value) return true;
          return 'Musíte zadať heslo.';
        },
      ],
    };
  },
  methods: {
    async odoslatFormular() {
      this.zobrazitData = false;

      if (this.hesla.includes(this.heslo)) {
        try {
          const response = await axios.get('./src/data.json');
          const data = response.data;

          const zaznamData = data[this.heslo];

          if (zaznamData) {
            this.zaznam = zaznamData;
            this.chyba = '';
            this.zobrazitData = true;
          } else {
            this.chyba = 'Nesprávne heslo. Skúste to znova.';
          }
        } catch (error) {
          console.error('Chyba pri načítavaní údajov:', error);
          this.chyba = 'Chyba pri načítavaní údajov.';
        }
      } else {
        this.chyba = 'Nesprávne heslo. Skúste to znova.';
      }
    },
    async fetchData() {
      try {
        const response = await axios.get('./src/data.json');
        this.hesla = Object.keys(response.data);
      } catch (error) {
        console.error('Chyba pri načítavaní hesiel:', error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

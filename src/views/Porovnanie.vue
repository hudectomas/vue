<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>Porovnávanie</h1>
      </v-card-title>
      <v-card-text>
        <p>
          Neviete si vybrať z jednej z našich služieb? Nevadí, na základe
          porovnania služieb, ktoré vás zaujali si viete vybrať ideálnu pre Vás!
        </p>
      </v-card-text>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="porovnaneSluzby"
          item-key="id"
        >
          <template #items="{ item }">
            <tr :key="item.id">
              <td>{{ item.nazov }}</td>
              <td>{{ item.cena }}</td>
              <td>{{ item.info }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { useStore } from '../stores/store';

export default {
  data() {
    const store = useStore();

    return {
      porovnaneSluzby: store.porovnaneSluzby,
      headers: [
        { title: 'Služba', value: 'nazov' },
        { title: 'Cena', value: 'cena' },
        { title: 'Základné informácie', value: 'info' },
      ],
    };
  },
};
</script>

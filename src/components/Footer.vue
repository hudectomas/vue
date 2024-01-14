<template>
  <v-footer app>
    <v-container>
      <v-row>
        <v-col>
          <h3>{{ copyrightText }}</h3>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  name: 'Footer',
  setup() {
    const currentYear = ref(new Date().getFullYear());

    // Update the current year dynamically
    watchEffect(() => {
      const updateYearInterval = setInterval(() => {
        currentYear.value = new Date().getFullYear();
      }, 60000); // Update every minute

      // Clear the interval when the component is unmounted
      return () => clearInterval(updateYearInterval);
    });

    const copyrightText = `© ${currentYear.value} Jasa Production s.r.o. All rights reserved.`;

    return {
      currentYear,
      copyrightText,
    };
  },
};
</script>

<style scoped>
/* Customize the style as needed */
</style>

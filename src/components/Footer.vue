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
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      updateYearInterval: null,
    };
  },
  mounted() {
    this.updateYearInterval = setInterval(() => {
      this.currentYear = new Date().getFullYear();
    }, 60000); // Update every minute
  },
  beforeUnmount() {
    clearInterval(this.updateYearInterval);
  },
  computed: {
    copyrightText() {
      return `© ${this.currentYear} Jasa Production s.r.o. All rights reserved.`;
    },
  },
};
</script>

<style scoped>
/* Customize the style as needed */
</style>

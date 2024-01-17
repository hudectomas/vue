<template>
  <v-footer class="d-flex flex-column" app>
      <v-row>
        <v-col>
          <h3>{{ copyrightText }}</h3>
        </v-col>
      </v-row>

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
    }, 60000);
  },
  beforeUnmount() {
    clearInterval(this.updateYearInterval);
  },
  computed: {
    copyrightText() {
      return `© ${this.currentYear} Jasa Production s.r.o.`;
    },
  },
};
</script>
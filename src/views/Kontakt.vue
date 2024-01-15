<template>
  <v-container>
    <h1>Kontakt</h1>

    <v-row class="contact-info">
      <v-col>
        <v-icon>mdi-domain</v-icon>
        <p>{{ contactData.company }}</p>
      </v-col>
      <v-col>
        <v-icon>mdi-map-marker</v-icon>
        <p>{{ contactData.address }}</p>
      </v-col>
      <v-col>
        <v-icon>mdi-phone</v-icon>
        <p>{{ contactData.phone }}</p>
      </v-col>
      <v-col>
        <v-icon>mdi-email</v-icon>
        <p>{{ contactData.email }}</p>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <h2>Kontaktný formulár</h2>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.name" label="Meno" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.email" label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
      <v-textarea v-model="formData.message" label="Správa" required></v-textarea>
      <v-btn type="submit" color="primary">Odoslať</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Kontakt',
  data() {
    return {
      contactData: {
        company: 'Jasa Production s.r.o.',
        address: 'Hlavná 247, 951 93 Topoľčianky, SR',
        phone: '+421 123 456 789',
        email: 'info@jasaproduction.sk',
      },
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {

      console.log('Form submitted:', this.formData);

    },
  },
};
</script>

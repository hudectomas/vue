<template>
  <v-container class="home-container">
    <div>
      <h1>O nás</h1>
      <p>Sme relatívne nová videoprodukčná spoločnosť, ktorá vznikla v roku 2020 spojením dvoch skúsených kameramanov. Po 2 rokoch sme sa vypracovali na najväčšie video štúdio v našom Nitrianskom kraji.</p>
    </div>

    <v-row class="image-gallery">
      <v-col v-for="(image, index) in imageList" :key="index" cols="12" md="4">
        <v-img :src="image.src" :alt="`Obrazok ${index + 1}`" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ONas',
  data() {
    return {
      imageList: [
        { src: '/images/05.jpg' },
        { src: '/images/06.jpg' },
        { src: '/images/07.jpg' },

      ],
    };
  },
};
</script>
<template>
  <v-container class="home-container">
    <h1>Vitajte!</h1>
    <p>
      Ponúkame profesionálnu tvorbu videozáznamu z rôznych akcií ako napríklad svadby, stužkové, krsty, rodinné oslavy,
      ako aj propagačné videá, firemné akcie, reklama na produkty a služby, podcasty atď. Pôsobíme v rámci celého Slovenska.
    </p>

    <v-row class="image-gallery">
      <v-col v-for="(image, index) in imageList" :key="index" cols="12" md="4">
        <v-img :src="image.src" :alt="`Obrazok ${index + 1}`" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      imageList: [
        { src: '/images/01.webp' },
        { src: '/images/02.jpg' },
        { src: '/images/03.jpg' },
        { src: '/images/04.jpg' },
      ],
    };
  },
};
</script>

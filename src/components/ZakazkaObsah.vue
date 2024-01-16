<template>
    <div class="content-container">
      <h2>{{ zakazka.nazov }}</h2>
      <h3>Video:</h3>
      <iframe
        width="100%"
        height="400"
        :src="zakazka.video"
        :title="zakazka.nazov"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        Link na stiahnutie:
        <a :href="zakazka.stiahnutie" target="_blank" rel="noopener noreferrer">{{ zakazka.stiahnutie }}</a>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['zakazka'],
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
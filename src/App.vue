<script setup>
import Header from './components/partials/Header.vue';
import Home from './components/pages/Home.vue';
import Footer from './components/partials/Footer.vue';


</script>

<template>
<Header />
<Home />
<Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <div>
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
</script>

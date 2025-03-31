<template>
  <v-app>
    <Header />
    <v-main>
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
</script>

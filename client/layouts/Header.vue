<template>
  <v-app-bar :elevation="5" color="primary">
    <template #prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <NuxtLink to="/" style="text-decoration: none; color: inherit">
        ToDo App
      </NuxtLink>
    </v-app-bar-title>

    <template #append>
      <v-btn class="text-capitalize">
        <MdiIcon preserveAspectRatio="xMidYMid meet" icon="mdiLogin" />
        &thinsp;Sign Out
      </v-btn>
    </template>
  </v-app-bar>

  <SideMenu v-model="drawer" />
</template>

<script setup>
import SideMenu from '@/layouts/SideMenu.vue';
import { ref } from 'vue';

const drawer = ref(false);
</script>

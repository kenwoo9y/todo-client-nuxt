<template>
    <v-navigation-drawer v-model="model" temporary>
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          @click="model = false"
        >
          <template #prepend>
            <MdiIcon :icon="item.icon" />
          </template>
  
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const model = defineModel({
    type: Boolean,
    default: false,
  });
  const items = ref([
    { title: 'Home', icon: 'mdiHome', link: '/' },
    { title: 'About', icon: 'mdiForum', link: '/about' }
  ]);
</script>
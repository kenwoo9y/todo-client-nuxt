<template>
  <v-container>
    <TaskDetail :id="id" />
  </v-container>
</template>

<script setup>
import TaskDetail from '@/components/tasks/TaskDetail.vue';
import { useRoute } from '#app';

const route = useRoute();
const id = route.params.id;
</script>

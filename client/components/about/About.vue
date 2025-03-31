<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-divider />
        <h1 class="text-h4 font-weight-bold my-6">About This ToDo App</h1>

        <section class="mb-8">
          <h2 class="text-h5 font-weight-semibold mb-4">Features</h2>
          <ul class="ml-4">
            <li v-for="(feature, index) in features" :key="index" class="mb-2">
              {{ feature }}
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-h5 font-weight-semibold mb-4">Technical Details</h2>
          <p class="mb-4">
            This application is built using the following technologies:
          </p>
          <ul class="ml-4">
            <li v-for="(tech, index) in technologies" :key="index" class="mb-2">
              {{ tech.name }} - {{ tech.description }}
            </li>
          </ul>
        </section>
        <v-divider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const features = [
  'Simple and intuitive task management',
  'Easy task creation, editing, and deletion',
  'Task completion tracking',
  'User-friendly interface',
];

const technologies = [
  {
    name: 'Nuxt',
    description:
      'The Intuitive Vue Framework for building modern web applications',
  },
  {
    name: 'Vuetify',
    description: 'A Material Design component framework for Vue.js',
  },
  { name: 'JavaScript', description: 'The programming language of the web' },
];
</script>

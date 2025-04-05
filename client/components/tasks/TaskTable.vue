<template>
  <v-container>
    <div class="d-flex justify-end">
      <TaskCreate />
    </div>
    <p class="text-h4">ToDo</p>

    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="tasks"
      :items-per-page-options="pages"
      :loading="loading"
      loading-text="データを読み込み中..."
      items-per-page-text="表示行数"
      class="elevation-1"
      hover
      @click:row="handleRowClick"
    >
      <template #[`item.index`]="{ index }">
        {{ index + 1 }}
      </template>
      <template #[`item.actions`]="{ item }">
        <TaskUpdate :task="item" />
        <TaskDelete :task="item" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import TaskCreate from '@/components/tasks/TaskCreate.vue';
import TaskUpdate from '@/components/tasks/TaskUpdate.vue';
import TaskDelete from '@/components/tasks/TaskDelete.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from '#app';
import { useTaskStore } from '@/stores/task';

const router = useRouter();
const taskStore = useTaskStore();

const itemsPerPage = ref(5);
const tasks = computed(() => taskStore.tasks);
const loading = computed(() => taskStore.loading);

const pages = ref([
  { value: 5, title: '5' },
  { value: 10, title: '10' },
  { value: 20, title: '20' },
  { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
]);

const headers = ref([
  { title: '#', align: 'end', sortable: false, key: 'index' },
  { title: 'タイトル', align: 'start', key: 'title' },
  { title: '期日', align: 'end', key: 'due_date' },
  { title: 'ステータス', align: 'end', key: 'status' },
  { title: '操作', align: 'end', sortable: false, key: 'actions' },
]);

onMounted(() => {
  taskStore.fetchTasks();
});

const handleRowClick = (event, row) => {
  router.push({ path: `/detail/${row.item.id}` });
};
</script>

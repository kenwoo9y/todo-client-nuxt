<template>
  <MdiIcon icon="mdiDelete" small class="mr-2" @click.stop="openDialog" />

  <v-dialog v-model="dialog" max-width="500">
    <v-sheet>
      <v-sheet class="my-2 mx-5">
        <p class="my-4">以下のタスクを削除しますか？</p>
        <p class="my-4 text-h6">
          {{ task.title }}
        </p>

        <div class="d-flex justify-end my-2">
          <v-btn
            class="mx-2 text-capitalize"
            color="error"
            @click="handleDelete(true)"
          >
            削除
          </v-btn>
          <v-btn
            class="mx-2 text-capitalize"
            variant="outlined"
            @click="handleCancel(false)"
          >
            キャンセル
          </v-btn>
        </div>
      </v-sheet>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from '#app';
import { useTaskStore } from '@/stores/task';

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const dialog = ref(false);

const router = useRouter();
const taskStore = useTaskStore();

const openDialog = () => {
  dialog.value = true;
};

const handleDelete = async () => {
  await taskStore.deleteTask(props.task.id);
  dialog.value = false;
  router.push({ path: '/' });
};

const handleCancel = () => {
  dialog.value = false;
};
</script>

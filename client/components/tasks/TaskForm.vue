<template>
  <v-sheet class="my-2 mx-5">
    <v-form ref="form" @submit.prevent="handleSubmit">
      <v-text-field
        v-model="formData.title"
        label="タイトル*"
        :rules="titleRules"
        required
      ></v-text-field>

      <v-textarea v-model="formData.description" label="詳細"></v-textarea>

      <date-picker v-model="formData.due_date"></date-picker>

      <v-select
        v-model="formData.status"
        :items="statusList"
        label="ステータス*"
        :rules="statusRules"
        required
      ></v-select>

      <div class="d-flex justify-end my-2">
        <v-btn class="mx-2 text-capitalize" :color="submitColor" type="submit">
          {{ submitText }}
        </v-btn>
        <v-btn
          class="mx-2 text-capitalize"
          variant="outlined"
          @click="emit('cancel')"
        >
          キャンセル
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import DatePicker from '@/components/tasks/DatePicker.vue';

const props = defineProps({
  initialData: {
    type: Object,
    required: true,
  },
  statusList: {
    type: Array,
    required: true,
  },
  submitText: {
    type: String,
    default: '作成',
  },
  submitColor: {
    type: String,
    default: 'primary',
  },
});

const emit = defineEmits(['submit', 'cancel']);

const form = ref(null);
const formData = ref({ ...props.initialData });

const titleRules = [(v) => !!v || 'タイトルは必須です'];

const statusRules = [(v) => !!v || 'ステータスは必須です'];

const handleSubmit = async () => {
  const { valid } = await form.value.validate();
  if (valid) {
    emit('submit', formData.value);
  }
};
</script>

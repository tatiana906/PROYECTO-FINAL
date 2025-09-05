<template>
  <q-dialog v-model="show" :persistent="persistent">
    <q-card class="dialog-card">
      <!-- Encabezado con icono y título -->
      <q-card-section class="row items-center">
        <q-avatar :icon="icon" :color="color" text-color="white" />
        <span class="text-h6 q-ml-sm">{{ title }}</span>
      </q-card-section>

      <!-- Mensaje -->
      <q-card-section class="q-pt-none">
        {{ message }}
      </q-card-section>

      <!-- Botones -->
      <q-card-actions align="right">
        <q-btn
          flat
          label="Aceptar"
          :color="color"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineEmits, defineProps, ref, computed, watch } from 'vue';

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Éxito'
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    validator: value => ['success', 'error', 'info', 'warning'],
    default: 'success'
  },
  persistent: {
    type: Boolean,
    default: false
  }
});

// V-model
const show = ref(props.modelValue);

// Icono y color según tipo
const iconMap = {
  success: 'check',
  error: 'warning',
  info: 'info',
  warning: 'priority_high'
};

const colorMap = {
  success: 'green',
  error: 'red',
  info: 'blue',
  warning: 'orange'
};

const icon = computed(() => iconMap[props.type]);
const color = computed(() => colorMap[props.type]);

// Emit para v-model
const emit = defineEmits(['update:modelValue', 'close']);

watch(() => props.modelValue, (newVal) => {
  show.value = newVal;
});

watch(show, (newVal) => {
  emit('update:modelValue', newVal);
  if (!newVal) {
    emit('close');
  }
});
</script>

<style scoped>
.dialog-card {
  background: #1e1e1e;
  color: white;
  min-width: 300px;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.dialog-card .text-h6 {
  color: white;
  font-weight: bold;
}

.q-card-section {
  font-size: 14px;
  color: #ddd;
}
</style>
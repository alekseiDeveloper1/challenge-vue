<template>
  <div class="text-h6 q-pa-md">
    Учетные записи
    <q-btn label="+" outline color="gray" @click="emit('handleAdd')" />
  </div>
</template>

<script setup lang="ts">

interface Emits {
  (e: 'handleAdd'): void;
}

const emit = defineEmits<Emits>();
</script>

<template>

    <td class="text-left">
      <q-input v-model="tag" outlined maxlength="50"/>
    </td>
    <td class="text-left">
      <q-select v-model="vItem.typeRecord" :options="options" outlined/>
    </td>
    <td class="text-left">
      <q-input
        v-model="vItem.login" outlined maxlength="100" required :rules="[val => !!val || 'Field is required']"/>
    </td>
    <td class="text-left" v-if="vItem.typeRecord === 'Локальная'">
      <q-input
        v-model="vItem.password" outlined :type="vItem.isPwd ? 'password' : 'text'" maxlength="100" required
        :rules="[val => !!val || 'Field is required']">
        <template v-slot:append>
          <q-icon
            :name="vItem.isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="vItem.isPwd = !vItem.isPwd"

          />
        </template>
      </q-input>
    </td>
    <td>
      <q-icon name="delete" size="sm" />
    </td>
</template>

<script setup lang="ts">
import {options} from "src/scripts";
import {computed} from "vue";
import type {UsersRecords} from "stores/example-store";
const props = defineProps<{item: UsersRecords}>()
interface Emits {
  (e: 'updateStore', value: UsersRecords): void;
}

const emit = defineEmits<Emits>();
const vItem = computed({
  get: () => props.item,
  set: (item) => emit('updateStore', item)
})
const tag = computed({
  get: () => vItem.value.tags.reduce((acc, item) => `${acc}${item.text};`, ''),
  set: (item) => item.split(';').forEach((text) =>vItem.value.tags.push({text: text.trim()}))})

</script>

<template>

    <td class="text-left">
      <q-input v-model="vTag" outlined maxlength="50" @blur="setTag"/>
    </td>
    <td class="text-left">
      <q-select v-model="vItem.typeRecord" :options="options" outlined @update:model-value="setStore"/>
    </td>
    <td class="text-left">
      <q-input
        v-model="vItem.login" outlined maxlength="100" required
        :rules="[val => !!val || 'Field is required']" @blur="setStore"/>
    </td>
    <td class="text-left" v-if="vItem.typeRecord === 'Локальная'">
      <q-input
        v-model="vItem.password" outlined :type="isPwd ? 'password' : 'text'" maxlength="100" required
        :rules="[val => !!val || 'Field is required']" @blur="setStore">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"

          />
        </template>
      </q-input>
    </td>
    <td>
      <q-icon name="delete" size="sm" @click="() => delRecord()"/>
    </td>
</template>

<script setup lang="ts">
import {options} from "src/scripts";
import {computed, ref, watch} from "vue";
import type {UsersRecords} from "stores/example-store";
const props = defineProps<{item: UsersRecords, keyIndex:number}>()
interface Emits {
  (e: 'updateStore', value: UsersRecords): void;
  (e: 'delRecord', value: number): void;
}
const emit = defineEmits<Emits>();
const vTag = ref('')
const vItem = computed(() => props.item)
const isPwd = ref(true)
const setTag = () => {
  if (!vTag.value) return
  vItem.value.tags = vTag.value.split(';').map((text) =>({text: text.trim()})).filter(t=>t.text) ?? []
  setStore()
}

const setStore = () => {
  if(!vItem.value.login || !vItem.value.password && vItem.value.typeRecord === 'Локальная') return
  if(vItem.value.typeRecord === 'LDAP') vItem.value.password = null
  emit('updateStore', { ...vItem.value });
}

const delRecord = () => {
  emit('delRecord', props.keyIndex);
}

watch(vItem.value.tags, (newValue) => {
  vTag.value = newValue.map((item) => item.text).join('; ');
},{ deep: true } )
</script>

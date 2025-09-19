<template>
  <thead>
  <tr>
    <th class="text-left">Метки</th>
    <th class="text-left">Тип записи</th>
    <th class="text-left">Логин</th>
    <th class="text-left" >Пароль</th>
  </tr>
  </thead>
  <tbody v-if="vModal?.length">

  <tr v-for="(item, index) in vModal" :key="index">
    <record-items :item="item" @updateStore="updateStore" @delRecord="delRecord" :keyIndex="index"/>
  </tr>
  </tbody>
</template>

<script setup lang="ts">
import { onBeforeMount, ref} from "vue";
import {useCounterStore, type UsersRecords} from "stores/example-store";
import RecordItems from "components/RecordItems.vue";
const vModal = ref<UsersRecords[]>();
const store = useCounterStore()

onBeforeMount(() => {
  vModal.value = store.state
})
const updateStore = () => {
  store.setState(vModal.value ?? []);
}

const delRecord = (index: number) => {
  if (!vModal.value) return;
  vModal.value.splice(index, 1);
  store.setState(vModal.value ?? []);
}

</script>

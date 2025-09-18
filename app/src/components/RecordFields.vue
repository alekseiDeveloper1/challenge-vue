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

  <tr v-for="item in vModal" :key="item.login">
    <record-items :item="item" @updateStore="updateStore" />
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
const updateStore = () => store.setState(vModal.value ?? []);

</script>

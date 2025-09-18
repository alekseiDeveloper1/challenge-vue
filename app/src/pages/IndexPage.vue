<template>
  <q-page class="q-pa-md">
    <q-card class="my-card" flat>
      <q-card-section>
        <add-button @handle-add="handleAdd" />
        <info-block/>
      </q-card-section>
      <q-markup-table>
        <fields/>
      </q-markup-table>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import InfoBlock from "components/InfoBlock.vue";
import AddButton from "components/AddButton.vue";
import Fields from "components/RecordFields.vue";
import {onBeforeMount, ref} from "vue";
import {useCounterStore, type UsersRecords} from "stores/example-store";
import {defaultRecord} from "src/scripts";

const vModal = ref<UsersRecords[]>();
const store = useCounterStore()

onBeforeMount(() => {
  vModal.value = store.state
})

const handleAdd = () => {
  if(!vModal.value) return;
  vModal.value.push(defaultRecord())
}

</script>

<template>
  <q-page class="q-pa-md">
    <q-card class="my-card" flat>
      <q-card-section>
        <div class="text-h6 q-pa-md">
          Учетные записи
          <q-btn label="+" outline color="gray" />
        </div>
        <div class="text-subtitle2">
          <info-block/>
        </div>
      </q-card-section>

      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">Метки</th>
          <th class="text-left">Тип записи</th>
          <th class="text-left">Логин</th>
          <th class="text-left">Пароль</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">
              <q-input v-model="mask" outlined/>
            </td>
            <td class="text-left">
              <q-select v-model="mask" outlined/>
            </td>
            <td class="text-left">
              <q-input v-model="mask" outlined/>
            </td>
            <td class="text-left">
              <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
    <div class="text-h6">

    </div>

    <div class="row">

    </div>
  </q-page>
</template>

<script setup lang="ts">

import InfoBlock from "components/InfoBlock.vue";
import {ref} from "vue";
const mask = ref('')
const password = ref('')
const isPwd = ref(true)
</script>

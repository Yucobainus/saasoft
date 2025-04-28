<template>
  <section class="wrapper">
    <div class="user-form">
      <div class="section-header">
        <h1>Учётные записи</h1>
        <v-btn @click="store.createUser">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </div>

      <VClue class="user-form__clue"
        >Для указания нескольких меток для одной пары логин/пароль используйте
        разделитель ;</VClue
      >

      <VForm />
    </div>
  </section>
</template>

<script lang="ts" setup>
import VClue from "@/components/VClue.vue";
import VForm from "@/components/VForm.vue";
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>

<style lang="scss">
.wrapper {
  padding: 40px 0 0 0;
  margin: 0 auto;
}

.section-header {
  display: flex;
  column-gap: 10px;
}

.user-form {
  width: 1200px;
  &__clue {
    margin-bottom: 60px;
    margin-top: 40px;
  }
}
</style>

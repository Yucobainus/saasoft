<template>
  <div class="v-form">
    <div class="v-form__title">
      <div class="v-form-grid">
        <div class="form-title-column">
          <span> {{ dict.marks }} </span>
        </div>
        <div class="form-title-column">
          <span> {{ dict.type }} </span>
        </div>
        <div class="form-title-column">
          <span> {{ dict.login }} </span>
        </div>
        <div class="form-title-column">
          <span> {{ dict.password }} </span>
        </div>
      </div>
    </div>
    <div class="v-form__content">
      <VUser
        v-for="user in store.users"
        v-bind:key="user.id"
        :id="user.id"
        :marks="user.marks"
        :login="user.login"
        :type="user.type"
        :password="user.password"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";
import dict from "@/components/dictionary";
import VUser from "./VUser.vue";

const store = useAppStore();
</script>

<style lang="scss" scoped>
.form-title-column {
  width: 250px;
  padding: 0px 30px 0 0;
}

.v-form-grid {
  display: flex;
  margin-bottom: 30px;
}
</style>

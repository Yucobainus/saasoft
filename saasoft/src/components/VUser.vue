<template>
  <div class="v-user-grid">
    <div class="user-column">
      <v-text-field v-model="user.marks"></v-text-field>
    </div>
    <div class="user-column">
      <v-select label="Select" v-model="user.type" :items="types"></v-select>
    </div>
    <div
      class="user-column user-column__login"
      :class="{ 'user-column__login_ldap': type === 'ldap' }"
    >
      <v-text-field
        v-model="user.login"
        :error="loginValidation.loginError"
        :error-messages="loginValidation.errorMessage()"
        :rules="loginValidation.rules"
      ></v-text-field>
    </div>
    <div class="user-column" v-if="type === 'local'">
      <v-text-field
        v-model="user.password"
        :rules="passwordValidation.rules"
        :error="passwordValidation.errorPassword"
        :error-messages="passwordValidation.errorMessage()"
        :type="showPassword ? 'text' : 'password'"
        hide-details="auto"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
    </div>
    <div class="user-column user-column__delete">
      <div>
        <v-btn @click="store.deleteUser(id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, reactive } from "vue";
import { useAppStore } from "@/stores/app";
import { loginValidation, passwordValidation } from "./constants/validation";

const store = useAppStore();
const showPassword = ref(false);
const types = ref<Array<string>>(["local", "ldap"]);

interface IProps {
  id: number;
  login: string;
  password: string | null;
  marks: Array<{ text: string }>;
  type: string;
}
const props = defineProps<IProps>();

const user = reactive({
  id: props.id,
  login: props.login,
  password: props.password,
  marks: createMarkString(props.marks),
  type: props.type,
});

watch(user, (value) => {
  let validation = true;

  if (validation) {
    const updatedUser = {};
    Object.assign(updatedUser, value);
    const marksArray = [];
    value.marks.split(";").forEach((mark) => {
      marksArray.push({ text: mark });
    });
    updatedUser.marks = marksArray;
    if (updatedUser.type === "ldap") {
      updatedUser.password = null;
    }
    store.updateUser(updatedUser);
  }
});

function createMarkString(marks: Array<{ text: string }>) {
  let marksString = "";
  marks.forEach((mark) => {
    marksString += `${mark.text};`;
  });
  return marksString;
}
</script>

<style lang="scss" scoped>
.user-column {
  min-width: 250px;
  padding: 0px 20px 0 0;
  &__delete {
    min-width: 0;
    width: 64px;
    margin-top: 10px;
    justify-self: flex-end;
  }
  &__login {
    &_ldap {
      flex-grow: 1;
    }
  }
}
.v-user-grid {
  display: flex;
}
</style>

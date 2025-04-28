// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("store", {
  state: () => ({
    users: [
      {
        id: 1,
        marks: [{ text: "mark1" }, { text: "mark2" }, { text: "mark3" }],
        type: "local",
        login: "user 1",
        password: "12345",
      },
      {
        id: 2,
        marks: [{ text: "mark3" }, { text: "mark4" }, { text: "mark2" }],
        type: "ldap",
        login: "user 2",
        password: null,
      },
    ],
  }),
  actions: {
    async createUser() {
      this.users.push({
        id: this.getNewId,
        marks: [],
        type: "local",
        login: "",
        password: "",
      });
    },
    async updateUser(user: any) {
      this.users[user.id - 1] = user;
    },
    async deleteUser(id: number) {
      this.users.splice(id - 1, 1);
    },
  },
  getters: {
    getNewId: (state) => {
      return state.users.length + 1;
    },
  },
});

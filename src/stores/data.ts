import { defineStore } from "pinia";

export const useDataStore = defineStore({
  persist: true,
  id: "data",
  state: () => ({
    darkMode: false,
    leftSiderCollapsed: false,
    host: "localhost",
    port: 18021,
    firstTime: true,
    connected: false,
    connecting: false,
  }),
  getters: {},
  actions: {},
});

<script setup lang="ts">
import { RouterView } from "vue-router";
import MessageApi from "@/components/MessageApi.vue";
import DialogApi from "@/components/DialogApi.vue";
import LoadingBarApi from "@/components/LoadingBarApi.vue";
import {
  NMessageProvider,
  NDialogProvider,
  NLoadingBarProvider,
  darkTheme,
  NConfigProvider,
  zhCN,
} from "naive-ui";
import { useDataStore } from "@/stores/data";
const data = useDataStore();
</script>

<template>
  <NLoadingBarProvider>
    <LoadingBarApi />
  </NLoadingBarProvider>
  <NMessageProvider>
    <MessageApi />
  </NMessageProvider>
  <NDialogProvider>
    <DialogApi />
  </NDialogProvider>
  <NConfigProvider
    :theme="data.darkMode ? darkTheme : null"
    inline-theme-disabled
    :locale="zhCN"
  >
    <div id="app" style="height: 100vh">
      <RouterView />
    </div>
  </NConfigProvider>
</template>

<style></style>

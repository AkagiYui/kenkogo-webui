<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import MessageApi from "@/components/MessageApi.vue";
import DialogApi from "@/components/DialogApi.vue";
import LoadingBarApi from "@/components/LoadingBarApi.vue";
import NotificationApi from "@/components/NotificationApi.vue";
import {
  NMessageProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NNotificationProvider,
  darkTheme,
  NConfigProvider,
  zhCN,
} from "naive-ui";
import Server from "@/utils/server";
import { useDataStore } from "@/stores/data";
const data = useDataStore();

onMounted(() => {
  if (data.connected) {
    Server.instance().connect();
  }
});
</script>

<template>
  <NConfigProvider
    :theme="data.darkMode ? darkTheme : null"
    inline-theme-disabled
    :locale="zhCN"
  >
    <NLoadingBarProvider>
      <LoadingBarApi />
    </NLoadingBarProvider>
    <NMessageProvider>
      <MessageApi />
    </NMessageProvider>
    <NDialogProvider>
      <DialogApi />
    </NDialogProvider>
    <NNotificationProvider placement="bottom-right">
      <NotificationApi />
    </NNotificationProvider>
    <div id="app" style="height: 100vh">
      <RouterView />
    </div>
  </NConfigProvider>
</template>

<style></style>

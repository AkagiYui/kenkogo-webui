<script setup lang="ts">
import { NIcon, NDropdown, NH2, NButton } from "naive-ui";
import { TITLE } from "@/config";
import { h, type Component } from "vue";
import { LogOutOutline as LogoutIcon, ChevronDown } from "@vicons/ionicons5";
import Server from "@/utils/server";
import { useDataStore } from "@/stores/data";
const data = useDataStore();

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function handleSelect(key: string | number) {
  if (key === "logout") {
    window.$message.info("已退出登录");
  }
}

function handleConnect() {
  if (data.connected) {
    Server.instance().disconnect();
  } else {
    Server.instance().connect();
  }
}

const options = [
  {
    label: "不要点击",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];
</script>

<template>
  <div style="height: 100%; display: flex; align-items: center">
    <div style="flex: 1; margin-left: 36px; vertical-align: middle">
      <RouterLink to="/">
        <!-- TODO: 图标与标题水平居中 -->
        <NIcon size="38" style="top: 15px">
          <img src="@/assets/logo.svg" style="height: 100%" />
        </NIcon>
      </RouterLink>
      <RouterLink to="/">
        <NH2 style="margin-left: 10px; display: inline-block">{{ TITLE }}</NH2>
      </RouterLink>
    </div>
    <NButton
      ref="buttonRef"
      secondary
      :type="data.connected ? 'success' : 'warning'"
      style="margin-right: 20px"
      @click="handleConnect"
      :loading="data.connecting"
    >
      {{ data.connected ? "已" : "未" }}连接到服务器
    </NButton>
    <NDropdown
      v-if="false"
      :options="options"
      placement="bottom-end"
      @select="handleSelect"
    >
      <!-- TODO: 头像/人名/箭头水平 对齐且居中 -->
      <div style="margin-right: 30px">
        <span style="line-height: 100%; font-size: 16px">这里是 name 啊</span>
        <NIcon
          :component="ChevronDown"
          size="22px"
          style="margin-left: 2px; vertical-align: middle"
        />
      </div>
    </NDropdown>
  </div>
</template>

<script setup lang="ts">
import { NMenu, NIcon } from "naive-ui";
import { h, type Component } from "vue";
import type { MenuOption } from "naive-ui";
import { RouterLink, useRoute } from "vue-router";
import {
  Settings24Regular,
  Home24Regular,
  Bot24Regular,
  ScanObject24Regular,
} from "@vicons/fluent";
import { FileDigit, BrandPython } from "@vicons/tabler";
const route = useRoute();
const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "overview",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "总览" }
      ),
    key: "overview",
    icon: renderIcon(Home24Regular),
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px",
      },
    },
  },
  {
    label: "go-cqhttp 管理",
    key: "gocq-manage",
    icon: renderIcon(Bot24Regular),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "bin-file-manage",
                params: {
                  lang: "zh-CN",
                },
              },
            },
            { default: () => "二进制文件管理" }
          ),
        key: "bin-file-manage",
        icon: renderIcon(FileDigit),
      },
      {
        label: "实例管理",
        key: "instance-manage",
        icon: renderIcon(ScanObject24Regular),
      },
    ],
  },
  {
    label: "Python 管理",
    key: "script-manage",
    icon: renderIcon(BrandPython),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "setting",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "设置" }
      ),
    key: "setting",
    icon: renderIcon(Settings24Regular),
  },
];
</script>

<template>
  <NMenu
    accordion
    :collapsed="props.collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    style="min-height: 100%; padding-top: 5px"
    :value="(route.name as string)"
    :indent="20"
  />
</template>

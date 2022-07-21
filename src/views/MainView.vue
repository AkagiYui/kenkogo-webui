<script setup lang="ts">
import { RouterView } from "vue-router";
import {
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  NScrollbar,
} from "naive-ui";
import TopBar from "@/components/TopBar.vue";
import { useDataStore } from "@/stores/data";
import LeftSider from "@/components/LeftSider.vue";
const data = useDataStore();
</script>

<template>
  <div>
    <NLayout>
      <NLayoutHeader bordered style="height: 60px">
        <TopBar />
      </NLayoutHeader>
      <NLayout has-sider bordered>
        <NLayoutSider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="200"
          v-model:collapsed="data.leftSiderCollapsed"
          show-trigger
        >
          <LeftSider :collapsed="data.leftSiderCollapsed" />
        </NLayoutSider>
        <NScrollbar class="scro">
          <NLayoutContent>
            <RouterView />
          </NLayoutContent>
        </NScrollbar>
      </NLayout>
    </NLayout>
  </div>
</template>

<style>
.scro {
  max-height: calc(100vh - 120px);
  min-height: calc(100vh - 120px);
  padding: 30px;
}
</style>

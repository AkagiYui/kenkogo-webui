<script setup lang="ts">
import { NSpace, NIcon, NStatistic, NNumberAnimation, NH1 } from "naive-ui";
import { ShiftsOpen24Regular } from "@vicons/fluent";
</script>

<template>
  <NSpace vertical>
    <NH1>该页暂时为假数据</NH1>
    <NStatistic label="进行中的事件" :value="233">
      <template #prefix>
        <NIcon>
          <ShiftsOpen24Regular />
        </NIcon>
      </template>
      <template #suffix> / 114514 </template>
    </NStatistic>
    <NStatistic label="已经历的事件" tabular-nums>
      <NNumberAnimation
        ref="numberAnimationInstRef"
        show-separator
        :from="0"
        :to="1919810"
        :active="true"
      />
    </NStatistic>
  </NSpace>
</template>

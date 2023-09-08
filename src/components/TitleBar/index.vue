<template>
  <div
    data-tauri-drag-region
    class="fixed top-0 left-0 right-0 flex justify-end h-10"
  >
    <n-button quaternary :focusable="false" @click="() => appWindow.minimize()">
      <template #icon>
        <n-icon>
          <ArrowMinimizeVertical20Regular />
        </n-icon>
      </template>
    </n-button>
    <n-button
      quaternary
      :focusable="false"
      @click="() => appWindow.toggleMaximize()"
    >
      <template #icon>
        <n-icon>
          <PanelSeparateWindow20Regular />
        </n-icon>
      </template>
    </n-button>
    <n-button quaternary :focusable="false" @click="() => appWindow.close()">
      <template #icon>
        <n-icon>
          <ClosedCaptionOff20Regular />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowMinimizeVertical20Regular,
  PanelSeparateWindow20Regular,
  ClosedCaptionOff20Regular,
} from "@vicons/fluent";
import { appWindow } from "@tauri-apps/api/window";
</script>

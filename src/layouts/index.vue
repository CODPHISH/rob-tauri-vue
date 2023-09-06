<template>
  <div>
    <n-layout has-sider>
      <n-layout-sider width="60">
        <SiderMenu />
      </n-layout-sider>
      <n-layout>
        <n-layout-content>
          <MainContent />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import SiderMenu from "./SiderMenu.vue";
import MainContent from "./MainContent.vue";
</script>

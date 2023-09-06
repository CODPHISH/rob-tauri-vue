<template>
  <div class="h-screen bg-[#ebebeb] flex flex-col items-center pt-4 pb-4">
    <div>
      <n-avatar
        round
        size="medium"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <div class="flex flex-col flex-1 gap-4 mt-4 mb-4">
      <n-popover
        placement="right"
        trigger="hover"
        :show-arrow="false"
        :delay="500"
        style="padding: 3px 6px"
        v-for="(item, index) in menus"
        :key="index"
      >
        <template #trigger>
          <n-button
            quaternary
            @click="() => handleClick(item)"
            class="px-1 py-1 rounded-lg"
            :class="{ 'bg-[#d7d8d8]': item.value === currentMenu }"
          >
            <n-icon
              :component="
                item.value === currentMenu
                  ? item.component[1]
                  : item.component[0]
              "
              size="30"
              :color="item.value === currentMenu ? '#0e7a0d' : ''"
            ></n-icon>
          </n-button>
        </template>
        <span class="text-xs">{{ item.label }}</span>
      </n-popover>
    </div>
    <div>
      <n-popselect :options="options" trigger="click" placement="right-end">
        <n-button text :focusable="false">
          <n-icon :component="Menu" size="30"></n-icon>
        </n-button>
      </n-popselect>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Menu,
  CartOutline,
  Cart,
  PersonOutline,
  Person,
} from "@vicons/ionicons5";

type Menu = { label: string; component: any[]; value: number; path: string };

const router = useRouter();

const currentMenu = ref(1);

const menus: Menu[] = [
  {
    label: "订单",
    component: [CartOutline, Cart],
    value: 1,
    path: "/demo/order",
  },
  {
    label: "个人",
    component: [PersonOutline, Person],
    value: 2,
    path: "/demo/profile",
  },
];

const options = [
  {
    label: "关于",
    value: 1,
  },
  {
    label: "设置",
    value: 2,
  },
];

const handleClick = (menu: Menu) => {
  currentMenu.value = menu.value;
  router.push({ path: menu.path, replace: true });
};
</script>

<script setup lang="ts">
import { NButton } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
type Product = {
  id: number;
  name: string;
  size: number;
  color: string;
};

const createColumns = ({
  start,
}: {
  start: (row: Product) => void;
}): DataTableColumns<Product> => {
  return [
    {
      title: "商品名称",
      key: "name",
    },
    {
      title: "内存(G)",
      key: "size",
      width: 100,
    },
    {
      title: "颜色",
      key: "color",
      width: 100,
    },
    {
      title: "操作",
      key: "actions",
      width: 100,
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => start(row),
          },
          {
            default: () => "开始抢购",
          }
        );
      },
    },
  ];
};

const data = ref<Product[]>([
  {
    id: 1,
    name: "华为Mate60pro",
    size: 512,
    color: "白",
  },
]);
const columns = createColumns({
  start(row: Product) {
    console.log(row);
  },
});
</script>

<template>
  <div>
    <n-data-table :columns="columns" :data="data" :bordered="false" />
  </div>
</template>

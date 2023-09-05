import { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: "/dashboard",
    meta: {
      title: "Root",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Layout,
    meta: {
      title: "Dashboard",
    },
  },
];

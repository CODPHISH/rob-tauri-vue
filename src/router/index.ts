import { createRouter, createWebHashHistory } from "vue-router/auto";
import type { App } from "vue";

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes/basic";
import type { App } from "vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

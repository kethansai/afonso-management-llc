import "@/style.css";

import { createApp } from "vue";

import App from "@/App.vue";
import ElementPlus from "element-plus";
import router from "@/router";

(async () => {
  const app = createApp(App);
  app.use(router);
  app.use(ElementPlus);
  await router.isReady();
  app.mount("#app");
})();

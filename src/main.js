import "@/style.css";

import App from "@/App.vue";
import router from "@/router";
import { createApp } from "vue";

(async () => {
  const app = createApp(App);
  app.use(router);
  await router.isReady();
  app.mount("#app");
})();

import "@/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { addIcons } from "@/utils/icons";
import { useTheme } from "@/composables/useTheme";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "@/App.vue";
import router from "@/router";
import ElementPlus from "element-plus";

addIcons(library);

(async () => {
  // Initialize theme before mounting the app
  const { initializeTheme } = useTheme();
  initializeTheme();

  const app = createApp(App);
  app.use(router);
  app.use(ElementPlus);
  app.component("FAI", FontAwesomeIcon);
  await router.isReady();
  app.mount("#app");
})();

import "@/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { addIcons } from "@/utils/icons";
import { useTheme } from "@/composables/useTheme";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MotionPlugin } from "@vueuse/motion";

import App from "@/App.vue";
import ElementPlus from "element-plus";

addIcons(library);

(async () => {
  // Initialize theme before mounting the app
  const { initializeTheme } = useTheme();
  initializeTheme();

  const app = createApp(App);
  app.use(ElementPlus);
  app.use(MotionPlugin);
  app.component("FAI", FontAwesomeIcon);
  app.mount("#app");
})();

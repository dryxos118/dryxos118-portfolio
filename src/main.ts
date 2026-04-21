import "./assets/css/main.css";

import { createApp } from "vue";
import ui from "@nuxt/ui/vue-plugin";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
app.use(ui);
app.use(MotionPlugin);
app.mount("#app");

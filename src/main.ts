import { createApp } from "vue";

import "./assets/css/main.css";

import App from "./App.vue";

import ui from "@nuxt/ui/vue-plugin";
import { MotionPlugin } from "@vueuse/motion";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(ui);
app.use(MotionPlugin);

app.mount("#app");

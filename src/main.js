import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
// .use(autoAnimatePlugin)

createApp(App).use(router).mount("#app");

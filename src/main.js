import Vue from "vue";
import App from "./App.vue";

import "./style/main.scss";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import router from "./router";
import { ValidationProvider, ValidationObserver } from "vee-validate";

// Register it globally
// main.js or any entry file.
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

UIkit.use(Icons);
// Vue.use(uikit);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

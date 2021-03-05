import Vue from "vue";
import App from "./App.vue";

import "./style/main.scss";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import router from "./router";

UIkit.use(Icons);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "bulma";
import router from "./router";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from 'vee-validate';

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

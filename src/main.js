// Vue libraries
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "foundation-sites/dist/css/foundation.min.css";
import "./assets/scripts/main.js";
import "./assets/styles/main.scss";
import VueLazyload from "vue-lazyload";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.config.productionTip = false;
Vue.use(VueLazyload);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

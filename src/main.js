// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from './assets/css/bootstrap.css'
import iconfont from "./assets/js/iconfont";
import base from "./assets/css/base.css";
import footer from '@/components/Footer'
import header from '@/components/Header'
import section from '@/components/Section'
import VueResource from "vue-resource";
import Item from "@/components/Item"
import floor from "@/components/Floor"
Vue.config.productionTip = false

Vue.component("Footer",footer);
Vue.component("Header",header);
Vue.component("Section",section);
Vue.component("Item",Item);
Vue.component("Floor",floor);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

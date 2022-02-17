import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
Vue.mixin({
  data() {
    return {
      // serverpath: "http://localhost/unsdgs_api/",
      serverpath: "https://yaksaconcept.com/unsdgs_api/",
    };
  },
  methods: {
    redNotify(text) {
      this.$q.notify({
        message: text,
        icon: "fas fa-exclamation",
        color: "negative",
        position: "top",
        icon: "fas fa-exclamation-circle",
      });
    },
    //Notification สีเขียว
    greenNotify(text) {
      this.$q.notify({
        message: text,

        color: "secondary",
        position: "top",
        icon: "fas fa-check-circle",
      });
    },
  },
});

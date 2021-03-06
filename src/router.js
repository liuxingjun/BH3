import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/furniture",
      name: "furniture",
      component: () =>
        import(/* webpackChunkName: "furniture" */ "./views/furniture.vue")
    },
    {
      path: "/level",
      name: "level",
      component: () =>
        import(/* webpackChunkName: "furniture" */ "./views/level.vue")
    }
  ]
});

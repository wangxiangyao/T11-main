import Vue from "vue";
import VueRouter from "vue-router";
import nav from "../store/nav";

Vue.use(VueRouter);

const routes = buildRoutes(nav);
function buildRoutes (nav) {
  let routes = [];
  for (let [key, value] of Object.entries(nav)) {
    if (value.children) {
      let children = buildRoutes(value.children);
      routes.push({
        ...value.router,
        children,
      });
    } else {
      routes.push({
        ...value.router
      });
    }
  }
  return routes;
}

routes.push({
  path: "/",
  name: "root",
  redirect: "/home"
})

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

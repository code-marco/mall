import Vue from "vue";
import VueRouter from "vue-router";

// 重写push方法失效
// const routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(path) {
//   return routerPush.call(this, path).catch(err => err);
// };

// 用的是replace方法
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(path) {
  return originalReplace.call(this, path).catch(err => err);
};

Vue.use(VueRouter);

// 路由懒加载
const Home = () => import("views/home/Home.vue");
const Cart = () => import("views/cart/Cart.vue");
const Profile = () => import("views/profile/Profile.vue");
const Category = () => import("views/category/Category.vue");

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/category",
    component: Category
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

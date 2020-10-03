import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import ProfilePage from "../views/Profile.vue";
import DiscoverPage from "../views/Discover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/homepage",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage
  },
  {
    path: "/discover",
    name: "discover-page",
    component: DiscoverPage
  }
];

const router = new VueRouter({
  routes
});

export default router;

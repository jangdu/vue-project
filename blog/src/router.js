import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList'
import BlogHome from './components/BlogHome'

const routes = [
  {
    path: "/blogList",
    component: BlogList,
  },
  {
    path: "/blogHome",
    component: BlogHome,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
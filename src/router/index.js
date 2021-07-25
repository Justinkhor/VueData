import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Student from "@/views/Student.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/student/:name",
    name: "Student",
    props: true,
    component: Student
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
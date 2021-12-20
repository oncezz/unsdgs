const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/",
    component: () => import("pages/landing.vue"),
  },
  {
    path: "/syllabus",
    component: () => import("pages/syllabus.vue"),
  },
  {
    path: "/references",
    component: () => import("pages/references.vue"),
  },
  {
    path: "/signup",
    component: () => import("pages/signup.vue"),
  },
  {
    path: "/profile",
    component: () => import("pages/profile.vue"),
  },
  {
    path: "/study",
    component: () => import("pages/study.vue"),
  },
];

export default routes;

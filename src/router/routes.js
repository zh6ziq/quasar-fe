const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/MainPage.vue") },
      {
        path: "/get-started",
        component: () => import("pages/auth/StartPage.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/DashboardPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

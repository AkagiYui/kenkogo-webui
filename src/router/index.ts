import { TITLE } from "@/config";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/MainView.vue"),
      meta: {
        title: "主页",
      },
      redirect: { name: "overview" },
      children: [
        {
          path: "/overview",
          name: "overview",
          component: () => import("../views/OverviewView.vue"),
          meta: {
            title: "总览",
          },
        },
        {
          path: "/setting",
          name: "setting",
          component: () => import("../views/SettingView.vue"),
          meta: {
            title: "设置",
          },
        },
        {
          path: "/gocq/binfile",
          name: "bin-file-manage",
          component: () => import("../views/GocqViews/BinFileManageView.vue"),
          meta: {
            title: "二进制文件管理",
          },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/NotFoundView.vue"),
      meta: {
        title: "发生错误",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title && typeof to.meta.title === "string") {
    const mainTitle = TITLE;
    if (to.meta.title !== "") {
      document.title = to.meta.title + " | " + mainTitle;
    } else {
      document.title = mainTitle;
    }
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }, // 登录成功后回到当前页面
    });
  } else {
    next();
  }
});

export default router;

export default [
  {
    path: "/",
    redirect: "/index-page",
  },
  {
    path: "/auth/:type",
    name: "Auth",
    component: () => import("views/Auth/index.vue"),
    meta: {
      title: "",
    },
  },
  {
    path: "/index-page",
    name: "index-page",
    component: () => import("views/IndexPage/index.vue"),
    meta: {
      title: "赚赚",
      isTabPage: true,
      isKeepAlive: true,
      jsApiList: ["getLocation"],
    },
  },
  {
    path: "/special-sale",
    name: "special-sale",
    component: () => import("views/SpecialSale/index.vue"),
    meta: {
      title: "特卖",
      isTabPage: true,
      isKeepAlive: true,
    },
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("views/Friends/index.vue"),
    meta: {
      title: "好友",
      isTabPage: true,
      isKeepAlive: true,
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("views/Mine/index.vue"),
    meta: {
      title: "我的",
      isTabPage: true,
      isKeepAlive: true,
    },
  },
  {
    path: "/gold-coin-withdraw",
    name: "gold-coin-withdraw",
    component: () => import("views/GoldCoinWithdraw/index.vue"),
    meta: {
      title: "金币提现",
    },
  },
  {
    path: "/gold-coin-details",
    name: "gold-coin-details",
    component: () => import("views/GoldCoinDetails/index.vue"),
    meta: {
      title: "金币明细",
    },
  },

  {
    path: "/download",
    name: "download",
    component: () => import("views/Download/index.vue"),
    meta: {
      title: "下载",
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("views/Test/index.vue"),
    meta: {
      title: "测试",
    },
  },
  {
    path: "/list-page",
    name: "ListPage",
    component: () => import("views/ListPage/index.vue"),
    meta: {
      title: "列表页",
    },
  },
  {
    path: "/tab-page",
    name: "TabPage",
    component: () => import("views/TabPage/index.vue"),
    meta: {
      title: "标签页",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("views/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

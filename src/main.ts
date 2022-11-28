/*
 * @Author: Lee
 * @Date: 2022-11-25 15:33:31
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-28 10:25:40
 * @Description:
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import vconsole from "vconsole";
import vant from "vant";
import App from "./App.vue";
import router from "./router";

import Tools from "lg-tools";
import Schemes from "lg-schemes";

import filters from "@/filters";
import directives from "@/directives";

import "./assets/styles/main.css";
import "./utils/rem";
import "vant/lib/index.css";

// -- vconsole
if (import.meta.env.VITE_APP_ENV !== "pro") {
  new vconsole();
}

// -- 分环境加载脚本资源（同时开发支付宝生活号和微信公众号时配置）
/*if (import.meta.env.VITE_APP_SOURCE === "mp") {
  switch (Tools.getEnv()) {
    case "weixin":
      Tools.loadScript(["https://res.wx.qq.com/open/js/jweixin-1.6.0.js"]);
      break;
    case "alipay":
      Tools.loadScript(["https://a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.min.js"]);
      break;
    default:
  }
}*/

// -- App配置/挂载相关
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vant);

app.mount("#app");

// 配置全局属性 -- 访问：在setup函数中通过ctx访问 eg-ctx.$sayHi
app.config.globalProperties.$filters = filters;

// 自定义指令
directives(app);

// 配置Schemes(提示：原生嵌套H5时配置)
Schemes.config("xxx://www.xxx.com", "二级目录");

// -- Vuex 持久化
// → 页面进入：合并状态
/*const localState = localStorage.getItem("LOCAL_STORE_STATE");
if (localState) {
  console.log("合并Store...");
  store.replaceState(Object.assign(store.state, JSON.parse(localState)));
}
// → 页面刷新：存储状态
window.addEventListener("beforeunload", () => {
  console.log("缓存Store...");
  localStorage.setItem("LOCAL_STORE_STATE", JSON.stringify(store.state));
});*/

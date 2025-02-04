/*
 * @Author: Lee
 * @Date: 2023-03-06 18:19:42
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 19:54:50
 * @Description:
 */
import LibForWeixin from '@/utils/LibForWeixin';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  // -- 部署二级目录：createWebHistory(base?: string)
  history: createWebHistory(import.meta.env.VITE_APP_BASE),
  // -- 路由
  routes,
  // -- 滚动行为
  scrollBehavior: () => ({
    el: '#app',
    top: 0,
    behavior: 'smooth',
  }),
});

// 导航守卫
router.beforeEach(async (to, from) => {
  // → 判断是否加载JSSDK
  if (to.meta.jsApiList) {
    await LibForWeixin.initJSSDK(to.meta.jsApiList as string[])
      .then(() => {
        console.log('config JS-SDK success');
      })
      .catch(() => {
        console.log('config JS-SDK fail');
      });
  }
});

router.afterEach((to) => {
  // → 设置标题
  if (to.path !== '/favicon.icon') {
    document.title = to.meta.title ? (to.meta.title as string) : '';
  }
  // → 滚动
  window.scrollTo(0, 0);
});

export default router;

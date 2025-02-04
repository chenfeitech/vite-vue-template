/*
 * @Author: Lee
 * @Date: 2023-03-06 18:19:53
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 20:33:43
 * @Description:
 */

import { RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index-page',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/index-page',
        name: 'index',
        component: () => import('pages/Tabs/IndexPage.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/special-sale',
        name: 'SpecialSale',
        component: () => import('pages/Tabs/SpecialSale.vue'),
        meta: {
          title: '特卖',
        },
      },
      {
        path: '/friends',
        name: 'Friends',
        component: () => import('pages/Tabs/Friends.vue'),
        meta: {
          title: '好友',
        },
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('pages/Tabs/Mine.vue'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
  {
    path: '/auth/:type',
    name: 'Auth',
    component: () => import('pages/Auth/index.vue'),
    meta: {
      title: '',
    },
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('pages/Download/index.vue'),
    meta: {
      title: '下载',
    },
  },
  {
    path: '/examples/list',
    name: 'list',
    component: () => import('pages/Examples/List.vue'),
    meta: {
      title: 'LISTPAGE',
    },
  },
  {
    path: '/examples/tab',
    name: 'tab',
    component: () => import('pages/Examples/Tab.vue'),
    meta: {
      title: 'TABPAGE',
    },
  },
  {
    path: '/examples/gold-coin-withdraw',
    name: 'GoldCoinWithdraw',
    component: () => import('pages/Examples/GoldCoinWithdraw.vue'),
    meta: {
      title: '提现',
    },
  },
  {
    path: '/examples/gold-coin-details',
    name: 'GoldCoinDetails',
    component: () => import('pages/Examples/GoldCoinDetails.vue'),
    meta: {
      title: '金币明细',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('pages/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

export default routes;

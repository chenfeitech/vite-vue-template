/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-22 10:01:11
 * @LastEditTime: 2021-12-30 19:13:56
 * @LastEditors: Lee
 * @Description:
 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


interface ImportMetaEnv {
  VITE_APP_HOST: string;
  VITE_APP_BASE: string;
  VITE_APP_SOURCE: string;
  VITE_APP_APPID_WEIXIN: string;
  VITE_APP_APPID_ALIPAY: string;
}
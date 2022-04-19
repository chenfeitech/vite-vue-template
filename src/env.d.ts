/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-22 10:01:11
 * @LastEditTime: 2022-04-19 14:12:28
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
  // -- 当前环境
  readonly VITE_APP_ENV: string;
  // -- 输出目录
  readonly VITE_OUT_DIR: string;
  // -- 基础路径
  readonly VITE_APP_BASE: string;
  // -- 接口地址
  readonly VITE_APP_HOST: string;
  // -- 项目源
  readonly VITE_APP_SOURCE: string;
  // -- APP IDs
  readonly VITE_APP_APPID_WEIXIN: string;
  readonly VITE_APP_APPID_ALIPAY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

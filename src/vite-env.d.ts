/*
 * @Author: Lee
 * @Date: 2023-03-06 17:08:20
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 17:58:30
 * @Description:
 */
/// <reference types="vite/client" />

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

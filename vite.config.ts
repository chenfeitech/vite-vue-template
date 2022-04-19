/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:20:41
 * @LastEditTime: 2022-04-19 14:17:03
 * @LastEditors: Lee
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    // 部署二级目录基础路径
    base: env.VITE_APP_BASE || '/',
    // 构建相关
    build: {
      outDir: env.VITE_OUT_DIR,
    },
    // 路径解析
    resolve: {
      alias: {
        '@': resolve('./src'),
        comps: resolve('./src/components'),
        pages: resolve('./src/pages'),
        utils: resolve('./src/utils'),
      },
    },
    plugins: [
      vue(),
      // 浏览器兼容
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      // mock
      viteMockServe({}),
    ],
  });
};

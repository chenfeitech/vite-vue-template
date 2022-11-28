/*
 * @Author: Lee
 * @Date: 2022-11-25 15:33:31
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-28 10:13:08
 * @Description:
 */
import { fileURLToPath, URL } from "node:url";
import { viteMockServe } from "vite-plugin-mock";
import { defineConfig, loadEnv } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    // 部署二级目录基础路径
    base: env.VITE_APP_BASE || "/",
    // 构建相关
    build: {
      target: "es2015",
      sourcemap: false,
      outDir: env.VITE_OUT_DIR,
      // -- chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // -- 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
    // 路径解析
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        comps: fileURLToPath(new URL("./src/components", import.meta.url)),
        views: fileURLToPath(new URL("./src/views", import.meta.url)),
        utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    },
    server: {
      https: false,
      port: 3000,
      host: "0.0.0.0",
      open: true,
      cors: true,
      proxy: {},
    },
    plugins: [
      vue(),
      // -- mock
      viteMockServe({}),
      // -- 浏览器兼容
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      // -- 按需引入/自动引入
      AutoImport({
        resolvers: [
          TDesignResolver({
            library: "vue-next",
          }),
        ],
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: "vue-next",
          }),
        ],
      }),
    ],
  });
};

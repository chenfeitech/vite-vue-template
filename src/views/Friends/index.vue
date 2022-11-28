<!--
 * @Author: Lee
 * @Date: 2021-11-07 14:17:09
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-25 20:31:16
-->

<script setup lang="ts">
import Tools from "lg-tools";
import DragView from "comps/@lgs/DragView/DragView.vue";
import AppHeader from "comps/@lgs/AppHeader/AppHeader.vue";

const env = Tools.getEnv();

const onTap = () => {
  console.log("点击拖拽视图...");
};
</script>

<template>
  <div class="page">
    <app-header v-if="env !== 'weixin'" title="好友" :show-status-bar="false" />
    <div class="coming-soon">Demo Example</div>
    <div class="jump-button" @click="$router.push('/download')">前往下载</div>
    <drag-view @tap="onTap">
      <div class="box flex-h-center">Drag</div>
    </drag-view>
  </div>
</template>

<style lang="less" scoped>
.jump-button {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: cornflowerblue;
}

.box {
  width: 100px;
  height: 100px;
  background: #999999;
  border-radius: 8px;
  font-size: 18px;
  color: #ffffff;
}
</style>

<!--
 * @Author: Lee
 * @Date: 2021-11-02 09:56:40
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-25 20:30:56
-->

<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "comps/@lgs/AppHeader/AppHeader.vue";
import Tools from "lg-tools";

// state
const env = ref(Tools.getEnv());
</script>

<template>
  <div class="tab-page">
    <!-- 导航栏 -->
    <app-header v-if="env !== 'weixin'" title="特卖" :showStatusBar="false" />
    <!-- 按钮  -->
    <div class="pt-100 flex-h-center f12">
      <div class="button flex-h-center mr-20" @click="$router.push('/list-page')">LIST PAGE</div>
      <div class="button flex-h-center" @click="$router.push('/tab-page')">TAB PAGE</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.button {
  width: 100px;
  height: 30px;
  background: orangered;
  color: #fff;
  border-radius: 6px;
}
</style>

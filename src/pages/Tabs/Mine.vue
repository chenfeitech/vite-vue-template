<!--
 * @Author: Lee
 * @Date: 2023-03-06 18:09:41
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 19:44:44
 * @Description: 
-->

<script setup lang="ts">
// -- imports
import { ref } from 'vue';
import AppHeader from '@/components/@lgs/AppHeader/AppHeader.vue';
import Tools from 'lg-tools';
// -- constants
const env = ref(Tools.getEnv());
</script>

<template>
  <div class="page">
    <app-header v-if="env !== 'weixin'" title="我的" :show-status-bar="false" />
    <div class="coming-soon">Demo Example</div>
    <div
      class="auth-button"
      @click="$router.push(`/auth/jump?from=${encodeURIComponent('/mine')}`)"
    >
      微信授权
    </div>
  </div>
</template>

<style lang="less" scoped>
.auth-button {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: cornflowerblue;
}
</style>

<!--
 * @Author: Lee
 * @Date: 2023-03-06 18:19:04
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 19:06:21
 * @Description: 
-->

<script setup lang="ts">
import vTabBar, { TabBarItemProps } from 'comps/@lgs/TabBar/TabBar.vue';

// -- constants
const tabBars: Array<TabBarItemProps> = [
  {
    path: '/index-page',
    text: '赚赚',
    iconPath: new URL('./images/icon_1.png', import.meta.url).toString(),
    selectedIconPath: new URL(
      './images/icon_1_sel.png',
      import.meta.url
    ).toString(),
  },
  {
    path: '/special-sale',
    text: '特卖',
    iconPath: new URL('./images/icon_2.png', import.meta.url).toString(),
    selectedIconPath: new URL(
      './images/icon_2_sel.png',
      import.meta.url
    ).toString(),
  },
  {
    path: '/friends',
    text: '好友',
    iconPath: new URL('./images/icon_3.png', import.meta.url).toString(),
    selectedIconPath: new URL(
      './images/icon_3_sel.png',
      import.meta.url
    ).toString(),
  },
  {
    path: '/mine',
    text: '我的',
    iconPath: new URL('./images/icon_4.png', import.meta.url).toString(),
    selectedIconPath: new URL(
      './images/icon_4_sel.png',
      import.meta.url
    ).toString(),
  },
];

</script>
<template>
  <!-- 内容 Start -->
  <router-view v-slot="{ Component }">
    <!-- 缓存Tab页 -->
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- 内容 End -->

  <!-- 标签栏 Start -->
  <v-tab-bar :list="tabBars" />
  <!-- 标签栏 End -->
</template>

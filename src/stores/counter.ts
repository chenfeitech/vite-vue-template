/*
 * @Author: Lee
 * @Date: 2022-11-25 15:33:31
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-28 09:39:53
 * @Description:
 */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  return { count, doubleCount, increment };
});

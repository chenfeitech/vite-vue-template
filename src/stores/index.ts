/*
 * @Author: Lee
 * @Date: 2023-03-06 17:32:23
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 17:36:18
 * @Description:
 */

import { defineStore } from 'pinia';

interface StoreProps {
  count: number;
}

interface ActionProps {
  increment: () => void;
  decrement: () => void;
}

export const useStore = defineStore<string, StoreProps, any, ActionProps>(
  'appStore',
  {
    state: () => ({ count: 0 }),
    actions: {
      async increment() {},
      async decrement() {},
    },
  }
);

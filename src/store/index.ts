/*
 * @Author: Li-HONGYAO
 * @Date: 2021-05-21 23:39:56
 * @LastEditTime: 2022-01-11 14:54:46
 * @LastEditors: Lee
 * @Description:
 */
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as _useStore } from 'vuex';

// → 为 store state 声明类型
export interface IState {}
// → 定义 injection key
export const key: InjectionKey<Store<IState>> = Symbol();
// → 构造 store
export const store = createStore<IState>({
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {},
});
/**
 * → 简化 useStore
 *
 * 使用示例：
 *
 * import { useStore } from '@/store';
 * const store = useStore();
 * store.state.xxx
 * store.getters.xxx
 * store.commit();
 * store.dispatch();
 *
 */
export const useStore = () => {
  return _useStore(key);
};

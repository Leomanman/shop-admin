// src\store\index.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number,
  foo: string
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    count: 0,
    foo: '123'
  },
  getters: {},
  mutations: {
    setCount (state, count) {
      state.count = count
    }
  },
  actions: {},
  modules: {}
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}

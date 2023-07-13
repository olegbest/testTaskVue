import {createStore, Store, useStore as baseUseStore} from 'vuex'
import {InjectionKey} from "vue";
import stopsModule, {StopsState} from "./stops";

export interface RootState {
  stops: StopsState
}

const store = createStore<RootState>({
  state: {} as RootState,
  modules: {
    stops: stopsModule
  }
})

export const key: InjectionKey<Store<RootState>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}

export default store;

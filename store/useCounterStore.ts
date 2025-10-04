// store/useCounterStore.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 }), false, 'counter/increase'),
        decrease: () => set((state) => ({ count: state.count - 1 }), false, 'counter/decrease'),
        reset: () => set({ count: 0 }, false, 'counter/reset'),
      }),
      {
        name: 'counter-storage', // storage key
        storage: {
          getItem: async (key) => {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
          },
          setItem: async (key, value) => {
            await AsyncStorage.setItem(key, JSON.stringify(value));
          },
          removeItem: async (key) => {
            await AsyncStorage.removeItem(key);
          },
        },
      }
    )
  )
);

export default useCounterStore;

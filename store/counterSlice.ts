// store/counterSlice.ts
import { StateCreator } from 'zustand';
import { CounterSlice } from './types';

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
});

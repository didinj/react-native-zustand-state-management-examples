// store/useAppStore.ts
import { create } from 'zustand';
import { createCounterSlice } from './counterSlice';
import { createThemeSlice } from './themeSlice';
import { CounterSlice, ThemeSlice } from './types';

type AppState = CounterSlice & ThemeSlice;

const useAppStore = create<AppState>()((...a) => ({
    ...createCounterSlice(...a),
    ...createThemeSlice(...a),
}));

export default useAppStore;

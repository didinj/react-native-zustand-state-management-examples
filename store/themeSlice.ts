// store/themeSlice.ts
import { StateCreator } from 'zustand';
import { ThemeSlice } from './types';

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
    theme: 'light',
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
        })),
});

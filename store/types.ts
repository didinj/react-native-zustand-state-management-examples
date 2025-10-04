// store/types.ts
export type CounterSlice = {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
};

export type ThemeSlice = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

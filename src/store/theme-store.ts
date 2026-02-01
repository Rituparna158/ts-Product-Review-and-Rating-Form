import { create } from 'zustand';
import type { ThemeStoreType } from '../types/theme-store-type';

const useThemeStore = create<ThemeStoreType>(set => ({
  dark: false,
  toggle: () => set(s => ({ dark: !s.dark })),
}));
export default useThemeStore;

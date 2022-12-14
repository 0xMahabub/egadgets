import zus from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ISetting } from '../interfaces';

export const useSettingStore = zus(
  devtools(
    persist<ISetting>(
      (set) => ({
        listStyle: 'grid',
        darkMode: false,
        toggleListStyle: () =>
          set((prev) => ({
            ...prev,
            listStyle: prev.listStyle === 'grid' ? 'list' : 'grid',
          })),
        toggleDarkMode: () =>
          set((prev) => ({ ...prev, darkMode: !prev.darkMode })),
      }),
      { name: 'settings' },
    ),
    { enabled: false },
  ),
);

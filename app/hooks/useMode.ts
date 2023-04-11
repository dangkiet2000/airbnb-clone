import { create } from "zustand";

interface ModeStore {
  isDarkMode: boolean;
  onDark: () => void;
  onLight: () => void;
}

const useMode = create<ModeStore>((set) => ({
  isDarkMode: true,
  onDark: () => set({ isDarkMode: true }),
  onLight: () => set({ isDarkMode: false }),
}));

export default useMode;

import { create } from 'zustand';

interface NavState {
  activeMenuItem: string;
  setActiveMenuItem: (path: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activeMenuItem: '/',
  setActiveMenuItem: (path) => set({ activeMenuItem: path }),
})); 
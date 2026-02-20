import { create } from "zustand";

interface PortfolioState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  hoveredSkill: string | null;
  setHoveredSkill: (skill: string | null) => void;
  selectedProject: string | null;
  setSelectedProject: (id: string | null) => void;
}

export const useStore = create<PortfolioState>((set) => ({
  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),
  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
  hoveredSkill: null,
  setHoveredSkill: (skill) => set({ hoveredSkill: skill }),
  selectedProject: null,
  setSelectedProject: (id) => set({ selectedProject: id }),
}));

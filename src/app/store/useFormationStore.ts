import { create } from "zustand";
import type { formations } from "../lib/data/formations";

interface FormationState {
  formation: keyof typeof formations;
  updateFormation: (formation: keyof typeof formations) => void;
}

export const useFormationStore = create<FormationState>((set) => ({
  formation: "4-3-3",
  updateFormation: (formation) => set({ formation }),
}));

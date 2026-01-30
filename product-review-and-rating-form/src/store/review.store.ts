import { create } from 'zustand';
import { FormTypes } from '../types/form.types';

type ReviewStore = {
  records: (typeof FormTypes.data)[];
  editIndex: number | null;
  setEditIndex: (index: number | null) => void;
  addRecord: (data: typeof FormTypes.data) => void;
  updateRecord: (index: number, data: typeof FormTypes.data) => void;
  deleteRecord: (index: number) => void;
};
export const useReviewStore = create<ReviewStore>((set) => ({
  records: [],
  editIndex: null,
  setEditIndex: (index) => set({ editIndex: index }),
  addRecord: (data) =>
    set((state) => ({
      records: [...state.records, data],
    })),
  updateRecord: (index, data) =>
    set((state) => {
      const updated = [...state.records];
      updated[index] = data;
      return { records: updated };
    }),
  deleteRecord: (index) =>
    set((state) => ({
      records: state.records.filter((_, i) => i !== index),
    })),
}));

import { create } from 'zustand';
//import type { ReviewType } from '../types/review-type';
import storage from '../services/storage-service';
import type { ReviewStoreType } from '../types/review-store-type';

const useReviewStore = create<ReviewStoreType>((set, get) => ({
  records: storage.get(),
  editIndex: null,
  setEditIndex: i => set({ editIndex: i }),

  add: r => {
    const updated = [...get().records, r];
    storage.set(updated);
    set({ records: updated });
  },

  update: (i, r) => {
    const list = [...get().records];
    list[i] = r;
    storage.set(list);
    set({ records: list });
  },
  remove: i => {
    const updated = get().records.filter((_, idx) => idx !== i);
    storage.set(updated);
    set({ records: updated });
  },
}));
export default useReviewStore;

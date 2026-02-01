import type { ReviewType } from './review-type';

export type ReviewStoreType = {
  records: ReviewType[];
  editIndex: number | null;
  setEditIndex: (index: number | null) => void;
  add: (r: ReviewType) => void;
  update: (index: number, r: ReviewType) => void;
  remove: (index: number) => void;
};

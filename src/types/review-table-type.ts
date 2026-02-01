import type { ReviewType } from './review-type';

export type ReviewTablePropsType = {
  data: ReviewType[];
  onEdit: (i: number) => void;
  onDelete: (i: number) => void;
};

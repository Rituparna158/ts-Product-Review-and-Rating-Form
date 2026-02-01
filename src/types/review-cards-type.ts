import type { ReviewType } from './review-type';

export type ReviewCardsPropsType = {
  data: ReviewType[];
  onEdit: (i: number) => void;
  onDelete: (i: number) => void;
};

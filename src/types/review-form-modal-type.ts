import type { ReviewType } from './review-type';

export type ReviewFormModalPropsTypes = {
  open: boolean;
  isEdit: boolean;
  initialData: ReviewType;
  onClose: () => void;
  onSubmit: (data: ReviewType) => void;
};

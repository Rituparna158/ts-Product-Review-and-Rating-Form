import type { ReviewType } from '../types/review-type';

const storage = {
  set(records: ReviewType[]): void {
    localStorage.setItem('product_reviews', JSON.stringify(records));
  },
  get(): ReviewType[] {
    const data = localStorage.getItem('product_reviews');
    return data ? JSON.parse(data) : [];
  },
  remove() {
    localStorage.removeItem('product_reviews');
  },
};
export default storage;

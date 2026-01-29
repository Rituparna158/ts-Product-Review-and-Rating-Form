import { FormTypes } from '../types/form.types';

const storage = {
  set(records: (typeof FormTypes.data)[]) {
    localStorage.setItem('product_reviews', JSON.stringify(records));
  },
  get(): (typeof FormTypes.data)[] {
    const data = localStorage.getItem('product_reviews');
    return data ? JSON.parse(data) : [];
  },
  remove() {
    localStorage.removeItem('product_reviews');
  },
};
export default storage;

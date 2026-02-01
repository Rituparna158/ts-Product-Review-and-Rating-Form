import type { ReviewType } from '../types/review-type';
const defaultReview: ReviewType = {
  name: '',
  sku: '',
  date: '',
  ratings: {
    overall: 0,
    quality: 0,
    value: 0,
    delivery: 0,
    service: 0,
  },
  title: '',
  detail: '',

  reviewType: 'Verified Purchase',

  tags: [],

  recommend: 'MayBe',

  wouldBuyAgain: false,
  makeReviewPublic: false,
  agreeToTerms: false,
};
export default defaultReview;

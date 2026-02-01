import type { RatingType } from './rating-type';

export type ReviewType = {
  name: string;
  sku: string;
  date: string;

  ratings: RatingType;

  title: string;
  detail: string;

  reviewType: 'Verified Purchase' | 'General Review';

  tags: string[];

  recommend: 'Definitely Yes' | 'Yes' | 'MayBe' | 'No' | 'Definitely No';

  wouldBuyAgain: boolean;
  makeReviewPublic: boolean;
  agreeToTerms: boolean;
};

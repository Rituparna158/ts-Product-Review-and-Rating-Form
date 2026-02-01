import type { RatingType } from './rating-type';
import dayjs from 'dayjs';

export type ReviewFormValuesType = {
  date: dayjs.Dayjs;
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

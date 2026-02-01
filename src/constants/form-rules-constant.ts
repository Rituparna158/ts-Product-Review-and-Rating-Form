import type { Rule } from 'antd/es/form';

const namePattern = /^[a-zA-Z0-9 ]*$/;
const skuPattern = /^[a-zA-Z0-9]*$/;

type FormRulesType = {
  name: Rule[];
  sku: Rule[];
  purchaseDate: Rule[];

  overallRating: Rule[];
  qualityRating: Rule[];
  valueRating: Rule[];

  title: Rule[];
  detail: Rule[];

  recommend: Rule[];
  agreeToTerms: Rule[];
};
const formRules: FormRulesType = {
  name: [
    { required: true, message: 'Product name is required' }, //
    {
      pattern: namePattern,
      message: 'Product namr can contain only letters,numbers and space',
    },
  ] as Rule[],
  sku: [
    { required: true, message: 'Product sku is required' },
    {
      pattern: skuPattern,
      message: 'SKU can only contain letters and numbers',
    },
  ] as Rule[],
  purchaseDate: [{ required: true, message: 'Purchase date is required' }],
  overallRating: [{ required: true, message: 'Overall Rating is required' }],
  qualityRating: [{ required: true, message: 'Quality Rating is required' }],
  valueRating: [
    { required: true, message: 'Value for money Rating is required' },
  ],
  title: [
    { required: true, message: 'Review title is required' },
    { min: 10, max: 100, message: '10-100 characters' },
  ],
  detail: [
    { required: true, message: 'Detailed review is required' },
    { min: 30, max: 1000, message: '30-1000 characters' },
  ],
  recommend: [{ required: true, message: 'Please select Recommendation' }],
  agreeToTerms: [{ required: true, message: 'Must agree to Term' }],
};
export default formRules;

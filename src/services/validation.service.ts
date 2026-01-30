import type { FormTypes } from '../types/form.types';

const validationService = {
  required(value: string): string {
    return value.trim() === '' ? 'This field is required' : '';
  },
  length(value: string, min: number, max: number): string {
    return value.length < min || value.length > max
      ? `Must be between ${min} and ${max} characters`
      : '';
  },
  alphaNumericAllowSpace(value: string): string {
    const regex = /^[a-zA-Z0-9 ]*$/;
    if (value.trim() === '') return '';
    return regex.test(value)
      ? ''
      : 'Only letters,numbers and spaces are allowed';
  },
  alphaNumericNoSpace(value: string): string {
    const regex = /^[a-zA-Z0-9]*$/;
    if (value.trim() === '') return '';
    return regex.test(value) ? '' : 'Only letters and numbers are allowed';
  },
  rating(value: number): string {
    return value === 0 ? 'Rating is required' : '';
  },
  radio(value: string): string {
    return value === '' ? 'Please select an option' : '';
  },
  checkbox(checked: boolean): string {
    return checked ? '' : 'Please accept this field';
  },
  validatateForm(formData: typeof FormTypes.data) {
    return {
      name:
        this.required(formData.name) ||
        this.alphaNumericAllowSpace(formData.name),
      sku:
        this.required(formData.sku) || this.alphaNumericNoSpace(formData.sku),
      date: this.required(formData.date),
      overall: this.rating(formData.ratings.overall),
      quality: this.rating(formData.ratings.quality),
      value: this.rating(formData.ratings.value),
      title: this.length(formData.title, 10, 100),
      detail: this.length(formData.detail, 30, 1000),
      recommend: this.radio(formData.recommend),
      agreeToTerms: this.checkbox(formData.agreeToTerms),
    };
  },
};
export default validationService;

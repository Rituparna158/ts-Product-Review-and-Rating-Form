import { FormTypes } from '../../types/form.types';
interface Props {
  formData: typeof FormTypes.data;
  setFormData: (data: typeof FormTypes.data) => void;
  errors: Record<string, string>;
  clearError: (name: string) => void;
}
const recommendTypes = [
  'Definitely Yes',
  'Yes',
  'May Be',
  'No',
  'Definitely No',
];

const RecommendationSection = ({
  formData,
  setFormData,
  errors,
  //validateField,
  clearError,
}: Props) => {
  const handleRecommendChange = (value: string) => {
    setFormData({ ...formData, recommend: value });
    clearError('recommend');
  };
  return (
    <fieldset>
      <legend>Product Recommendation</legend>
      <div>
        Recommend this Product
        <span className="required">*</span>
      </div>
      <br />

      {recommendTypes.map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="recommend"
            value={type}
            checked={formData.recommend === type}
            onChange={() => handleRecommendChange(type)}
          />
          {type}
          <br />
        </label>
      ))}
      <div className="error">{errors.recommend}</div>
    </fieldset>
  );
};
export default RecommendationSection;

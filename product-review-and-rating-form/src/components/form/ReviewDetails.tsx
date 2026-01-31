import { FormTypes } from '../../types/form.types';
import validationService from '../../services/validation.service';
interface Props {
  formData: typeof FormTypes.data;
  setFormData: (data: typeof FormTypes.data) => void;
  errors: Record<string, string>;
  validateField: (name: string, error: string) => void;
  clearError: (name: string) => void;
}
const ReviewDetails = ({
  formData,
  setFormData,
  errors,
  validateField,
  clearError,
}: Props) => {
  const handleTitleChange = (value: string) => {
    setFormData({ ...formData, title: value });

    const error = validationService.length(value, 10, 100);
    if (error) validateField('title', error);
    else clearError('title');
  };
  const handleTitleBlur = () => {
    validateField('title', validationService.length(formData.title, 10, 100));
  };
  const handleDetailChange = (value: string) => {
    setFormData({ ...formData, detail: value });

    const error = validationService.length(value, 30, 1000);
    if (error) validateField('detail', error);
    else clearError('detail');
  };
  const handleDetailBlur = () => {
    validateField(
      'detail',
      validationService.length(formData.detail, 30, 1000)
    );
  };
  return (
    <fieldset>
      <legend>Review Details</legend>
      <label>
        Review Title
        <span className="required">*</span>
      </label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => handleTitleChange(e.target.value)}
        onBlur={handleTitleBlur}
        placeholder="Enter Review Title"
      />
      <div className="error">{errors.title}</div>
      <br />
      <label>
        Detailed Review
        <span className="required">*</span>
      </label>
      <textarea
        value={formData.detail}
        onChange={(e) => handleDetailChange(e.target.value)}
        onBlur={handleDetailBlur}
        placeholder="Add detailed Review"
      />
      <div className="error">{errors.detail}</div>
      <br />

      <div>Review Type:</div>
      {['Verified-Purchase', 'General-Review'].map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="reviewType"
            value={type}
            checked={formData.reviewType === type}
            onChange={() => setFormData({ ...formData, reviewType: type })}
          />
          {type}
          <br />
        </label>
      ))}
    </fieldset>
  );
};
export default ReviewDetails;

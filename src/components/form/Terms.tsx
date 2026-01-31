import { formTypes } from '../../types/form-types';
import validationService from '../../services/validation-service';
interface Props {
  formData: typeof formTypes.data;
  setFormData: (data: typeof formTypes.data) => void;
  errors: Record<string, string>;
  validateField: (name: string, error: string) => void;
  clearError: (name: string) => void;
}
const termsSection = ({
  formData,
  setFormData,
  errors,
  validateField,
  clearError,
}: Props) => {
  const handleAgreeChange = (checked: boolean) => {
    setFormData({ ...formData, agreeToTerms: checked });

    const error = validationService.checkbox(checked);
    if (error) validateField('agreeToTerms', error);
    else clearError('agreeToTerms');
  };
  return (
    <fieldset>
      <legend>Terms & Conditions</legend>
      <label>
        <input
          type="checkbox"
          checked={formData.wouldBuyAgain}
          onChange={(e) =>
            setFormData({
              ...formData,
              wouldBuyAgain: e.target.checked,
            })
          }
        />{' '}
        Would-Buy-Again
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={formData.makeReviewPublic}
          onChange={(e) =>
            setFormData({
              ...formData,
              makeReviewPublic: e.target.checked,
            })
          }
        />{' '}
        Make-Review-Public
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={(e) => handleAgreeChange(e.target.checked)}
        />{' '}
        Agree-to-Terms
        <span className="required">*</span>
      </label>
      <div className="error">{errors.agreeToTerms}</div>
    </fieldset>
  );
};
export default termsSection;

import { FormTypes } from '../../types/form.types';
import '../../styles/style.css';
import validationService from '../../services/validation.service';
//import useFormValidation from "../../hooks/useFormValidation";
interface Props {
  formData: typeof FormTypes.data;
  setFormData: (data: typeof FormTypes.data) => void;
  errors: Record<string, string>;
  validateField: (name: string, error: string) => void;
  clearError: (name: string) => void;
}
const ProductDetails = ({
  formData,
  setFormData,
  errors,
  validateField,
  clearError,
}: Props) => {
  const handleNameChange = (value: string) => {
    setFormData({ ...formData, name: value });

    const error = validationService.alphaNumericAllowSpace(value);
    if (error) validateField('name', error);
    else clearError('name');
  };
  const handleNameBlur = () => {
    const error =
      validationService.required(formData.name) ||
      validationService.alphaNumericAllowSpace(formData.name);

    validateField('name', error);
  };

  const handleSKUChange = (value: string) => {
    setFormData({ ...formData, sku: value });

    const error = validationService.alphaNumericNoSpace(value);
    if (error) validateField('sku', error);
    else clearError('sku');
  };
  const handleSKUBlur = () => {
    const error =
      validationService.required(formData.sku) ||
      validationService.alphaNumericNoSpace(formData.sku);

    validateField('sku', error);
  };
  const handleDateChange = (value: string) => {
    setFormData({ ...formData, date: value });
    clearError('date');
  };
  const handleDateBlur = () => {
    validateField('date', validationService.required(formData.date));
  };
  return (
    <fieldset className="product-details">
      <legend>Product Details</legend>
      <label>
        Product Name
        <span className="required">*</span>
      </label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => handleNameChange(e.target.value)}
        onBlur={handleNameBlur}
        placeholder="Enter Product Name"
      />
      <div className="error">{errors.name}</div>

      <label>
        Product SKU
        <span className="required">*</span>
      </label>
      <input
        type="text"
        value={formData.sku}
        onChange={(e) => handleSKUChange(e.target.value)}
        onBlur={handleSKUBlur}
        placeholder="Enter Product SKU"
      />
      <div className="error">{errors.sku}</div>

      <label>
        Purchase Date
        <span className="required">*</span>
      </label>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => handleDateChange(e.target.value)}
        onBlur={handleDateBlur}
      />
      <div className="error">{errors.date}</div>
    </fieldset>
  );
};
export default ProductDetails;

import { FormTypes } from '../../types/form.types';
import StarRating from './StarRating';
interface Props {
  formData: typeof FormTypes.data;
  setFormData: (data: typeof FormTypes.data) => void;
  errors: Record<string, string>;
  clearError: (name: string) => void;
  required?: boolean;
}
const Ratings = ({ formData, setFormData, errors, clearError }: Props) => {
  return (
    <fieldset>
      <legend>Product Ratings</legend>
      <div className="product-rating">
        <div className="product-rating-1">
          <div className="product-rating-1-1">
            <StarRating
              label="Overall Rating"
              ratingKey="overall"
              required
              formData={formData}
              setFormData={setFormData}
              clearError={clearError}
            />
            <div className="error">{errors.overall}</div>
          </div>
          <div className="product-rating-1-1">
            <StarRating
              label="Quality Rating"
              ratingKey="quality"
              required
              formData={formData}
              setFormData={setFormData}
              clearError={clearError}
            />
            <div className="error">{errors.quality}</div>
          </div>
          <div className="product-rating-1-1">
            <StarRating
              label="Value for Money Rating"
              ratingKey="value"
              required
              formData={formData}
              setFormData={setFormData}
              clearError={clearError}
            />
            <div className="error">{errors.value}</div>
          </div>
        </div>
        <div className="product-rating-2">
          <StarRating
            label="Delivery Rating"
            ratingKey="delivery"
            formData={formData}
            setFormData={setFormData}
            clearError={clearError}
          />
          <StarRating
            label="Customer Service Rating"
            ratingKey="service"
            formData={formData}
            setFormData={setFormData}
            clearError={clearError}
          />
        </div>
      </div>
    </fieldset>
  );
};
export default Ratings;

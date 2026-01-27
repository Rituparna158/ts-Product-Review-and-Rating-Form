import { FormTypes } from "../../types/form.types";
import StarRating from "./StarRating";
interface Props{
    formData: typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=> void;
    //errors:Record<string,string>;
}
const Ratings=({formData,setFormData}:Props)=>{
    return(
        <fieldset>
            <legend>Product Ratings</legend>
            <div className="product-rating">
                <div className="product-rating-1">
                    <StarRating 
                    label="Overall Rating"
                    ratingKey="overall"
                    formData={formData}
                    setFormData={setFormData}
                    />
                    <StarRating 
                    label="Quality Rating"
                    ratingKey="quality"
                    formData={formData}
                    setFormData={setFormData}
                    />
                    <StarRating 
                    label="Value for Money Rating"
                    ratingKey="value"
                    formData={formData}
                    setFormData={setFormData}
                    />
                </div>
                <div className="product-rating-2">
                    <StarRating 
                    label="Delivery Rating"
                    ratingKey="delivery"
                    formData={formData}
                    setFormData={setFormData}
                    />
                    <StarRating 
                    label="Customer Service Rating"
                    ratingKey="service"
                    formData={formData}
                    setFormData={setFormData}
                    />
                </div>
            </div>
        </fieldset>
    )
}
export default Ratings;

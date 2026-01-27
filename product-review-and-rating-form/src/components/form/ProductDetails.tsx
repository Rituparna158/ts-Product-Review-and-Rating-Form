import { FormTypes } from "../../types/form.types";
import "../../styles/style.css"
interface Props{
    formData: typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=> void;
    //errors:Record<string,string>;
}
const ProductDetails=({formData,setFormData}:Props)=>{
    return(
        <fieldset className="product-details">
            <legend>Product Details</legend>
            <label>Product Name</label>
            <input 
            type="text"
            value={formData.name}
            onChange={(e)=>
                setFormData({...formData,name: e.target.value})
            }
            />
        
            <label>Product SKU</label>
            <input 
            type="text"
            value={formData.sku}
            onChange={(e)=>
                setFormData({...formData,sku: e.target.value})
            }
            />
            
            <label>Purchase Date</label>
            <input 
            type="date"
            value={formData.date}
            onChange={(e)=>
                setFormData({...formData,date: e.target.value})
            }
            />
            
        </fieldset>
    );
};
export default ProductDetails
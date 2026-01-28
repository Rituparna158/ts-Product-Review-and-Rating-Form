import { FormTypes } from "../../types/form.types";
interface Props{
    formData: typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=>void;
}
const tags=[
    "Best Quality",
    "Great Value",
    "Good Packaging",
    "Fast Delivery",
    "Highly Recommended",
    "Poor Quality",
    "Not Worth Price",
    "Damaged on Arrival",
];

const TagSection=({formData,setFormData}:Props)=>{
    return(
        <fieldset>
            <legend>Product Tags</legend>
            {tags.map((tag)=>(
                <label key={tag}>
                    <input
                    type="checkbox"
                    checked={formData.tags.includes(tag)}
                    onChange={(e)=>{
                        const updated=e.target.checked
                        ?[...formData.tags,tag]
                        :formData.tags.filter((t)=>t!==tag);

                        setFormData({...formData,tags:updated})
                    }}
                    />
                    {tag}
                    <br/>
                </label>
            ))}
        </fieldset>
    )
}
export default TagSection;
import { FormTypes } from "../../types/form.types";
interface Props{
    formData: typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=> void;
    //errors:Record<string,string>;
}
const recommendTypes=[
    "Definitely Yes",
    "Yes",
    "May Be",
    "No",
    "Definitely No",
];

const RecommendationSection=({formData,setFormData}:Props)=>{
    return (
        <fieldset>
        <legend>Product Recommendation</legend>
        <div>Recommend this Product:</div>
        <br/>

        {recommendTypes.map((type)=>(
            <label key={type}>
                <input
                type="radio"
                name="recommend"
                value={type}
                checked={formData.recommend===type}
                onChange={()=>
                    setFormData({...formData,recommend:type})
                }
                />
                {type}<br />
            </label>
        ))}
    </fieldset>

    )  
}
export default RecommendationSection;
import { FormTypes } from "../../types/form.types";
interface Props{
    formData: typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=>void;
}
const ReviewDetails=({formData,setFormData}:Props)=>{
    return(
        <fieldset >
            <legend>Review Details</legend>
            <label>Review Title</label>
            <input 
            type="text"
            value={formData.title}
            onChange={(e)=>
                setFormData({...formData,title: e.target.value})
            }
            />
            <label>Detailed Review</label>
            <textarea
            value={formData.detail}
            onChange={(e)=>
                setFormData({...formData,detail: e.target.value})
            }
            />
            <br/>
            <br/>

            <div>Review Type:</div>
            {["Verified-Purchase","General-Review"].map((type)=>(
                <label key={type}>
                    <input
                    type="radio"
                    name="reviewType"
                    value={type}
                    checked={formData.reviewType===type}
                    onChange={()=>
                        setFormData({...formData,reviewType:type})
                    }
                    />
                    {type}
                    <br/>
                </label>
            ))}
        </fieldset>
    )
}
export default ReviewDetails;
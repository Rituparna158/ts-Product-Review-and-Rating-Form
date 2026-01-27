import { FormTypes } from "../../types/form.types";
interface Props{
    formData: typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=>void;
}
const  Terms=({formData,setFormData}:Props)=>{
    return(
        <fieldset>
            <legend>Terms & Conditions</legend>
            <label>
                <input
                type="checkbox"
                checked={formData.wouldBuyAgain}
                onChange={(e)=>
                    setFormData({
                        ...formData, wouldBuyAgain:e.target.checked,
                    })
                }
                 />{" "}Would-Buy-Again
            </label>
            <br/>
             <label>
                <input
                type="checkbox"
                checked={formData.makeReviewPublic}
                onChange={(e)=>
                    setFormData({
                        ...formData, makeReviewPublic:e.target.checked,
                    })
                }
                 />{" "}Make-Review-Public
            </label>
            <br/>
             <label>
                <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e)=>
                    setFormData({
                        ...formData, agreeToTerms:e.target.checked,
                    })
                }
                 />{" "}Agree-to-Terms
            </label>
            <div className="error"></div>

        </fieldset>

    )
}
export default Terms;
import { useState } from "react";
import { FormTypes } from "../../types/form.types";

type RatingKey="overall"|"quality"|"value"|"delivery"|"service";

interface  Props{
    label:string;
    ratingKey:RatingKey;
    formData:typeof FormTypes.data;
    setFormData:(data:typeof FormTypes.data)=>void;
}
const StarRating=({label,ratingKey,formData,setFormData}:Props)=>{
    const savedValue=formData.ratings[ratingKey];

    const [hoverValue,setHoverValue]=useState(0);
    const activeValue=hoverValue||savedValue;

    const handleClick=(value:number)=>{
        setFormData({
            ...formData,
            ratings:{
                ...formData.ratings,
                [ratingKey]:value,
            },
        });
    };
    return (
        <div className="product-rating-1-1">
            <label>{label}</label>
            <div className="star-rating">
            {[1,2,3,4,5].map((value)=>(
                <span
                key={value}
                className={`fa-star ${value <= activeValue ?"active":""}`}
                onMouseEnter={()=>setHoverValue(value)}
                onMouseLeave={()=>setHoverValue(0)}
                onClick={()=> handleClick(value)}
                >
                    {value <= activeValue? "★":"☆"}
                </span>
            ))}
        </div>
        <div className="error"></div>
        </div>
        
    )
}
export default StarRating;
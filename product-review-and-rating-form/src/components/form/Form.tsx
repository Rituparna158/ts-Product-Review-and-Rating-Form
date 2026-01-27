import { useState } from "react";
import type { FormEvent } from "react";
import { FormTypes } from "../../types/form.types";
import FormLayout from "./FormLayout";
import ProductDetails from "./ProductDetails";
import ReviewDetails from "./ReviewDetails";
import Recommend from "./Recommend";
import Tags from "./Tags";
import Terms from "./Terms";
import Ratings from "./Ratings"
import "../../styles/style.css"

const Form=()=>{
    const [formData,setFormData]=useState<typeof FormTypes.data>({
        name:"",
        sku:"",
        date:"",
        title:"",
        detail:"",
        reviewType:"Verified-Purchase",
        recommend:"",
        tags:[],
        wouldBuyAgain:false,
        makeReviewPublic:false,
        agreeToTerms:false,
        ratings:{
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0,
        },

    });
    //const [errors,setErrors]=useState<Record<string,string>>({});
    const handleSubmit=(e: FormEvent)=>{
        e.preventDefault();
        console.log("Submitted Data:",formData);
        alert("Form submitted successfully");
           
        /*const newErrors:Record<string,string>={};
        if(!formData.name) newErrors.name="Name is required";
        if(!formData.sku) newErrors.sku="SKU is required";
        if(!formData.date) newErrors.date="Purchase Date is required";

        setErrors(newErrors);

        if(Object.keys(newErrors).length===0){
            alert("Form submitted successfully");
            console.log(formData);*/
    };
    return(
        <FormLayout onSubmit={handleSubmit}>
            <ProductDetails formData={formData} setFormData={setFormData} />
            <Ratings formData={formData} setFormData={setFormData} />
            <ReviewDetails formData={formData} setFormData={setFormData} />
            <Recommend formData={formData} setFormData={setFormData} />
            <Tags formData={formData} setFormData={setFormData} />
            <Terms formData={formData} setFormData={setFormData} />
        </FormLayout>
    )
};
export default Form;
import appState from "../app.state.js";
import { renderApp } from "./App.js";
import { element } from "../utils/dom.js";
import storage from "../app.storage.js";
import starRating from "./StarRating.js";
import validation from "./Validation.js";

//import type { Ratings } from "../types.js"
const Form={
    render(){
    const form=element("form") as HTMLFormElement;
    const formState=appState.state.form;
    const errors:{[key:string]:string}={};
    function errorText(message:string):HTMLElement | null{
        if(message==="") return null;
        const div=element("div");
        div.className="error";
        div.textContent=message;
        return div;
    }

    const productDetailsDiv=element("div");
    const name=element("input") as HTMLInputElement;
    name.type='text'
    name.placeholder="Enter Product Name";
    name.value=formState.name;
    name.addEventListener("input",()=>{
        appState.setField("name",name.value);
        
    });

    const sku=element("input") as HTMLInputElement;
    sku.type='text'
    sku.placeholder="Enter Product SKU"
    sku.value=formState.sku;
    sku.addEventListener("input",()=>{
        appState.setField("sku",sku.value);
        
    })

    const date=element("input") as HTMLInputElement;
    date.type='date';
    const today=new Date().toISOString().split("T")[0];
    date.max=today;
    date.value=formState.date;
    date.addEventListener("change",()=>{
        appState.setField("date",date.value);
        
    })

    productDetailsDiv.appendChild(document.createTextNode("Product Name:"))
    productDetailsDiv.appendChild(name);
    const nameErr=errorText(errors.name);
    if(nameErr) productDetailsDiv.appendChild(nameErr);
    productDetailsDiv.appendChild(document.createTextNode("Product SKU:"))
    productDetailsDiv.appendChild(sku);
    productDetailsDiv.appendChild(document.createTextNode("Purchase Date:"))
    productDetailsDiv.appendChild(date);

    const ratingsDiv=element("div");
    ratingsDiv.appendChild(starRating.render("Overall","overall"));
    ratingsDiv.appendChild(starRating.render("Quality","quality"));
    ratingsDiv.appendChild(starRating.render("Value","value"));
    ratingsDiv.appendChild(starRating.render("Delivery","delivery"))
    ratingsDiv.appendChild(starRating.render("Service","service"));;

    const typeDiv=element("div");
    const title=element("input") as HTMLInputElement;
    title.type='text';
    title.placeholder="Enter Review Title";
    title.value=formState.title;
    title.addEventListener("input",()=>{
        appState.setField("title",title.value);
        
    })

    const detail=element("textarea") as HTMLTextAreaElement;
    detail.placeholder="Enter detailed review";
    detail.value=formState.detail;
    detail.addEventListener("input",()=>{
        appState.setField("detail",detail.value);
        
    })


    typeDiv.appendChild(document.createTextNode("Review-Title:"));
    typeDiv.appendChild(title); 
    typeDiv.appendChild(document.createTextNode("Detailed-Review:"));
    typeDiv.appendChild(detail);
    typeDiv.appendChild(document.createTextNode("Review Type:"));
    const reviewTypes=["Verified-Purchase","General-Review"];
    //const reiewTypeRadios:HTMLInputElement[]=[];
    reviewTypes.forEach(type=>{
        const radio=element("input") as HTMLInputElement;
        radio.type="radio";
        radio.name="reviewType";
        radio.value=type;
        radio.checked=formState.reviewType===type;

        radio.addEventListener("change",()=>{
            appState.setField("reviewType",type);
           
        });

        typeDiv.appendChild(radio);
        typeDiv.appendChild(document.createTextNode(" " + type + " "));
    });

    const tagsDiv=element("div");
    tagsDiv.appendChild(document.createTextNode("Product Tags:"));
    const tagOptions=["Best Quality", "Great Value", "Good Packaging","Fast Delivery",
        "Highly Recommended","Poor Quality","Not Worth Price","Damaged on Arrival"];
        //const tagInputs:HTMLInputElement[]=[];
        tagOptions.forEach(tag=>{
        const checkbox=element("input") as HTMLInputElement;
        checkbox.type="checkbox";
        checkbox.checked=appState.state.form.tags.includes(tag);

        checkbox.addEventListener("change",()=>{
            appState.toogleTag(tag,checkbox.checked);
            
        });

        tagsDiv.appendChild(checkbox);
        tagsDiv.appendChild(document.createTextNode(" " + tag + " "));
    })
    
    const recommendDiv=element("div");
    recommendDiv.appendChild(document.createTextNode("Recommend this Product:"))
    const recommendTypes=["Definitely Yes","Yes","Maybe","No","Definitely No"];
    //const recommendTypeRadios:HTMLInputElement[]=[];
    recommendTypes.forEach(type=>{
        const radio=element("input") as HTMLInputElement;
        radio.type="radio";
        radio.name="recommendproduct";
        radio.value=type;
        radio.checked=formState.recommend===type;

        radio.addEventListener("change",()=>{
            appState.setField("recommend",type)
            
        });

        recommendDiv.appendChild(radio);
        recommendDiv.appendChild(document.createTextNode(" " + type + " "));
    });

    const termsDiv=element("div");
    const wouldBuyAgain = element("input") as HTMLInputElement;
    wouldBuyAgain.type="checkbox"
    wouldBuyAgain.checked=appState.state.form.wouldBuyAgain;
    wouldBuyAgain.addEventListener("change",()=>{
        appState.setBooleanField("wouldBuyAgain",wouldBuyAgain.checked);
        
    });

    const makeReviewPublic = element("input") as HTMLInputElement;
    makeReviewPublic .type="checkbox"
    makeReviewPublic.checked=appState.state.form.makeReviewPublic;
    makeReviewPublic.addEventListener("change",()=>{
        appState.setBooleanField("makeReviewPublic",makeReviewPublic.checked);
        
    });

    const agreeToTerms = element("input") as HTMLInputElement;
    agreeToTerms.type="checkbox";
    agreeToTerms.checked=appState.state.form.agreeToTerms;
    agreeToTerms.addEventListener("change",()=>{
        appState.setBooleanField("agreeToTerms",agreeToTerms.checked);
        
    });
    termsDiv.appendChild(document.createTextNode("Terms:"))
    termsDiv.appendChild(wouldBuyAgain);
    termsDiv.appendChild(document.createTextNode("Would-Buy-Again"));
    termsDiv.appendChild(makeReviewPublic);
    termsDiv.appendChild(document.createTextNode("Make-Review-Public"));
    termsDiv.appendChild(agreeToTerms)
    termsDiv.appendChild(document.createTextNode("Agree-to-Terms"));

    const submit=element("button") as HTMLButtonElement;
    submit.type="submit";
    submit.textContent=appState.state.editIndex==-1?"Submit":"Update";

    form.appendChild(productDetailsDiv);
    form.appendChild(ratingsDiv);
    form.appendChild(typeDiv);
    form.appendChild(tagsDiv);
    form.appendChild(recommendDiv);
    form.appendChild(termsDiv);
    form.appendChild(submit)

    form.addEventListener("submit",e=>{
        e.preventDefault();
        const er=appState.state.form;

        errors.name=validation.required(er.name);
        errors.sku=validation.required(er.sku);
        errors.date=validation.required(er.date);

        errors.overall=validation.rating(er.ratings.overall);
        errors.quality=validation.rating(er.ratings.quality);
        errors.value=validation.rating(er.ratings.value);

        errors.title=validation.length(er.title,10,100);
        errors.detail=validation.length(er.detail,30,1000);

        errors.reviewType=validation.radio(er.reviewType);
        errors.recommend=validation.radio(er.recommend);
        errors.agreeToTerms=validation.checkbox(er.agreeToTerms);

        let hasError=false;
        for(const i in errors){
            if(errors[i]!==""){
                hasError=true;
                break;
            }
        }
        if(hasError){
           
            return;
        }
        appState.saveRecord();
        storage.save();
        appState.resetForm();
        renderApp();
    });
    return form;
}
}
export default Form;
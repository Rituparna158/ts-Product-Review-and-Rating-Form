import appState from "../../app.state";
import validation from "../Validation";
import storage from "../../app.storage";
import { renderApp } from "../App";
import Modal from "../Modal";

export function handleSubmit( e:Event):void{
    e.preventDefault();
    appState.clearAllErrors();
    const er=appState.state.form;
    const errors:Record<string,string>={};

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
        let hasError=false
         for(const i in errors){
            if(errors[i]) {
                appState.setErrors(i,errors[i]);
                hasError=true;
         }
         
        }
        
         if(hasError){
            renderApp();
            return;
         }
         const isEdit=appState.state.editIndex!==-1;
         appState.saveRecord();
         storage.save();
         Modal.show(
            isEdit?"Form updated successfully":"Form submitted successfully"
         );
         appState.resetForm();
         renderApp();
}

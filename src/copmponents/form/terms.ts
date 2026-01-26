import appState from "../../app.state";
import { element } from "../../utils/dom";

import validation from "../Validation";

export function termsSection():HTMLElement{
    const fieldset=element("fieldset");
//const formState=appState.state.form;
    //const errors=appState.state.errors;

    const legend=element("legend");
    legend.textContent="Terms and Condition";
    fieldset.appendChild(legend);

    //const termsDiv=element("div");
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

    const agreeError=element("div");
    agreeError.className="error";
    agreeError.textContent=appState.state.errors.agreeToTerms||"";

    const termscb = element("input") as HTMLInputElement;
    termscb.type="checkbox";
    termscb.checked=appState.state.form.agreeToTerms;

    termscb.addEventListener("change",()=>{
        appState.setBooleanField("agreeToTerms",termscb.checked);
        //agreeError.textContent=validation.checkbox(formState.agreeToTerms);
        agreeError.textContent=validation.checkbox(termscb.checked);
        
    });

    fieldset.appendChild(document.createTextNode("Terms:"))
    fieldset.appendChild(element("br"))
    fieldset.appendChild(wouldBuyAgain);
    fieldset.appendChild(document.createTextNode("Would-Buy-Again"));
    fieldset.appendChild(element("br"))
    fieldset.appendChild(makeReviewPublic);
    fieldset.appendChild(document.createTextNode("Make-Review-Public"));
    fieldset.appendChild(element("br"))
    fieldset.appendChild(termscb)
    fieldset.appendChild(document.createTextNode("Agree-to-Terms"));
    fieldset.appendChild(agreeError);
    

    return fieldset                             ;
}
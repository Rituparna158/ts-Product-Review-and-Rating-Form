//import appState from "../app.state.js";
//import { renderApp } from "./App.js";
import { element } from "../utils/dom.js";
//import storage from "../app.storage.js";
//import starRating from "./StarRating.js";
//import validation from "./Validation.js";
import { productDetails } from "./form/productDetails.js";
import { ratingsSection } from "./form/ratings.js";
import { recommendSection } from "./form/recommend.js";
import { termsSection } from "./form/terms.js";
import { tagsSection } from "./form/tags.js";
import { reviewDetails } from "./form/reviewDetails.js";
import { handleSubmit } from "./form/submit.js";
import appState from "../app.state.js";
//import Modal from "./Modal.js";

const Form={
    render():HTMLElement{
        const wrapper=element("div");
        wrapper.className="main-container";
    
        const heading=document.createElement("div");
        heading.className="heading";
        const title=document.createElement("div");
        title.className="mmain-heading";
        title.textContent="PRODUCT REVIEW & RATING";
        const sub=document.createElement("div");
        sub.className="sub-heading";
        sub.textContent="~Share Your eperience";
        heading.appendChild(title);
        heading.appendChild(sub);

        const formWrapper=element("div");
        formWrapper.className="form-wrapper";

        const form=element("form") as HTMLFormElement;
        //const formState=appState.state.form
        const errors=appState.state.errors;

        form.appendChild(productDetails());
        form.appendChild(ratingsSection());
        form.appendChild(reviewDetails(errors));
        form.append(tagsSection());
        form.append(recommendSection(errors));
        form.append(termsSection());

        const submit=element("input") as HTMLInputElement;
        submit.type="submit";
        submit.value=appState.state.editIndex===-1?"Submit":"Update";
        submit.className="submit-btn";
        //submit.textContent=appState.state.editIndex==-1?"Submit":"Update";
        form.appendChild(submit);

        form.addEventListener("submit",e=>{
            handleSubmit(e);
            
    });
    formWrapper.appendChild(form)
    wrapper.appendChild(heading)
    wrapper.appendChild(formWrapper);
    //Modal.show("Form submitted sucessfully");
    return wrapper;
    }
};
export default Form;
import { element } from "../utils/dom.js";
import { productDetails } from "./form/productDetails.js";
import { ratingsSection } from "./form/ratings.js";
import { recommendSection } from "./form/recommend.js";
import { termsSection } from "./form/terms.js";
import { tagsSection } from "./form/tags.js";
import { reviewDetails } from "./form/reviewDetails.js";
import { handleSubmit } from "./form/submit.js";
import appState from "../app.state.js";
//import Modal from "./Modal.js";

export class Form{
        private wrapper:HTMLElement;
        private form:HTMLElement;

        constructor(){
            this.wrapper=element("div");
            this.wrapper.className="main-container";

            this.form=element("form") as HTMLFormElement;
        }
        private renderHeading():HTMLElement{
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
            return heading;
        }
        
        private renderForm():HTMLElement{
              
        const formWrapper=element("div");
        formWrapper.className="form-wrapper";

        //const form=element("form") as HTMLFormElement;
        //const formState=appState.state.form
        const errors=appState.state.errors;

        this.form.appendChild(productDetails());
        this.form.appendChild(ratingsSection());
        this.form.appendChild(reviewDetails(errors));
        this.form.appendChild(tagsSection());
        this.form.appendChild(recommendSection(errors));
        this.form.appendChild(termsSection());

        const submit=element("input") as HTMLInputElement;
        submit.type="submit";
        submit.value=appState.state.editIndex===-1?"Submit":"Update";
        submit.className="submit-btn";
        //submit.textContent=appState.state.editIndex==-1?"Submit":"Update";
        this.form.appendChild(submit);

        this.form.addEventListener("submit",e=>{
            handleSubmit(e);
            
    });
    formWrapper.appendChild(this.form)
    return formWrapper;

    }
    
      
    render():HTMLElement{
        this.wrapper.innerHTML="";
        this.wrapper.appendChild(this.renderHeading());
        this.wrapper.appendChild(this.renderForm());

        return this.wrapper
    }
}



    
       
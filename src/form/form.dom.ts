import { element } from "../utils/dom";

const FormDOM={
    createMainContainer():HTMLElement{
        const div=element("fieldset")
        div.className="main-container";
        return div;
    },
    createFormWrapper():HTMLElement{
        const fieldset=element("fieldset");
        fieldset.className="form-wrapper";
        return fieldset;
    },
    createForm():HTMLFormElement{
        return element("form") as HTMLFormElement;
    },
    createFormHeading():HTMLElement{
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
    },
    createSubmitButton(text:string):HTMLInputElement{

         const submit=element("input") as HTMLInputElement;
        submit.type="submit";
        submit.value=text;
        submit.className="submit-btn";
        return submit;
    }

}
export default FormDOM;
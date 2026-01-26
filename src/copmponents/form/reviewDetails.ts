import appState from "../../app.state";
import { element } from "../../utils/dom";
import validation from "../Validation";
//import errorMessage from "./errorMessage";

export function reviewDetails(errors:Record<string,string>):HTMLElement{
    const fieldset=element("fieldset");

    const legend=element("legend");
    legend.textContent="Product Review";
    fieldset.appendChild(legend);

    const formState=appState.state.form;

    const titleLabel=element("label");
    titleLabel.textContent="Review Title"

    const titleError=element("div");
    titleError.className="error";
    titleError.textContent=errors.title||"";

    const title=element("input") as HTMLInputElement;
    title.type='text';
    title.placeholder="Enter Review Title";
    title.value=formState.title;
    title.addEventListener("input",()=>{
        appState.setField("title",title.value);
        const msg=validation.length(title.value,10,100);
        titleError.textContent=msg; 
    })
    title.addEventListener("blur",()=>{
        titleError.textContent=validation.length(title.value,10,100);
    })
   
    const detailLabel=element("label");
    detailLabel.textContent="Detailed Review"

    const detailError=element("div");
    detailError.className="error";
    detailError.textContent=errors.detail||"";

    const detail=element("textarea") as HTMLTextAreaElement;
    detail.placeholder="Enter detailed review";
    detail.value=formState.detail;
    detail.addEventListener("input",()=>{
        appState.setField("detail",detail.value);
        detailError.textContent=validation.length(detail.value,30,1000);
        
    })
    detail.addEventListener("blur",()=>{
        detailError.textContent=validation.length(detail.value,30,1000);
    })

    fieldset.appendChild(titleLabel);
    fieldset.appendChild(title); 
    fieldset.appendChild(titleError);
    fieldset.appendChild(element("br"));
    fieldset.appendChild(element("br"))

    fieldset.appendChild(detailLabel);
    fieldset.appendChild(detail);
    fieldset.appendChild(detailError);
    fieldset.appendChild(element("br"))
    fieldset.appendChild(element("br"))

    fieldset.appendChild(document.createTextNode("Review Type:"));
    fieldset.appendChild(element("br"))
    const reviewTypes=["Verified-Purchase","General-Review"];

    if(!formState.reviewType) appState.setField("reviewType","Verified-Purchase");

    reviewTypes.forEach(type=>{
        const radio=element("input") as HTMLInputElement;
        radio.type="radio";
        radio.name="reviewType";
        radio.value=type;
        radio.checked=formState.reviewType===type;

        radio.addEventListener("change",()=>{
            appState.setField("reviewType",type);
            
           
        });

        fieldset.appendChild(radio);
        fieldset.appendChild(document.createTextNode(" " + type + " "));
        fieldset.appendChild(element("br"))
    });
    
    fieldset.appendChild(element("br"))
    return fieldset;   
}
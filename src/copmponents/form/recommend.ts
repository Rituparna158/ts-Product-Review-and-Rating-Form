import appState  from "../../app.state";
import { element } from "../../utils/dom";

export function recommendSection(errors:Record<string,string>):HTMLElement{
    const fieldset = element("fieldset");

    const legend=element("legend");
    legend.textContent="Product Recommendation";
    fieldset.appendChild(legend);

    const formState=appState.state.form;

    fieldset.appendChild(document.createTextNode("Recommend this product:"));
    fieldset.appendChild(element("br"))

    const recommendTypes=["Definitely Yes","Yes","Maybe","No","Definitely No"];

    const errDiv=element("div");
    errDiv.className="error";
    errDiv.textContent=errors.recommend||"";

    recommendTypes.forEach(type=>{
        const radio=element("input") as HTMLInputElement;
        radio.type="radio";
        radio.name="recommendproduct";
        radio.value=type;
        radio.checked=formState.recommend===type;

        radio.addEventListener("change",()=>{
            appState.setField("recommend",type)
            errDiv.textContent="";
        
        });
        const label=element("label");
        label.textContent=" "+type;
        fieldset.appendChild(radio);
        fieldset.appendChild(label)
        

        fieldset.appendChild(element("br"))
    });
    fieldset.appendChild(errDiv);

    return fieldset;
}
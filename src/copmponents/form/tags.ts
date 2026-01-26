import appState from "../../app.state";
import { element } from "../../utils/dom";

export function tagsSection():HTMLElement{
    const fieldset =element("fieldset")
    const tags=[
        "Best Quality",
        "Great Value",
        "Good Packaging",
        "Fast Delivery",
        "Highly Recommended",
        "Poor Quality",
        "Not Worth Price",
        "Damaged on Arrival"

    ];
    const legend=element("legend");
    legend.textContent="Product Tags";
    fieldset.appendChild(legend);

    fieldset.appendChild(document.createTextNode("Product Tags:"))
    fieldset.appendChild(element("br"))
    tags.forEach(tag=>{
        const checkbox=element("input") as HTMLInputElement;
        checkbox.type="checkbox";
        checkbox.checked=appState.state.form.tags.includes(tag);
        checkbox.addEventListener("change",()=>{
            appState.toogleTag(tag,checkbox.checked);
        })
        fieldset.appendChild(element("br"));    
        const label=element("label");
        label.textContent=" "+tag;
        fieldset.appendChild(checkbox);
        fieldset.appendChild(label)
        

    })
    fieldset.appendChild(element("br"))
    return fieldset;
}
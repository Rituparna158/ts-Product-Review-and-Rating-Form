import appState  from "../../app.state";
import { element } from "../../utils/dom";
import validation from "../Validation";
export function productDetails():HTMLElement{
    const fieldset=element("fieldset");
    fieldset.className="product-details"
    const formState=appState.state.form;
    const errors=appState.state.errors;

    const legend=element("legend");
    legend.textContent="Product Details";
    fieldset.appendChild(legend);

    const nameError=element("div");
    nameError.className="error";
    nameError.textContent=errors.name||"";

    const nameLabel=element("label");
    nameLabel.textContent="Product Name";

    const name=element("input") as HTMLInputElement;
    name.type='text'
    name.placeholder="Enter Product Name";
    name.value=formState.name;
    name.addEventListener("input",()=>{
        appState.setField("name",name.value);
        const msg=validation.required(name.value);
        nameError.textContent=msg;
    });
    name.addEventListener("blur",()=>{
        nameError.textContent=validation.required(name.value);
    })

    const skuLabel=element("label");
    skuLabel.textContent="Product SKU";

    const skuError=element("div");
    skuError.className="error";
    skuError.textContent=errors.sku||"";

    const sku=element("input") as HTMLInputElement;
    sku.type='text'
    sku.placeholder="Enter Product SKU"
    sku.value=formState.sku;
    sku.addEventListener("input",()=>{
        appState.setField("sku",sku.value);
        const msg=validation.required(sku.value);
        skuError.textContent=msg;
        
    })
    sku.addEventListener("blur",()=>{
    skuError.textContent=validation.required(sku.value);
    })

    const dateLabel=element("label");
    dateLabel.textContent="Purchase Date";

    const dateError=element("div");
    dateError.className="error";
    dateError.textContent=errors.date||"";


    const date=element("input") as HTMLInputElement;
    date.type='date';
    const today=new Date().toISOString().split("T")[0];
    date.max=today;
    date.value=formState.date;
    date.addEventListener("change",()=>{
        appState.setField("date",date.value);
        dateError.textContent=validation.required(date.value);
    });
    date.addEventListener("blur",()=>{
        dateError.textContent=validation.required(date.value);
    })

    fieldset.appendChild(nameLabel);
    fieldset.appendChild(name)
    fieldset.appendChild(nameError);
    fieldset.appendChild(element("br"))
    fieldset.appendChild(element("br"))
    fieldset.appendChild(skuLabel);
    fieldset.appendChild(sku)
    fieldset.appendChild(skuError);
    fieldset.appendChild(element("br"))
    fieldset.appendChild(element("br"))
    fieldset.appendChild(document.createTextNode("Purchase Date:"));
    fieldset.appendChild(date)
    fieldset.appendChild(dateError); 
    return fieldset;
}

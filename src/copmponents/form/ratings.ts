//import appState from "../../app.state";
import { element } from "../../utils/dom";
import starRating from "../StarRating";
//import errorMessage from "./errorMessage";

export function ratingsSection():HTMLElement{
    const fieldset=element("fieldset");
    //const errors=appState.state.errors;

    const legend=element("legend");
    legend.textContent="Product Ratings";
    fieldset.appendChild(legend);

    const wrapper=element("div");
    wrapper.className="product-rating";

    const row1=element("div");
    row1.className="product-rating-1";

    const row3=element("div");
    row3.className="product-rating-1-1"

    row3.appendChild(starRating.render("Overall Rating","overall"));
    //const overallErr=errorMessage(errors.overall||"");
    //if(overallErr) row3.appendChild(overallErr);
    row3.appendChild(starRating.render("Quality Rating","quality"));
    //const qualityErr=errorMessage(errors.quality||"");
    //if(qualityErr) row3.appendChild(qualityErr);
    row3.appendChild(starRating.render("Value for Money Rating","value"));
    //const valuelErr=errorMessage(errors.value||"");
    //if(valuelErr) row3.appendChild(valuelErr);

    const row2=element("div");
    row2.className="product-rating-2";
    const row4=element("div");
    row4.className="product-rating-2-2";
    row4.appendChild(starRating.render("Delivery Rating","delivery"));
    //const deliveryErr=errorMessage(errors.overall);
    //if(deliveryErr) row2.appendChild(deliveryErr);
    row4.appendChild(starRating.render("Service Rating","service"));
    //const serviceErr=errorMessage(errors.overall);
    //if(serviceErr) row2.appendChild(serviceErr);
    row1.appendChild(row3);
    row2.appendChild(row4);
    wrapper.appendChild(row1);
    wrapper.appendChild(row2);
    fieldset.appendChild(wrapper);

    return fieldset;

}
import { element } from "../utils/dom.js";
import appState from "../app.state.js";
import { renderApp } from "./App.js";

type ratingKey="overall"|"quality"|"value"|"delivery"|"service";

const starRating={
    render(label:string,key:ratingKey){
        const stardiv=element("div");
        const text=element("span");
        text.textContent=label+": ";
        stardiv.appendChild(text);

        const form = appState.state.form;

        const active=form.hoverRatings[key]>0?form.hoverRatings[key]:form.ratings[key];
        for (let i=1;i<=5;i++){
            const star=element("span");
            star.textContent=i<= active? "★":"☆";
            star.addEventListener("mouseover",()=>{
                appState.setHoverRating(key,i);
            });
            star.addEventListener("mouseout",()=>{
                appState.clearHover(key);
            });
            star.addEventListener("click",()=>{
                appState.setRating(key,i);
                renderApp();
            })
            stardiv.appendChild(star);
        }
        return stardiv;

    }
};
export default starRating;
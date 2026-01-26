import { element } from "../utils/dom.js";
import appState from "../app.state.js";
//import { renderApp } from "./App.js";

type ratingKey="overall"|"quality"|"value"|"delivery"|"service";

const starRating={
    render(label:string,key:ratingKey){

        const wrapper=element("div");
        wrapper.className="product-rating-1-1";

        const text=element("label");
        text.textContent=label;
        wrapper.appendChild(text);


        const stardiv=element("div");
        stardiv.className="star-rating";
        wrapper.appendChild(stardiv);

        const errorDiv=element("div");
        errorDiv.className="error";
        errorDiv.textContent=appState.state.errors[key]||"";
        wrapper.appendChild(errorDiv);

  
        //const form = appState.state.form;
        const stars:HTMLSpanElement[]=[];

        function paint(active:number){
            stars.forEach((star,index)=>{
                star.textContent=index<active?"★":"☆";
                star.classList.toggle("active",index<active);
            })
        }
        paint(appState.state.form.ratings[key]);

        //const active=form.hoverRatings[key]>0?form.hoverRatings[key]:form.ratings[key];
        for (let i=1;i<=5;i++){
            const star=element("span") as HTMLSpanElement;
            star.className="fa-star"
            star.textContent="☆";

            //star.textContent=i<= active? "★":"☆";
            //star.classList.add("active");
            star.addEventListener("mouseover",()=>{
                paint(i);
            });
            star.addEventListener("mouseout",()=>{
                paint(appState.state.form.ratings[key]);
            });
            star.addEventListener("click",()=>{
                appState.setRating(key,i);
                appState.clearErrors(key);
                errorDiv.textContent="";
                paint(i);
            })
            stars.push(star);
            stardiv.appendChild(star);
        }
        paint(appState.state.form.ratings[key]);

        return wrapper;

    }
};
export default starRating;
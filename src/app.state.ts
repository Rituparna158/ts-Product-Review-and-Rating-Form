import Types from "./types.js";
type FormField=
| "name"
| "sku"
| "date"
| "reviewType"
| "title"
| "detail"
| "recommend";
type BooleanField=
| "wouldBuyAgain"
| "makeReviewPublic"
| "agreeToTerms";
type RatingField=
| "overall"
| "quality"
| "value"
| "delivery"
| "service"

const state={
    form:{
        ...Types.FormData
    }
};
const appState={
    state,
    setField(key:FormField,value:string){
        state.form[key]=value;
    },
    setBooleanField(key:BooleanField,value:boolean){
        state.form[key]=value;
    },
    setRating(key:RatingField,value:number){
        state.form.ratings[key]=value
    },
    toogleTag(tag:string,checked:boolean){
        if(checked){
            state.form.tags.push(tag);
        }else{
            state.form.tags=state.form.tags.filter(t=>t!==tag);
        }
    },
    setHoverRating(key:RatingField,value:number){
        state.form.hoverRatings[key]=value
    },
    clearHover(key:RatingField){
        state.form.hoverRatings[key]=0;
    },
    resetForm(){
        state.form={
            ...Types.FormData,
            tags:[]
        }
    }
};
export default appState;
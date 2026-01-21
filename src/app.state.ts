import type {Types} from "./types.js";
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

const emptyForm:Types["FormData"]={
        name:"",
        sku:"",
        date:"",
        reviewType:"",
        title:"",
        detail:"",
        tags:[],
        ratings:{
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0
        },
        recommend:"",
        wouldBuyAgain:false,
        makeReviewPublic:false,
        agreeToTerms:false,
        hoverRatings:{
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0
        },  


    }
const state={
    form:{...emptyForm},
    records:[] as Types["FormData"][],
    editIndex:-1
    
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
    saveRecord():void{
        const recordCopy:Types["FormData"]={
            ...state.form,
            tags:[...state.form.tags],
            ratings:{...state.form.ratings},
            hoverRatings:{...state.form.hoverRatings}
        };
        if(state.editIndex===-1){
            state.records.push(recordCopy);
        }else{
            state.records[state.editIndex]=recordCopy;
            state.editIndex=-1;
        }
    },
    editRecord(index:number):void{
        const rec=state.records[index];
        state.editIndex=index;

        state.form={
            ...rec,
            tags:[...rec.tags],
            ratings:{...rec.ratings},
            hoverRatings:{...rec.hoverRatings}
        }
    },
    deleteRecord(index:number):void{
        state.records.splice(index,1)
    },
    resetForm():void{
        state.form.name="";
        state.form.sku="";
        state.form.date="";
        state.form.reviewType="";
        state.form.title="";
        state.form.detail="";
        state.form.tags=[];
        state.form.ratings={
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0
        };
        state.form.recommend="";
        state.form.wouldBuyAgain=false;
        state.form.makeReviewPublic=false;
        state.form.agreeToTerms=false;
        state.form.hoverRatings={
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0
}
state.editIndex=-1;
    }
};
export default appState;
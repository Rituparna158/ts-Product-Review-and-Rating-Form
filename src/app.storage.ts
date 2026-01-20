import appState from "./app.state.js";
const storage={
    save(){
        const all=localStorage.getItem("review-form");
        let records=[];
        if(all){
            const parsed=JSON.parse(all);
            if(Array.isArray(parsed)){
                records=parsed;
            }
        }
        const copy=JSON.parse(JSON.stringify(appState.state.form));
        records.push(copy);
        localStorage.setItem("review-form",JSON.stringify(records));
    }
}

export default storage;
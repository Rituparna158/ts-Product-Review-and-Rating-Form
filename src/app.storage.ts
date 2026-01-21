import appState from "./app.state.js";
const storage={
    save():void{
        localStorage.setItem("review-form" , JSON.stringify(appState.state.records));
        
        },
        load():void{
            const stored=localStorage.getItem("review-form");
            if(stored){
                const parsed=JSON.parse(stored);

                if(Array.isArray(parsed)){
                    appState.state.records=parsed;
                }
            }
        }
    };

export default storage;
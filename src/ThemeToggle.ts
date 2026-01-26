import { element } from "./utils/dom";
import appState from "./app.state";
import { renderApp } from "./copmponents/App";
const ThemeTogggle={
    render(){
        const btn=element("button" ) as HTMLButtonElement;
        btn.textContent=appState.state.theme==="light"?"Dark Mode":"Light Mode";
        btn.addEventListener("click",()=>{
            const next=appState.state.theme==="light"?"dark":"light";
            appState.setTheme(next);
            renderApp()
        })
        return btn;
    }
};
export default ThemeTogggle;
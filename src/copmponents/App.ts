//import {getState} from "../app.state";
import { Form } from "./Form.js";
import { Table } from "./Table.js";
import appState from "../app.state.js";
import { element } from "../utils/dom.js";
import ThemeTogggle from "../ThemeToggle.js";


export function renderApp(){
    const root=document.getElementById("app");
    if(!root) return;
    document.body.className=appState.state.theme;

    root.innerHTML=""
    const layout: HTMLDivElement = document.createElement('div');
    layout.className = 'page-layout';

    const formWrapper=element("div");
    formWrapper.className="main-container";

    const toggleWrapper=element("div");
    toggleWrapper.appendChild(ThemeTogggle.render());

    const form=new Form();
    formWrapper.appendChild(toggleWrapper);
    formWrapper.appendChild(form.render());

    layout.appendChild(formWrapper);
    layout.append(Table())

    root.appendChild(layout);
}
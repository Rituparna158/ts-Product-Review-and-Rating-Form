//import {getState} from "../app.state";
import Form from "./Form.js";
import { Table } from "./Table.js";

export function renderApp(){
    const root=document.getElementById("app");
    if(!root) return;

    root.innerHTML=""
    const layout: HTMLDivElement = document.createElement('div');
    layout.className = 'app';

    layout.appendChild(Form.render());
    layout.append(Table())

    root.appendChild(layout);
}
import { element } from "../../utils/dom";

export default function errorMessage(message:string):HTMLElement|null{
    if(message==="") return null;

    const div=element("div");
    div.className="error";
    div.textContent=message;
    return div;
}
import { element } from "../utils/dom";
const Modal={
    show(message:string,onConfitm?:()=>void){
        const overlay=element("div");
        overlay.className="success-popup";
        
        
        const box=element("div");
        box.className="popup-box";

        const text=element("p");
        text.textContent=message;

        const btnWrap=element("div");
        btnWrap.className="btn-wrap";
        

        const btn=element("button");
        btn.textContent=onConfitm?"Yes":"Ok";

        btn.addEventListener("click",()=>{
            document.body.removeChild(overlay);
            if(onConfitm) onConfitm();

        });
        btnWrap.appendChild(btn);

        if(onConfitm){
            const cancelbtn=element("button");
            cancelbtn.textContent="No";
            cancelbtn.addEventListener("click",()=>{
                document.body.removeChild(overlay)
            });
            btnWrap.appendChild(cancelbtn);

        }        
        box.appendChild(text)
        box.appendChild(btnWrap);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }
};
export default Modal;
type Props={
    message:string;
    onClose:()=>void;
    onConfirm?:()=>void;
    showCancel?:boolean;
};
const Modal=({message,onClose,onConfirm,showCancel}:Props)=>{
    return(
        <div className="success-popup">
            <div className="popup-box">
                <p>{message}</p>
                <div className="modal-action">
                    {showCancel && (
                        <button onClick={onClose}>NO</button>
                    )}
                    <button
                    onClick={()=>{
                        if(onConfirm) onConfirm();
                        onClose();
                    }}
                    >
                        {showCancel?"Yes":"OK"}
                
                </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
interface Props{
    children:React.ReactNode;
    onSubmit:(e:React.FormEvent)=>void;
    isEdit:boolean;
}
const FormLayout=({children,onSubmit,isEdit}:Props)=>{
    return(
        <div className="main-container">
            <div className="heading">
                <div className="main-heading">PRODUCT REVIEW & RATING</div>
                <div className="sub-heading">~ Share Your Experience</div>
            </div>
            <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                {children}
                <input type="submit" className="submit-btn" value={ isEdit ? "Submit":"Update"} 
                />
            </form>
        </div>
    </div>

    )
}
export default FormLayout;
interface Props{
    children:React.ReactNode;
    onSubmit:(e:React.FormEvent)=>void;
}
const FormLayout=({children,onSubmit}:Props)=>{
    return(
        <div className="main-container">
            <div className="heading">
                <div className="main-heading">PRODUCT REVIEW & RATING</div>
                <div className="sub-heading">~ Share Your Experience</div>
            </div>
            <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                {children}
                <input type="submit" className="submit-btn" value="Submit" />
            </form>
        </div>
    </div>

    )
}
export default FormLayout;
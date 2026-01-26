const validation={
    required(value:string):string{
        return value.trim()===""?"This field is required":"";
    },
    length(value:string,min:number,max:number):string{
        return value.length<min|| value.length>max? `Must be between ${min} and ${max} characters`:"";  
    },
    rating(value:number):string{
        return value===0?"Rating is required":"";
    },
    radio(value:string):string{
        return value===""?"Please select an option":"";
    },
    checkbox(checked:boolean):string{
        return checked?"":"Please accept this field";
    }
};
export default validation;
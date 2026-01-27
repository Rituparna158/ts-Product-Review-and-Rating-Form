import { ReusableForm } from "./Form";
const fields = [
    { name: "name", label: "Product Name:", required: true },
    { name: "sku", label: "Product SKU:", required: true },
    { name: "date", label: "Purchase Date:" , type:"date", required: true},
    { name: "reviewTitle", label: "Review Title:", required:true},
    { name: "detailReview", label:"Detail Review:", required:true},
    { name: "reviewType", label: "Review Type:", type:"radio"},
    { name: "productTags",label:"Product Tags",type:"checkbox"},
    { name: "recommendProduct", label:"Recommend Product",type:"radio"},
    { name: "would",label:"Product Tags",type:"checkbox"},
    { name: "productTags",label:"Product Tags",type:"checkbox"},
    { name: "productTags",label:"Product Tags",type:"checkbox"},

  ];

  
  export default function FormPage() {
    const handleSubmit = (data: Record<string, string>) => {
      console.log("Form Submitted", data);
    };
  
    return <ReusableForm fields={fields} onSubmit={handleSubmit} />;
  }
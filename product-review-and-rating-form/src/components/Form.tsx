import { FormInput } from "./FormInput";
import { useState } from "react";
import type { ChangeEvent , FormEvent} from "react";
type FieldType = {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
  };
  
  export interface ReusableFormProps {
    fields: FieldType[];
    onSubmit: (formData: Record<string, string>) => void;
  }
  
  export const ReusableForm = ({ fields, onSubmit }: ReusableFormProps) => {
    const [formData, setFormData] = useState<Record<string,string>>(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
    const [errors, setErrors] = useState<Record<string, string>>({});
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: "" }));
    };
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      fields.forEach(field => {
        if (field.required && !formData[field.name].trim()) {
          newErrors[field.name] = `${field.label} is required.`;
        }
      });
      if (Object.keys(newErrors).length) {
        setErrors(newErrors);
        return;
      }
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {fields.map(field => (
          <FormInput
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>
    );
  };
import "../CSS/style.css"
import type { FormInputProps } from "../types/form.types";
export const FormInput = ({ label, name, type = "text", value, onChange, error }: FormInputProps) => (
    <div className="form-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full border p-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
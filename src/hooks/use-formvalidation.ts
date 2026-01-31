import { useState } from 'react';

const useFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  const clearError = (name: string) => {
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };
  return { errors, validateField, clearError };
};
export default useFormValidation;

//import { useState } from "react";
import { useState, type FormEvent } from 'react';
import { formTypes } from '../../types/form-types';
import FormLayout from './layout';
import ProductDetails from './prod';
import ReviewDetails from './detail';
import Recommend from './reco';
import Tags from './tags';
import Terms from './terms';
import Ratings from './rating'
import validationService from '../../services/validation-service';
import useFormValidation from '../../hooks/use-formvalidation';
import RenderModal from '../common/modal';
import '../../styles/form.style.css';
import '../../styles/table.style.css';

type Props = {
  formData: typeof formTypes.data;
  setFormData: (data: typeof formTypes.data) => void;
  records: (typeof formTypes.data)[];
  setRecords: (data: (typeof formTypes.data)[]) => void;
  editIndex: number | null;
  setEditIndex: (index: number | null) => void;
  initialFormData: typeof formTypes.data;
};

const form = ({
  formData,
  setFormData,
  records,
  setRecords,
  editIndex,
  setEditIndex,
  initialFormData,
}: Props) => {
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { errors, validateField, clearError } = useFormValidation();
  const scrollToFirstError = () => {
      setTimeout(() => {
        const errorElement = document.querySelector('.error:not(:empty)');
        if (errorElement) {
          errorElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 0);
    },
    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const submitErrors = validationService.validatateForm(formData);

    let hasError = false;

    if (submitErrors.name) {
      validateField('name', submitErrors.name);
      hasError = true;
    }
    if (submitErrors.sku) {
      validateField('sku', submitErrors.sku);
      hasError = true;
    }
    if (submitErrors.date) {
      validateField('date', submitErrors.date);
      hasError = true;
    }
    if (submitErrors.overall) {
      validateField('overall', submitErrors.overall);
      hasError = true;
    }
    if (submitErrors.quality) {
      validateField('quality', submitErrors.quality);
      hasError = true;
    }
    if (submitErrors.value) {
      validateField('value', submitErrors.value);
      hasError = true;
    }
    if (submitErrors.title) {
      validateField('title', submitErrors.title);
      hasError = true;
    }
    if (submitErrors.detail) {
      validateField('detail', submitErrors.detail);
      hasError = true;
    }
    if (submitErrors.recommend) {
      validateField('recommend', submitErrors.recommend);
      hasError = true;
    }
    if (submitErrors.agreeToTerms) {
      validateField('agreeToTerms', submitErrors.agreeToTerms);
      hasError = true;
    }
    if (hasError) {
      scrollToFirstError();
      return;
    }

    if (editIndex === null) {
      setRecords([...records, formData]);
      setModalMessage('Form submitted successfully');
    } else {
      const updated = [...records];
      updated[editIndex] = formData;
      setRecords(updated);
      setEditIndex(null);
      setModalMessage('Form updated successfully');
    }
    setShowModal(true);
    setFormData(initialFormData);
    scrollToTop();
  };

  return (
    <>
      <FormLayout onSubmit={handleSubmit} isEdit={editIndex == null}>
        <ProductDetails
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          validateField={validateField}
          clearError={clearError}
        />
        <Ratings
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          clearError={clearError}
        />
        <ReviewDetails
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          validateField={validateField}
          clearError={clearError}
        />
        <Tags formData={formData} setFormData={setFormData} />
        <Recommend
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          clearError={clearError}
        />
        <Terms
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          validateField={validateField}
          clearError={clearError}
        />
      </FormLayout>
      {showModal && (
        <RenderModal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};
export default form;

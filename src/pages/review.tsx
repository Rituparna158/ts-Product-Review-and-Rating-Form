import { useState } from 'react';
import {Modal} from "antd";

import useResponsive from '../hooks/use-responsive-hook';
import useReviewStore from '../store/review-store';

import ReviewTable from '../components/review/review-table';
import ReviewCards from '../components/review/review-cards';
import ReviewFormModal from '../components/review/review-form-modal';
import FloatingAddButton from '../components/common/floating-add-button';
import ThemeToggle from '../components/common/theme-toggle';

import modalMessage from '../constants/modal-message';
import type { ReviewType } from '../types/review-type';
import defaultReview from '../constants/default-review-constants';
import useTheme from '../hooks/use-theme';

const reviewPage=()=>{
  const {
    records,
    add,
    update,
    remove,
    editIndex,
    setEditIndex,
  }=useReviewStore();

  const {isMobile}=useResponsive();
  const [open,setOpen]=useState(false);
  const {theme}=useTheme();

  const handleAdd=()=>{
    setEditIndex(null);
    setOpen(true);
  }
  const handleEdit=(index:number)=>{
    setEditIndex(index);
    setOpen(true);
  }
  const handleDelete=(index:number)=>{
    Modal.confirm({
      ...modalMessage.deleteConfirm,
      onOk:()=>{
        remove(index);
        Modal.success(modalMessage.deleteSuccess);
      },
    });
  };
  const handleSubmit=(data:ReviewType)=>{
    if(editIndex===null){
      add(data);
      Modal.success(modalMessage.addSuccess);
    }else{
      update(editIndex,data);
      Modal.success(modalMessage.updateSuccess);
    }
    setOpen(false);
    setEditIndex(null);
  };

  const initialData:ReviewType=
  editIndex!==null && records[editIndex]
  ? records[editIndex]
  : defaultReview;

  return (
    <div style={{maxWidth:"900px",margin:"0 auto",padding:"16px",wordBreak:"break-word"}}>
    <ThemeToggle />
    <h1 style={{
      textAlign:"center",
      marginBottom:"24px",
      fontSize:"clamp(24px,4vw,36px)",
      fontWeight:700,
      letterSpacing:"0.5px",
      color:theme === "dark" ? "rgba(247, 243, 243, 1)":"#1f2937",
      opacity:1, 
      }}
      >
      PRODUCT REVIEW & RATING
    </h1>
    {isMobile?(
      <ReviewCards
      data={records}
      onEdit={handleEdit}
      onDelete={handleDelete}
      />
    ):(
      <ReviewTable
      data={records}
      onEdit={handleEdit}
      onDelete={handleDelete}
      />
    )}
    <ReviewFormModal
    open={open}
    onClose={()=>setOpen(false)}
    onSubmit={handleSubmit}
    isEdit={editIndex!==null}
    initialData={initialData}
    />
    <FloatingAddButton onClick={handleAdd}/>
    </div>
  );
};
export default reviewPage;
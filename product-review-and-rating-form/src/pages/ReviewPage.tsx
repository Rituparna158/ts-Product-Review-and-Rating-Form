import { useState } from 'react';
import { FormTypes } from '../types/form.types';
import { useReviewStore } from '../store/review.store';
//import Form from '../components/form/Form';
//import Table from '../components/table/Table';
//import Modal from '../components/common/Modal';
//import storage from '../services/storage.service';
import { FloatButton, Modal } from 'antd';
import ReviewForModal from '../components/form/ReviewForModal';
import { PlusOutlined } from '@ant-design/icons';
import ReviewTable from '../components/table/ReviewTable';
//import { Content } from 'antd/es/layout/layout';

const initialFormData: typeof FormTypes.data = {
  name: '',
  sku: '',
  date: '',
  title: '',
  detail: '',
  reviewType: 'Verified-Purchase',
  recommend: '',
  tags: [],
  wouldBuyAgain: false,
  makeReviewPublic: false,
  agreeToTerms: false,
  ratings: {
    overall: 0,
    quality: 0,
    value: 0,
    delivery: 0,
    service: 0,
  },
};
const ReviewPage = () => {
  const {
    records,
    addRecord,
    updateRecord,
    deleteRecord,
    editIndex,
    setEditIndex,
  } = useReviewStore();
  //const [formData, setFormData] = useState(initialFormData);
  //const [records, setRecords] = useState<(typeof FormTypes.data)[]>(
  //storage.get()
  const [open, setOpen] = useState(false);
  //const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  //const [modalMessage, setModalMessage] = useState('');
  //const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    setEditIndex(null);
    //setCurrentData(initialFormData);
    setOpen(true);
  };
  const handleEdit = (index: number) => {
    setEditIndex(index);
    //setCurrentData(records[index]);
    setOpen(true);
  };
  const handleDelete = (index: number) => {
    Modal.confirm({
      title: 'Delete Review?',
      content: 'Are you sure you want to delete this review?',
      onOk: () => deleteRecord(index),
    });
  };
  const handleSubmit = (data: typeof FormTypes.data) => {
    if (editIndex === null) {
      addRecord(data);
    } else {
      updateRecord(editIndex, data);
      setEditIndex(null);
    }
    setOpen(false);
  };
  return (
    <>
      <ReviewTable
        records={records}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ReviewForModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        initialData={editIndex !== null ? records[editIndex] : initialFormData}
        isEdit={editIndex !== null}
      />
      <FloatButton icon={<PlusOutlined />} type="primary" onClick={handleAdd} />
    </>
  );
};
export default ReviewPage;

import { useEffect, useState } from 'react';
import { formTypes } from '../types/form-types';
import Form from '../components/form/form';
import Table from '../components/table/table';
import RenderModal from '../components/common/modal';
import storage from '../services/storage-service';

const initialFormData: typeof formTypes.data = {
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
const reviewPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [records, setRecords] = useState<(typeof formTypes.data)[]>(
    storage.get()
  );
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    storage.set(records);
  }, [records]);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(records[index]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleDelete = (index: number) => {
    setRecords(records.filter((_,i)=>i!=index));
    setDeleteIndex(index);
  };
  const confirmDelete = () => {
    if (deleteIndex === null) return;

    const updated = records.filter((_, i) => i !== deleteIndex);
    setRecords(updated);
    setDeleteIndex(null);
    setModalMessage('Record deleted successfully');
    setShowModal(true);
  };
  return (
    <div className="page-layout">
      <Form
        formData={formData}
        setFormData={setFormData}
        records={records}
        setRecords={setRecords}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        initialFormData={initialFormData}
      />
      <Table records={records} onEdit={handleEdit} onDelete={handleDelete} />
      {deleteIndex !== null && (
        <RenderModal
          message="Are you sure you want to delete this record?"
          showCancel
          onClose={() => setDeleteIndex(null)}
          onConfirm={confirmDelete}
        />
      )}
      {showModal && (
        <RenderModal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
export default reviewPage;

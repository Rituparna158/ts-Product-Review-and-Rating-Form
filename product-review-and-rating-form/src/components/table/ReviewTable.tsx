import { Table, Space, Button, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
//import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
//import { useReviewStore } from '../../store/review.store';
import { FormTypes } from '../../types/form.types';

type ReviewRecord = typeof FormTypes.data;

type Props = {
  records: ReviewRecord[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};
const ReviewTable = ({ records, onEdit, onDelete }: Props) => {
  const columns: ColumnsType<ReviewRecord> = [
    { title: 'Product Name', dataIndex: 'name' },
    { title: 'Product SKU', dataIndex: 'sku' },
    { title: 'Purchase Date', dataIndex: 'date' },
    {
      title: 'Ratings',
      render: (_, r) => (
        <>
          <div>Overall:{'★'.repeat(r.ratings.overall)}</div>
          <div>Quality:{'★'.repeat(r.ratings.quality)}</div>
          <div>Value:{'★'.repeat(r.ratings.value)}</div>
          <div>Delivery:{'★'.repeat(r.ratings.delivery)}</div>
          <div>Service:{'★'.repeat(r.ratings.service)}</div>
        </>
      ),
    },
    { title: 'Review Title', dataIndex: 'title' },
    { title: 'Detailed Review', dataIndex: 'detail' },
    {
      title: 'Tags',
      render: (_, r) => r.tags.map((t) => <Tag key={t}>{t}</Tag>),
    },
    { title: 'Recommend', dataIndex: 'recommend' },
    {
      title: 'Flags',
      render: (_, r) => (
        <>
          <div>Would Buy Again:{r.wouldBuyAgain ? 'Yes' : 'No'}</div>
          <div>Make Review Public:{r.makeReviewPublic ? 'Yes' : 'No'}</div>
          <div>Agree To Terms:{r.agreeToTerms ? 'Yes' : 'No'}</div>
        </>
      ),
    },
    {
      title: 'Actins',
      render: (_, __, index) => (
        <Space>
          <Button onClick={() => onEdit(index)}>Edit</Button>
          <Button danger onClick={() => onDelete(index)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={records}
      rowKey={(_, index) => String(index)}
      scroll={{ x: true }}
      pagination={{ pageSize: 5 }}
    />
  );
};
export default ReviewTable;

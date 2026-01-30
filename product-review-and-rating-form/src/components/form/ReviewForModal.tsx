//For form modal
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Rate,
  Checkbox,
  Radio,
  Tabs,
  message,
  Button,
} from 'antd';
import { FormTypes } from '../../types/form.types';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
type FormValues = Omit<typeof FormTypes.data, 'date'> & {
  date?: dayjs.Dayjs;
};
type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: typeof FormTypes.data) => void;
  initialData: typeof FormTypes.data;
  isEdit: boolean;
};
const ReviewFormModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
  isEdit,
}: Props) => {
  const [form] = Form.useForm<FormValues>();
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        ...initialData,
        date: initialData.date ? dayjs(initialData.date) : undefined,
      });
    }
  }, [open, initialData, form]);

  const handleNextFormProduct = async () => {
    try {
      await form.validateFields(['name', 'sku', 'date']);
      setActiveTab('2');
    } catch {}
  };
  const handleNextFormRatings = async () => {
    try {
      await form.validateFields([
        ['ratings', 'overall'],
        ['ratings', 'quality'],
        ['ratings', 'value'],
      ]);
      setActiveTab('3');
    } catch {}
  };
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const payload: typeof FormTypes.data = {
        ...values,
        date: values.date ? values.date.format('YYYY-MM-DD') : '',
      };
      onSubmit(payload);
      message.success(
        isEdit ? 'Review updated successfully' : 'Review Submitted successfully'
      );
      form.resetFields();
      setActiveTab('1');
      onClose();
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'errorFields in err') {
        const errorFields = (
          err as { errorFields: { name: (string | number)[] }[] }
        ).errorFields;
        const errorField = errorFields?.[0]?.name;
        if (!errorField) return;
        if (['name', 'sku', 'date'].includes(errorField[0] as string)) {
          setActiveTab('1');
        } else if (errorField[0] === 'ratings') {
          setActiveTab('2');
        } else {
          setActiveTab('3');
        }
      }
    }
  };
  return (
    <Modal
      open={open}
      title={isEdit ? 'Edit Review' : 'Add Review'}
      onCancel={onClose}
      okText={isEdit ? 'Update' : 'Submit'}
      width={900}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        validateTrigger={['onChangr', 'onBlur']}
      >
        <Tabs
          activeKey={activeTab}
          items={[
            {
              key: '1',
              label: 'Product Details',
              children: (
                <>
                  <Form.Item
                    name="name"
                    label="Product Name"
                    validateTrigger={['onBlur', 'onChange']}
                    rules={[
                      { required: true },
                      {
                        pattern: /^[a-zA-Z0-9 ]+$/,
                        message: 'Only letters ,space and numbers are allowed',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="sku"
                    label="Product sku"
                    validateTrigger={['onBlur', 'onChange']}
                    rules={[
                      { required: true },
                      {
                        pattern: /^[a-zA-Z0-9]+$/,
                        message: 'Only letters and numbers are allowed',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="date"
                    label="Purchase Date"
                    validateTrigger={['onBlur', 'onChange']}
                    rules={[{ required: true }]}
                  >
                    <DatePicker style={{ width: '100%' }} inputReadOnly />
                  </Form.Item>
                  <Button type="primary" onClick={handleNextFormProduct}>
                    Next
                  </Button>
                </>
              ),
            },
            {
              key: '2',
              label: 'Ratings',
              children: (
                <>
                  <Form.Item
                    label="Overall Rating"
                    name={['ratings', 'overall']}
                    rules={[{ required: true }]}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                    <Rate />
                  </Form.Item>
                  <Form.Item
                    label="Quality Rating"
                    name={['ratings', 'quality']}
                    rules={[{ required: true }]}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                    <Rate />
                  </Form.Item>
                  <Form.Item
                    label="ValueForMoney Rating"
                    name={['ratings', 'value']}
                    rules={[{ required: true }]}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                    <Rate />
                  </Form.Item>
                  <Form.Item
                    label="Delivery Rating"
                    name={['ratings', 'delivery']}
                  >
                    <Rate />
                  </Form.Item>
                  <Form.Item
                    label="CustomerService Rating"
                    name={['ratings', 'service']}
                  >
                    <Rate />
                  </Form.Item>
                  <Button type="primary" onClick={handleNextFormRatings}>
                    Next
                  </Button>
                </>
              ),
            },
            {
              key: '3',
              label: 'Review',
              children: (
                <>
                  <Form.Item
                    name="title"
                    label="Review Title"
                    rules={[{ required: true, min: 10, max: 100 }]}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="detail"
                    label="Detailed Review"
                    rules={[{ required: true, min: 30, max: 1000 }]}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                    <Input.TextArea rows={4} />
                  </Form.Item>
                  <Form.Item name="reviewType" label="Review Type">
                    <Radio.Group>
                      <Radio value="Verified-Purchase">Verified Purchase</Radio>
                      <Radio value="General Review">General Review</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="recommend"
                    label="Recommend Product"
                    rules={[{ required: true }]}
                    validateTrigger={['onChange', 'onBlur']}
                  >
                    <Radio.Group>
                      <Radio value="Definitely Yes">Definitely Yes</Radio>
                      <Radio value="Yes">Yes</Radio>
                      <Radio value="MayBe">May Be</Radio>
                      <Radio value="No">No</Radio>
                      <Radio value="Definitely No">Definitely No</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="tags" label="Tags">
                    <Checkbox.Group
                      options={[
                        'Best Quality',
                        'Great Value',
                        'Fast Delivery',
                        'Highly Recommended',
                        'Poor quality',
                        'Not worth Price',
                        'Damaged on Arrival',
                      ]}
                    />
                  </Form.Item>
                  <Form.Item name="wouldBuyAgain" valuePropName="checked">
                    <Checkbox>Would Buy Again</Checkbox>
                  </Form.Item>
                  <Form.Item name="makeReviewPublic" valuePropName="checked">
                    <Checkbox>Make Review Public</Checkbox>
                  </Form.Item>
                  <Form.Item
                    name="agreeToTerms"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error('You must agree to terms')
                              ),
                      },
                    ]}
                  >
                    <Checkbox>I agree to terms</Checkbox>
                  </Form.Item>
                  <Button onClick={() => setActiveTab('2')}>Back</Button>
                  <Button
                    type="primary"
                    style={{ margin: 8 }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </>
              ),
            },
          ]}
        />
      </Form>
    </Modal>
  );
};
export default ReviewFormModal;

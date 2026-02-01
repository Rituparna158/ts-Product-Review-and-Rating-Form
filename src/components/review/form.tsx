import {
  Modal,
  Form,
  Input,
  DatePicker,
  Rate,
  Checkbox,
  Radio,
  Modal as AntModal,
} from 'antd';
import dayjs from 'dayjs';

import type { ReviewFormModalPropsTypes } from '../../types/review-form-modal-type';
import type { ReviewFormValuesType } from '../../types/review-form-value-type';
import formRules from '../../constants/form-rules-constant';
import TagSelector from './tag-selector';
import { useEffect } from 'react';
import useResponsive from '../../hooks/use-responsive-hook';
//import type {ValidateErrorEntity } from "antd/es/form"

const reviewFormModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
  isEdit,
}:ReviewFormModalPropsTypes)=>{
    const [form] = Form.useForm<ReviewFormValuesType>();
    const {isMobile}=useResponsive();

    useEffect(()=>{
        if(!open){
            form.resetFields();
            return;
        }
        if(isEdit){
            form.setFieldsValue({
                ...initialData,
                date:initialData.date
                ? dayjs(initialData.date)
                :undefined,
            })
        }else{
            form.setFieldsValue({
                reviewType:"Verified Purchase",
            });
        }
    }, [open,isEdit,initialData,form]);

    const handleSubmit=async()=>{
        try{

        const v = await form.validateFields();

        AntModal.confirm({
            title:isEdit? "Update review?":"Submit review?",
            okText:"Yes",
            cancelText:"No",
            onOk:()=>{
                onSubmit({
                    ...initialData,
                    ...v,
                    date: v.date.format("YYYY-MM-DD"),
                });
                form.resetFields();
                onClose();
            },
        });
    } catch(err){
        const error=err as {
            errorFields?:{name:(string|number)[]}[];
        };
        const firstError=error.errorFields?.[0];
        if(firstError){
            form.scrollToField(firstError.name,{
                behavior:"smooth",
                block:"center",
            });
        }
    }
}
    
    return (
        <Modal 
        open={open} 
        onOk={handleSubmit} 
        onCancel={onClose} 
        title={isEdit?"Edit Review":"Add Review"}
        width={isMobile? "100%":800}
        centered
        
        maskClosable={false}
        >
            <Form 
            form={form}
            layout='vertical'
            validateTrigger={["onChange","onBlur"]}
            scrollToFirstError={{behavior:"smooth",block:"center"}}
            >
                <Form.Item name="name" label="Product Name" rules={formRules.name}>
                    <Input />
                </Form.Item>

                <Form.Item name="sku" label="Product SKU" rules={formRules.sku}>
                    <Input />
                </Form.Item>

                <Form.Item name="date" label="Purchase Date" rules={formRules.purchaseDate}>
                    <DatePicker readOnly style={{width:"100%"}}/>
                </Form.Item>

                <Form.Item
                name={["ratings","overall"]}
                label="Overall Rating"
                rules={formRules.overallRating}
                >
                    <Rate/>
                </Form.Item>
                <Form.Item
                name={["ratings","quality"]}
                label="Quality Rating"
                rules={formRules.qualityRating}
                >
                    <Rate/>
                </Form.Item>
                <Form.Item
                name={["ratings","value"]}
                label="Value For Money"
                rules={formRules.valueRating}
                >
                    <Rate/>
                </Form.Item>
                 <Form.Item
                name={["ratings","delivery"]}
                label="Delivery Experience"
                >
                    <Rate/>
                </Form.Item>
                 <Form.Item
                name={["ratings","service"]}
                label="Customer Service"
                >
                    <Rate/>
                </Form.Item>

                <Form.Item name="title" label="Review Title" rules={formRules.title}>
                    <Input />
                </Form.Item>
                <Form.Item name="detail" label="Detailed Review" rules={formRules.detail}>
                    <Input.TextArea />
                </Form.Item>
                 <Form.Item name="reviewType" label="review Type">
                    <Radio.Group>
                        <Radio value="Verified Purchase">
                            Verified Purchase
                        </Radio>
                        <Radio value="General Review">
                            General Review
                        </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="tags" label="Product Tags">
                    <TagSelector />
                </Form.Item>

                <Form.Item name="recommend" label="Recommend This Product" rules={formRules.recommend}>
                    <Radio.Group>
                        <Radio value="Definitely Yes">
                            Definitely Yes
                        </Radio>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="Maybe">Maybe</Radio>
                        <Radio value="No">No</Radio>
                        <Radio value="Definitely No">Definitely No</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item 
                name="wouldBuyAgain" 
                valuePropName='checked'
                >
                    <Checkbox>Would Buy Again</Checkbox>
                </Form.Item>
                <Form.Item 
                name="makeReviewPublic" 
                valuePropName='checked' 
                >
                    <Checkbox>Make Review Public</Checkbox>
                </Form.Item>
                <Form.Item 
                name="agreeToTerms" 
                valuePropName='checked' 
                rules={[
                    {
                    validator:(_,value:boolean)=>
                        value
                    ?Promise.resolve()
                    :Promise.reject(
                        new Error("You must agree to terms")
                    ),
                }
            ]}
                >
                    <Checkbox>Agree To Terms</Checkbox>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default reviewFormModal;



//for adding data to the table
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { FloatingAddButtonPropsTypes } from '../../types/floating-add-button.props.type';

const floatingAddButton = ({ onClick }: FloatingAddButtonPropsTypes) => {
    return <FloatButton icon={<PlusOutlined />} type="primary" onClick={onClick} />

}

export default floatingAddButton;

import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type Props = {
  onClick: () => void;
};
const FloatingAddButton = ({ onClick }: Props) => (
  <FloatButton icon={<PlusOutlined />} type="primary" onClick={onClick} />
);
export default FloatingAddButton;

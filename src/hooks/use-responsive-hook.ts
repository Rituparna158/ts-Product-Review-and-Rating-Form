import { Grid } from 'antd';
const { useBreakpoint } = Grid;

const useResponsive = () => {
  const screens = useBreakpoint();
  return { isMobile: !screens.md };
};
export default useResponsive;

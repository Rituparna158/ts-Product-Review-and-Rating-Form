//import useTheme from './hooks/useTheme';
//import './App.css';
import { ConfigProvider, theme } from 'antd';
import ReviewPage from './pages/review-page';
import useThemeStore from './store/theme-store';

function renderApp() {
  const {dark} =useThemeStore();
  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  
      }}
    >
      <div 
      style={{
        minHeight:"100vh",
        backgroundColor: dark? "#0f172a":"#f5f5f5"
      }}
      >
        <ReviewPage />
      </div>
    
      
    </ConfigProvider>
  );
}

export default renderApp;

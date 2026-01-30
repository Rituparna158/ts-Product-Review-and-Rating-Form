//import useTheme from './hooks/useTheme';
//import './App.css';
import { useState } from 'react';
import { ConfigProvider, theme, Button } from 'antd';
import ReviewPage from './pages/ReviewPage';
const { darkAlgorithm, defaultAlgorithm } = theme;

function App() {
  const [dark, setDark] = useState(false);
  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Button onClick={() => setDark(!dark)} style={{ margin: 16 }}>
        Toggle Theme
      </Button>
      <ReviewPage />
    </ConfigProvider>
  );
}

export default App;

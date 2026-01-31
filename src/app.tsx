import useTheme from './hooks/use-theme';
import './App.css';
import ReviewPage from './pages/review';

function renderApp() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ReviewPage />
    </div>
  );
}

export default renderApp;

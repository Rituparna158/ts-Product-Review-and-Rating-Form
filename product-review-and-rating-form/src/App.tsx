import useTheme from './hooks/useTheme';
import './App.css'
import ReviewPage from './pages/ReviewPage';


function App() {
  const {theme,toggleTheme}=useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ReviewPage/>
    </div>  
  );
}

export default App;

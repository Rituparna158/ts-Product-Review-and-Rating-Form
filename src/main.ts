import '../style.css';
import { renderApp } from './copmponents/App.js';
import storage from './app.storage.js';


document.addEventListener('DOMContentLoaded', (): void => {
  storage.load();
  renderApp();         // Deterministic initial render
});

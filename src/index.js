import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SFStateProvider } from './contexts/SFProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SFStateProvider>
      <App />
    </SFStateProvider>
  </React.StrictMode>,

);

reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
const rootNotifiction = createRoot(document.getElementById('root-notifications'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
rootNotifiction.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
)

reportWebVitals();
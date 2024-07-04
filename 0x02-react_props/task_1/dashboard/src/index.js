import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
// import Notifications from './Notifications/Notifications';


const root = createRoot(document.getElementById('root'));
const rootNotification = createRoot(document.getElementById('root-notifications'));

root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
)

// rootNotification.render(
// <React.StrictMode>
//     <Notifications />
// </React.StrictMode>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';

import Notification from './Notifications';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root-notifications'));
root.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import WithLogging from './HOC/WithLogging';
const root = ReactDOM.createRoot(document.getElementById('root'));
const WithLogger = WithLogging(App);
root.render(
  <React.StrictMode>
    <WithLogger />
  </React.StrictMode>
);

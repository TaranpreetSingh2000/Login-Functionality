import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <GoogleOAuthProvider clientId="148256076061-p9ib94fkab6otpbmn6kgmgn4jqmitl6v.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

reportWebVitals();

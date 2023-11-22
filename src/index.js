import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
ReactDOM.render(
    <GoogleOAuthProvider clientId="632242333273-13ook0rvsj7n6c9nhdoijtu002scg2o0.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);
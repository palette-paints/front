import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));

const PORT = 3000; // 포트 번호
const serverURL = `https://beforyou.shop/:${PORT}`;
axios
    .get(serverURL)
    .then(() => {
        root.render(
            //<React.StrictMode>
            <App />
            //</React.StrictMode>
        );
    })
    .catch((err) => {
        console.error(`Failed to connect to server: ${err}`);
    });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

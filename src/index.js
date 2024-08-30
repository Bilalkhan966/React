import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './component/Card';
import reportWebVitals from './reportWebVitals';
import App from './Todo/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Card 
     img = "https://picsum.photos/200/200"
     name = "Bilal Khan"
     joined = "2024"
     disc = "Started react recently"
     offriend = "4"
    /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

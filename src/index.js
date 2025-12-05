import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import CareerlinkCarousel from './components/carousel';
import CareerlinkNavbar from './components/navbar';
import CareerlinkFormTable from './components/formtableinteraction';
import Hero from './components/hero';
import Sidebar from './components/sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CareerlinkNavbar />
    <Hero />
    <Sidebar />
    <div style={{width:"75vw", position:"absolute", left:"20vw", top:"102vh"}}>
        <CareerlinkCarousel />
        <CareerlinkFormTable />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/index.css';
import Router from './Router/Router';
import reportWebVitals from './reportWebVitals';
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
reportWebVitals();

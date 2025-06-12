import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// ** Toast
import { Toaster } from "react-hot-toast"
import reportWebVitals from './reportWebVitals';
import Spinner from "./components/Spinner";

import './assets/main.scss';

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner/>}>
    <LazyApp />
    <Toaster position={"top-right"} toastOptions={{ className: 'react-hot-toast' }} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

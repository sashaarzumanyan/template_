import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./utils/i18next";
import './index.css';
import App from './App';
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import { render } from "react-dom"


// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <Suspense fallback="...">
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./store";
import { restoreCSRF, fetch } from './store/csrf';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />  
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

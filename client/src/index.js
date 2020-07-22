import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import { FeedProvider, } from "./providers/FeedProvider";
import { ImageProvider } from './providers/ImageProvider'

import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';


initMiddleware()
ReactDOM.render(
  <React.StrictMode>
   <AuthProvider>
    <FeedProvider>
        <ImageProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ImageProvider>
    </FeedProvider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


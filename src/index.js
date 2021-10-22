import React from 'react';
import ReactDOM from 'react-dom';

// Importe o Provider, o Store e fazer o englobamento do <App /> com o Provider

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

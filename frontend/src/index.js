import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Axios from 'axios'

// import Team from './components/Team';

Axios.defaults.baseURL='http://localhost:4000'

ReactDOM.render(
  <React.StrictMode>
      <App />       
  </React.StrictMode>,
  document.getElementById('root')
);



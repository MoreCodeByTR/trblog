import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import ChangeLog from './Markdown'

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <App />
    <ChangeLog></ChangeLog>
  </React.StrictMode>,
  document.getElementById('root')
);



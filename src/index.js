// Написать стриминговый сервис (по типу Нетфликса), 
// - с личным кабинетом (реализован логин), 
// - с возможностью добавлять в избранное.
// - Фильтровать по разным критериям, 
// - ставить лайки. 
// - возможность добавлять кого-то в друзья и шарить с ним свои предпочтения. 
// Дедлайн 01 октября
// Используйте это API https://www.tvmaze.com/api

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

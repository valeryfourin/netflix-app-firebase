/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
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
import { Provider } from 'react-redux';

import { store } from './app/store';
import App from './App';
import reportWebVitals from './ReportWebVitals';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
reportWebVitals();

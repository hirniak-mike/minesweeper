import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Minesweeper } from './Pages';
import { store } from './Store';

import './Res/Styles/reset_style.scss';
import './Res/Styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Minesweeper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

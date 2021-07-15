import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import { MinesweeperPage } from './Pages';
import { rootStore } from './Store/_rootStore';

import './Res/Styles/reset_style.scss';
import './Res/Styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <MinesweeperPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

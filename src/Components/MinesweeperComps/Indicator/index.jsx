import React from 'react';
import { inject, observer } from 'mobx-react';

import s from './style.module.scss';

const MinesweeperIndicator = ({ minesweeperStore: { isGameOver, isWinner } }) => {
  return (
    <div className={s.indicator}>
      {isWinner ? '😃' : isGameOver ? '🤬' : '😬'}
    </div>
  );
};


export default inject('minesweeperStore')(observer(MinesweeperIndicator));

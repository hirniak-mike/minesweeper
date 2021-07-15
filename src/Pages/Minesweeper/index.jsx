import React from 'react';
import { inject } from 'mobx-react';

import s from './style.module.scss';

const Minesweeper = ({ minesweeperStore }) => {
  console.log('minesweeperStore: ', minesweeperStore);

  return (
    <div className={s.minesweeper}>

    </div>
  );
};

export default inject('minesweeperStore')(Minesweeper);

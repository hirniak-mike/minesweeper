import React from 'react';

import { MinesweeperIndicator, CountBombs } from '../../MinesweeperComps';
import { TimerForward } from '../../../Components';

import s from './style.module.scss';

const MinesweeperHeader = () => {
  return (
    <div className={s.minesweeper_header}>
      <CountBombs />
      <MinesweeperIndicator />
      <TimerForward />
    </div>
  );
};

export default MinesweeperHeader;

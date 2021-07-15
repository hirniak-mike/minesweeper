import React from 'react';

import { MinesweeperBlock } from '../../Components/MinesweeperComps';

import s from './style.module.scss';

const MinesweeperPage = () => {
  return (
    <main className={s.minesweeper}>
      <div className="main_container">
        <div className={s.minesweeper_wrapper}>
          <MinesweeperBlock />
        </div>
      </div>
    </main>
  );
};

export default MinesweeperPage;

import React from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from '../../../Components';
import { MinesweeperCell, MinesweeperHeader } from '../../MinesweeperComps';

import s from './style.module.scss';

const MinesweeperBlock = ({
  minesweeperStore: {
    arrOfCells, fieldWidth, clickToCell, rightClickToCell, isGameOver, isWinner, newGame
  }
}) => {

  return (
    <div className={s.minesweeper_block}>
      <div className={s.minesweeper_control}>
        <Button type='button'
          label='New Game'
          onClick={newGame}
        />
      </div>
      <MinesweeperHeader />
      <div className={s.minesweeper_field}
        style={{ width: `${43 * fieldWidth + 8}px` }}
      >
        {arrOfCells.map(({ isBomb, numOfBombsAround, isFlag, isClose, id }) => (
          <MinesweeperCell key={id} id={id}
            isBomb={isBomb}
            numOfBombsAround={numOfBombsAround}
            isFlag={isFlag}
            isClose={isClose}
            isGameOver={isGameOver}
            isWinner={isWinner}
            onClick={clickToCell}
            onRightClick={rightClickToCell}
          />
        ))}
      </div>
    </div>
  );
};

export default inject('minesweeperStore')(observer(MinesweeperBlock));

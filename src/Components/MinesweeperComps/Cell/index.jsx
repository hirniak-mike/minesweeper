import React from 'react';
import classnames from 'classnames';

import s from './style.module.scss';

const MinesweeperCell = ({
  isClose, isBomb, numOfBombsAround, isFlag, id, onClick, onRightClick, isGameOver, isWinner
}) => {

  const handleClickToCell = () => {
    onClick(id)
  };

  const handleRightClickToCell = (event) => {
    event.preventDefault();
    onRightClick(id);
  }

  return (
    <div
      className={classnames(s.cell, {
        [s.cell_open]: !isClose || isFlag,
        [s.cell_gameOver]: isGameOver,
        [s.cell_winner]: isWinner,
      })}
      onClick={handleClickToCell}
      onContextMenu={handleRightClickToCell}
    >
      {isFlag ? '/' : isClose ? '' : isBomb ? '*' : `${numOfBombsAround}`}
    </div>
  );
};

export default MinesweeperCell;

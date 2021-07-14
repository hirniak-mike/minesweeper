import React from 'react';
import { useSelector } from 'react-redux';

import s from './style.module.scss';

const Minesweeper = () => {
  const { arrOfCells } = useSelector(({ minesweeperSlice }) => {
    return {
      arrOfCells: minesweeperSlice.arrOfCells,
    };
  });
  console.log(arrOfCells);

  return (
    <div className={s.minesweeper}>

    </div>
  );
};

export default Minesweeper;

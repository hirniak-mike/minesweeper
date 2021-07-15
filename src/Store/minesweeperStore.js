import { makeAutoObservable } from 'mobx';

import { createInitialCells, openAllCell } from '../Utils/minesweeperHelper';

export class MinesweeperStore {
  constructor() {
    makeAutoObservable(this);
  };

  numOfCells = 36;
  numOfBomb = 10;
  fieldWidth = 6;
  isGameOver = false;

  arrOfCells = [...createInitialCells(this.numOfCells, this.numOfBomb, this.fieldWidth)];

  get isWinner() {
    return this.arrOfCells.every((item) => item.isFlag === item.isBomb);
  }

  get countBombs() {
    return this.numOfBomb - this.arrOfCells.reduce((acc, cur) => {
      if (cur.isFlag) {
        acc++
      };
      return acc;
    }, 0);
  }

  clickToCell = (id) => {
    const clickCell = this.arrOfCells.find((item) => item.id === id);
    if (clickCell.isFlag) return;
    clickCell.isClose = false;
    if (clickCell.isBomb) {
      this.isGameOver = true;
      this.arrOfCells = [...openAllCell(this.arrOfCells)];
    }
  };

  rightClickToCell = (id) => {
    const clickCell = this.arrOfCells.find((item) => item.id === id);
    if (clickCell.isClose) {
      clickCell.isFlag = !clickCell.isFlag;
    }
  };

  newGame = () => {
    this.isGameOver = false;
    this.arrOfCells = [...createInitialCells(this.numOfCells, this.numOfBomb, this.fieldWidth)];
  };

};

export const minesweeperStore = new MinesweeperStore();
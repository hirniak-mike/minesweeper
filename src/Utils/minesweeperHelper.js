import { v4 as uuidv4 } from 'uuid';

import { randomizeIntInclusive } from './randomize';

const getNumOfBombsAround = (arr, indexOfArr, fieldWidth) => {
  const indexAround = [
    indexOfArr - 1, indexOfArr + 1, indexOfArr + fieldWidth, indexOfArr + fieldWidth + 1, indexOfArr + fieldWidth - 1,
    indexOfArr - fieldWidth, indexOfArr - fieldWidth + 1, indexOfArr - fieldWidth - 1,
  ];
  let counter = 0;
  for (let index of indexAround) {
    if (!(indexOfArr % fieldWidth)) {
      if ((index + 1) % fieldWidth) {
        if (arr[index]?.isBomb) {
          counter++
        };
      };
    } else if (!((indexOfArr + 1) % fieldWidth)) {
      if (index % fieldWidth) {
        if (arr[index]?.isBomb) {
          counter++
        };
      };
    } else if (arr[index]?.isBomb) {
      counter++
    };
  };
  return counter;
};

export const createInitialCells = (length, numOfBombs, fieldWidth) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      isBomb: false,
      numOfBombsAround: 0,
      isClose: true,
      isFlag: false,
      id: uuidv4(),
    });
  };
  for (let i = 0; i < numOfBombs;) {
    const randomIndex = randomizeIntInclusive(0, --length);
    if (!result[randomIndex].isBomb) {
      result[randomIndex].isBomb = true;
      i++;
    };
  };
  for (let i = 0; i < result.length; i++) {
    result[i].numOfBombsAround = getNumOfBombsAround(result, i, fieldWidth);
  }
  return result;
};

export const openAllCell = (arr) => {
  return arr.map((cell) => ({
    ...cell,
    isClose: false,
    isFlag: false,
  }));

}
import { createSlice } from '@reduxjs/toolkit';

import { createInitialCells } from '../Utils/minesweeperHelper';

const initialSetting = {
  numOfCells: 36,
  numOfBomb: 10,
  fieldWidth: 6,
};

const minesweeperSlice = createSlice({
  name: 'minesweeperSlice',
  initialState: {
    numOfCells: initialSetting.numOfCells,
    numOfBomb: initialSetting.numOfBomb,
    fieldWidth: initialSetting.fieldWidth,
    arrOfCells: [...createInitialCells(initialSetting.numOfCells, initialSetting.numOfBomb, initialSetting.fieldWidth)],
  },
  reducers: {
  }
});

export default minesweeperSlice.reducer;
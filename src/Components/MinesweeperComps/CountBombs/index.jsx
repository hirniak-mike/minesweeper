import React from 'react';
import { inject, observer } from 'mobx-react';

import s from './style.module.scss';

const CountBombs = ({ minesweeperStore: { countBombs } }) => {
  return (
    <span className={s.numOfFlags}>
      {countBombs}
    </span>
  )
}

export default inject('minesweeperStore')(observer(CountBombs));

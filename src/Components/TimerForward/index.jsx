import React from 'react';
import Timer from "react-compound-timer";

import s from './style.module.scss';

const TimerForward = () => {
  return (
    <Timer>
      <div className={s.timer}>
        <Timer.Minutes /> min &nbsp;
        <Timer.Seconds /> sec &nbsp;
      </div>
    </Timer>
  );
};

export default TimerForward;

import React from 'react';

import s from './style.module.scss';

const Button = ({ label, type, onClick }) => {
  return (
    <button
      className={s.button}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

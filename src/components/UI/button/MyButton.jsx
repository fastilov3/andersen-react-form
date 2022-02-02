import React from 'react';
import s from './MyButton.module.css'

const MyButton = (props) => {
  return <button {...props} className={s.button}>{props.content}</button>;
};

export default MyButton;

import React from 'react'
import s from './MyInput.module.css'

const MyInput = (props) => {
  const { htmlFor, type, name, value, onChange, placeholder, content } = props
  return (
    <label htmlFor={htmlFor} className={s.item}>
      {content}:
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}

export default MyInput

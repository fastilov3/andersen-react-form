import React from 'react'
import s from './MyTextArea.module.css'

const MyTextArea = (props) => {
  const { htmlFor, name, value, onChange, content } = props
  return (
    <label htmlFor={htmlFor} className={s.item}>
      {content}:
      <textarea
        className={s.textarea}
        name={name}
        value={value}
        onChange={onChange}
      />
      {value.trim().length < 601 ? (
        <span className={s.span}>{value.trim().length}/600</span>
      ) : (
        <span className={s.error}>Превышен лимит символов в поле</span>
      )}
    </label>
  )
}

export default MyTextArea

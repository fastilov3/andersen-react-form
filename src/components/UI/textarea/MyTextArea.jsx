import { Component } from "react";
import s from './MyTextArea.module.css'

export default class MyTextArea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label className={s.item} htmlFor={this.props.htmlFor}>
          {this.props.content}:
          <textarea
            className={s.textarea}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          {this.props.value.trim().length < 601 ? <span className={s.span}>{this.props.value.trim().length}/600</span> : <span className={s.error}>Превышен лимит символов в поле</span>}
        </label>
    )
  }
}
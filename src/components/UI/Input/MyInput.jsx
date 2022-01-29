import { Component } from 'react'
import s from './MyInput.module.css'

export default class MyInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label className={s.item} htmlFor={this.props.htmlFor}>
        {this.props.content}:
        <input
          className={s.input}
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </label>
    )
  }
}

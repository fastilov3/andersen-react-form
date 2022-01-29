import { Component } from "react";
import s from './MyButton.module.css'

export default class MyButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button {...this.props} className={s.button}>{this.props.content}</button>
    )
  }
}
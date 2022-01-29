import { Component } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/Input/MyInput'
import MyTextArea from '../UI/textarea/MyTextArea'
import s from './PostForm.module.css'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      secondName: '',
      birthDate: '',
      phoneNumber: '',
      site: '',
      aboutMe: '',
      technologies: '',
      projects: '',
      errors: {},
      isPhoneNumberCorrect: true,
      isSiteCorrect: true,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      errors: {},
      isPhoneNumberCorrect: true,
      isSiteCorrect: true,
    })
    this.checkEmptyInputs()
    this.checkPhoneNumber()
    this.checkSite()
  }

  checkEmptyInput = (_name) => {
    if (this.state[_name]?.trim() === '') {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [_name]: true,
        },
      }))
    }
  }
  checkEmptyInputs() { 
    this.checkEmptyInput('firstName')
    this.checkEmptyInput('secondName')
    this.checkEmptyInput('birthDate')
    this.checkEmptyInput('phoneNumber')
    this.checkEmptyInput('site')
    this.checkEmptyInput('aboutMe')
    this.checkEmptyInput('technologies')
    this.checkEmptyInput('projects')
  }
  checkPhoneNumber() {
    if (
      this.state.phoneNumber?.length > 0 &&
      this.state.phoneNumber?.length !== 12
    ) {
      this.setState({ isPhoneNumberCorrect: false })
      return
    }

    const delim = '-'
    const numbersArray = this.state.phoneNumber.split('')

    if (
      this.state.phoneNumber &&
      numbersArray[1] !== delim &&
      numbersArray[6] !== delim &&
      numbersArray[9] !== delim
    ) {
      this.setState({ isPhoneNumberCorrect: false })
    }
  }
  checkSite() {
    if (this.state.site?.length > 0 && this.state.site?.length < 12) {
      this.setState({ isSiteCorrect: false })
      return
    }
    const substr = this.state.site.substring(0, 8)
    if (this.state.site && substr !== 'https://') {
      this.setState({ isSiteCorrect: false })
    }
  }
  onClickCancelHandler = () => {
    this.setState((prevState) => ({
      firstName: '',
      secondName: '',
      birthDate: '',
      phoneNumber: '',
      site: '',
      aboutMe: '',
      technologies: '',
      projects: '',
      errors: {
        ...prevState.errors,
        firstName: false,
        secondName: false,
        birthDate: false,
        phoneNumber: false,
        site: false,
        aboutMe: false,
        technologies: false,
        projects: false,
      },
    }))
  }
  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className={s.Form} onSubmit={this.handleSubmit}>
        <MyInput
          htmlFor='firstName'
          type='text'
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleInputChange}
          content='Имя'
        />
        {this.state.errors.firstName && this.state.firstName === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        {this.state.firstName?.trim()[0] !==
            this.state.firstName?.trim()[0]?.toUpperCase() && (
            <span className={s.span}>
              Первый символ должен находиться в верхнем регистре!
            </span>
          )}
        <MyInput
          htmlFor='secondName'
          type='text'
          name='secondName'
          value={this.state.secondName}
          onChange={this.handleInputChange}
          content='Фамилия'
        />
        {this.state.errors.secondName && this.state.secondName === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        {this.state.secondName?.trim()[0] !==
            this.state.secondName?.trim()[0]?.toUpperCase() && (
            <span className={s.span}>
              Первый символ должен находиться в верхнем регистре!
            </span>
          )}
        <MyInput
          htmlFor='birthDate'
          type='date'
          name='birthDate'
          value={this.state.birthDate}
          onChange={this.handleInputChange}
          content='День Рождения'
        />
        {this.state.errors.birthDate && this.state.birthDate === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        <MyInput
          htmlFor='phoneNumber'
          type='text'
          name='phoneNumber'
          value={this.state.phoneNumber}
          onChange={this.handleInputChange}
          content='Телефон'
          placeholder='7-7777-77-77'
        />
        {this.state.errors.phoneNumber && this.state.phoneNumber === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        {!this.state.isPhoneNumberCorrect && (
          <span className={s.span}>
            Номер должен быть в формате 7-7777-77-77
          </span>
        )}
        <MyInput
          htmlFor='site'
          type='text'
          name='site'
          value={this.state.site}
          onChange={this.handleInputChange}
          content='Сайт'
          placeholder='https://mysite.com'
        />
        {this.state.errors.site && this.state.site === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        {!this.state.isSiteCorrect && this.state.site?.substring(0, 8) !== 'https://' && (
          <span className={s.span}>Ссылка должна начинаться с "https://"</span>
        )}
        <MyTextArea
          htmlFor='aboutMe'
          content='О себе'
          name='aboutMe'
          value={this.state.aboutMe}
          onChange={this.handleInputChange}
        />
        {this.state.errors.aboutMe && this.state.aboutMe === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        <MyTextArea
          htmlFor='technologies'
          content='Стек технологий'
          name='technologies'
          value={this.state.technologies}
          onChange={this.handleInputChange}
        />
        {this.state.errors.technologies && this.state.technologies === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        <MyTextArea
          htmlFor='projects'
          content='Описание последнего проекта'
          name='projects'
          value={this.state.projects}
          onChange={this.handleInputChange}
        />
        {this.state.errors.projects && this.state.projects === '' && (
          <span className={s.span}>Поле пустое. Заполните пожалуйста</span>
        )}
        <div className={s.buttons}>
          <MyButton type='submit' content='Сохранить' />
          <MyButton content='Отмена' onClick={this.onClickCancelHandler} />
        </div>
      </form>
    )
  }
}

import React, {useEffect, useState} from 'react';
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/Input/MyInput'
import MyTextArea from '../UI/textarea/MyTextArea'
import s from './PostForm.module.css'


const PostForm = () => {
    const [postForm, setPostForm] = useState({
        firstName: '',
        secondName: '',
        birthDate: '',
        phoneNumber: '',
        site: '',
        aboutMe: '',
        technologies: '',
        projects: '',
    })
    const [errors, setErrors] = useState({
        isPhoneNumberCorrect: true,
        isSiteCorrect: true,
        emptyInputs: {
            firstName: false,
            secondName: false,
            birthDate: false,
            phoneNumber: false,
            site: false,
            aboutMe: false,
            technologies: false,
            projects: false,
        }
    })
    const [isTheFirstLetter, setIsTheFirstLetter] = useState({
        firstName: true,
        secondName: true,
    })
    const keys = Object.keys(postForm)

    useEffect(() => {
        validate()
    }, [postForm])

    const checkPhoneNumber = () => {
        const delim = '-'
        const numArr = postForm.phoneNumber.split('')
        if (postForm.phoneNumber === '') return
        if (postForm.phoneNumber?.length !== 12 || numArr[1] !== delim || numArr[6] !== delim || numArr[9] !== delim) {
            setErrors((prevState => {
                return {...prevState, isPhoneNumberCorrect: false}
            }))
        }
    }

    const checkSite = () => {
        const substr = postForm.site.substring(0, 8)
        if (postForm.site && substr !== 'https://') {
            setErrors(((prevState) => {
                return {...prevState, isSiteCorrect: false}
            }))
        }
    }

    const checkEmptyInput = (inputName) => {
        if (postForm[inputName]?.trim() === '') {
            setErrors((prevState => {
                return {
                    ...prevState, emptyInputs: {
                        ...prevState.emptyInputs, [inputName]: true,
                    }
                }
            }))
        }
    }

    const checkEmptyInputs = () => {
        const keys = Object.keys(postForm)
        keys.map(key => checkEmptyInput(key))
    }

    const checkTheFirstLetter = () => {
        if(postForm.firstName?.trim()[0] !== postForm.firstName?.trim()[0]?.toUpperCase()) {
            setIsTheFirstLetter(prevState => {
                return {
                    ...prevState, firstName: false
                }
            })
        } else {
            setIsTheFirstLetter(prevState => {
                return {
                    ...prevState, firstName: true
                }
            })
        }
        if(postForm.secondName?.trim()[0] !== postForm.secondName?.trim()[0]?.toUpperCase()) {
            setIsTheFirstLetter(prevState => {
                return {
                    ...prevState, secondName: false
                }
            })
        } else {
            setIsTheFirstLetter(prevState => {
                return {
                    ...prevState, secondName: true
                }
            })
        }
    }

    const validate = () => {
        setErrors({
            isPhoneNumberCorrect: true, isSiteCorrect: true, emptyInputs: {
                firstName: false,
                secondName: false,
                birthDate: false,
                phoneNumber: false,
                site: false,
                aboutMe: false,
                technologies: false,
                projects: false,
            }
        })
        checkPhoneNumber()
        checkSite()
        checkTheFirstLetter()
    }

    const handeInputChange = (e) => {
        setPostForm({...postForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        checkEmptyInputs()
    }

    const onClickCancelHandler = () => {
       setPostForm({
            firstName: '',
            secondName: '',
            birthDate: '',
            phoneNumber: '',
            site: '',
            aboutMe: '',
            technologies: '',
            projects: '',
        })
        setIsTheFirstLetter({
            firstName: true,
            secondName: true,
        })
        setErrors({
            isPhoneNumberCorrect: true,
            isSiteCorrect: true,
            emptyInputs: {
                firstName: false,
                secondName: false,
                birthDate: false,
                phoneNumber: false,
                site: false,
                aboutMe: false,
                technologies: false,
                projects: false,
            }
        })
    }

    return <form className={s.Form} onSubmit={handleSubmit}>
        <MyInput
            htmlFor='firstName'
            type='text'
            name='firstName'
            value={postForm.firstName}
            onChange={handeInputChange}
            content='Имя'
        />
        {errors.emptyInputs.firstName && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        {
            !isTheFirstLetter.firstName &&
            <span className={s.span}>Первый символ должен находиться в верхнем регистре!</span>
        }
        <MyInput
            htmlFor='secondName'
            type='text'
            name='secondName'
            value={postForm.secondName}
            onChange={handeInputChange}
            content='Фамилия'
        />
        {
            !isTheFirstLetter.secondName &&
            <span className={s.span}>Первый символ должен находиться в верхнем регистре!</span>
        }
        {errors.emptyInputs.secondName && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        <MyInput
            htmlFor='birthDate'
            type='date'
            name='birthDate'
            value={postForm.birthDate}
            onChange={handeInputChange}
            content='День Рождения'
        />
        {errors.emptyInputs.birthDate && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        <MyInput
            htmlFor='phoneNumber'
            type='text'
            name='phoneNumber'
            value={postForm.phoneNumber}
            onChange={handeInputChange}
            content='Телефон'
            placeholder='7-7777-77-77'
        />
        {errors.emptyInputs.phoneNumber && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        {!errors.isPhoneNumberCorrect && <span className={s.span}>
            Номер должен быть в формате 7-7777-77-77
          </span>}
        <MyInput
            htmlFor='site'
            type='text'
            name='site'
            value={postForm.site}
            onChange={handeInputChange}
            content='Сайт'
            placeholder='https://mysite.com'
        />
        {errors.emptyInputs.site && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        {!errors.isSiteCorrect && <span className={s.span}>
              Ссылка должна начинаться с "https://"</span>}
        <MyTextArea
            htmlFor='aboutMe'
            content='О себе'
            name='aboutMe'
            value={postForm.aboutMe}
            onChange={handeInputChange}
        />
        {errors.emptyInputs.aboutMe && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        <MyTextArea
            htmlFor='technologies'
            content='Стек технологий'
            name='technologies'
            value={postForm.technologies}
            onChange={handeInputChange}
        />
        {errors.emptyInputs.technologies && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        <MyTextArea
            htmlFor='projects'
            content='Описание последнего проекта'
            name='projects'
            value={postForm.projects}
            onChange={handeInputChange}
        />
        {errors.emptyInputs.projects && <span className={s.span}>Поле пустое. Заполните пожалуйста</span>}
        <div className={s.buttons}>
            <MyButton type='submit' content='Сохранить'/>
            <MyButton type='reset' content='Отмена' onClick={onClickCancelHandler}/>
        </div>
    </form>;
};

export default PostForm;


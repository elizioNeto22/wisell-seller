import React, { useContext, useState, useRef } from 'react'
import classes from './LoginForm.module.css'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

import Logo from '../../assets/images/logo.svg'

const LoginForm = () => {
  const history = useHistory()

  const emailInputRef = useRef('')
  const passwordInputRef = useRef('')

  const authCtx = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault() //evitar pagina de dar refresh

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    // optional: Add validation

    setIsLoading(true)
    let url
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjeEDuWKekrxA3FfmK_jWDI6GYCegwNek'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false)
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!'
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            switch (data.error.message) {
              case 'EMAIL_EXISTS': {
                errorMessage = 'Email já cadastrado!'
                break
              }
              case 'INVALID_PASSWORD': {
                errorMessage = 'Email ou senha inválidos!'
                break
              }
              case 'EMAIL_NOT_FOUND': {
                errorMessage = 'Email inválido!'
                break
              }
              case 'WEAK_PASSWORD : Password should be at least 6 characters': {
                errorMessage = 'Senha deve ter 6 ou mais dígitos!'
                break
              }
              default:
                errorMessage = data.error.message
            }

            throw new Error(errorMessage)
          })
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000)
        authCtx.login(data.idToken, enteredEmail, expirationTime.toISOString())
        history.replace('/')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <section className={classes.auth}>
      <img src={Logo} alt="Wiseller" />
      <hr />
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>ENTRAR</button>}
          {isLoading && <p>Enviando...</p>}
        </div>
      </form>
    </section>
  )
}

export default LoginForm

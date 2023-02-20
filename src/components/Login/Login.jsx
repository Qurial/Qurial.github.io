import React from "react";
import { useForm } from "react-hook-form";
import s from './Login.module.css'

let Login = (props) => {
  const { register, formState: { errors }, handleSubmit, setError, clearErrors, } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => {
    props.postLoginData(data, setError)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>
      <label>
        Email:
        <input {...register('email',
          {
            required: 'Email is required',
            pattern:
            {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Email is invalid',
            }
          })}
          onChange={() => clearErrors('loginInput')}
          aria-invalid={errors.email ? 'true' : 'false'}
          className={errors.email && s.invalidInput}
        />
        {errors.email && <p role='alert'>{errors.email?.message}</p>}
      </label>
      <label>
        Password:
        <input {...register('password',
          {
            required: "password is required",
          })}
          onChange={() => clearErrors('loginInput')}
          aria-invalid={errors.password ? 'true' : 'false'}
          type='password'
          className={errors.password && s.invalidInput}
        />
        {errors.password && <p role='alert'>{errors.password?.message}</p>}
      </label>
      <label>
        <input {...register('rememberMe')} type="checkbox" className={s.rememberMe}/> Remember me
      </label>
      {props.captchaUrl
      ? <div>
        <img src={props.captchaUrl} alt="captcha" />
        <input {...register('captcha',
          {
            required: "captcha is required",
          })}
          onChange={() => clearErrors('loginInput')}
          aria-invalid={errors.captcha ? 'true' : 'false'}
          className={errors.captcha && s.invalidInput}
        />
        </div>
      : null}
      <input type="submit"/>
      {errors.loginInput && <p role='alert'>{errors.loginInput?.message}</p>}
    </form>
  );
}

export default Login;
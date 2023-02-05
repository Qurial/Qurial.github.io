import React from "react";
import { useForm } from "react-hook-form";
import s from './Login.module.css'

let Login = (props) => {
    const { register, formState: { errors }, handleSubmit, } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = data => props.postLoginData(data);
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
                    aria-invalid={errors.password ? 'true' : 'false'}
                    type='password'
                    className={errors.password && s.invalidInput}
                />
                {errors.password && <p role='alert'>{errors.password?.message}</p>}
            </label>
            <input type="submit" />
        </form>
    );
}

export default Login;
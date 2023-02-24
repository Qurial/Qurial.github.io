import React from "react";
import { useForm } from "react-hook-form";
import s from './Settings.module.css'

const Settings = (props) => {
  const { register, formState: { errors }, handleSubmit } = useForm({});
  const onSubmit = data => {
    let finalData = data.image[0]
    console.log(finalData)
    props.updateProfileImage(finalData);
  }
  return (
    <form className={s.Setting} onSubmit={handleSubmit(onSubmit)}>

      <input {...register('image',
        {
          required: true,
        })}
        type='file'
        aria-invalid={errors.message ? 'true' : 'false'}
      />

      <input type="submit" value={'send'} />
    </form>
  )
}

export default Settings;
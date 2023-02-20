import React from "react";
import { useForm } from "react-hook-form";
import Messages from "../Messages";
import s from './NewMessageField.module.css'

const NewMessageField = (props) => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      message: '',
    },
  });
  const onSubmit = data => {
    props.sendMessage(data.message);
    reset()

  }

  return (
    <div className={`${s.column} ${s.dialog}`}>
      
      <Messages messages={props.messages} />
      <form className={s.newMessageField} onSubmit={handleSubmit(onSubmit)}>

        <textarea {...register('message',
          {
            required: true,
            defaultValues: {
              message: '',
            }
          })}
          aria-invalid={errors.message ? 'true' : 'false'}
          />

        <input type="submit" value={'send'}/>
      </form>
    </div>

  )
}

export default NewMessageField;
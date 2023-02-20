import React from "react";
import { useForm } from "react-hook-form";
import s from './EditProfileForm.module.css'

const EditProfileForm = (props) => {
  const { register, formState: { errors }, handleSubmit, } = useForm({
    mode: 'onBlur',
    defaultValues: {
      aboutMe: props.profile.aboutMe,
      contacts: {
        facebook: props.profile.contacts.facebook,
        website: props.profile.contacts.website,
        vk: props.profile.contacts.vk,
        twitter: props.profile.contacts.twitter,
        instagram: props.profile.contacts.instagram,
        youtube: props.profile.contacts.youtube,
        github: props.profile.contacts.github,
        mainLink: props.profile.contacts.mainLink,
      },
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      fullName: props.profile.fullName,
      userId: props.profile.userId,
    }
  });

  const asArray = Object.entries(props.profile.contacts);
  const onSubmit = data => {
    props.updateUserProfile(data)
    props.setEditMode(false)
  }

  // const filterObject = (obj, initialKey) => {
  //   if (obj === undefined) return null
  //   return Object.entries(obj).filter(([key, value]) => initialKey === key).length || null
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>
      <label className={s.lookingForAJob}>
        <input {...register(`lookingForAJob`)} type='checkbox' /> Looking for a job
      </label>
      <label>About me
        <input {...register(`aboutMe`)} />
      </label>
      {asArray.map(([key, value]) => {
        return <label className={s.linkField} key={key}>
          {key}:<br />
          <input {...register(`contacts.${key}`, {
            pattern:
            {
              value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
              message: 'field is incorrect',
            }
          })}
            aria-invalid={errors.contacts?.[key] ? 'true' : 'false'}
            className={errors.contacts?.[key] && s.invalidInput}
          />
          {errors.contacts?.[key] && <p
            role='alert'
            className={s.errorMessage}>field is incorrect</p>}
        </label>
      })}
      <input type="submit" value='Submit' />
    </form>
  );
}

export default EditProfileForm
import React from "react";
import { useForm } from "react-hook-form";
import s from './EditProfileForm.module.css'

const EditProfileForm = (props) => {
  let profile = props.profile;
  let contacts = props.profile.contacts
  const { register, formState: { errors }, handleSubmit, } = useForm({
    mode: 'onBlur',
    defaultValues: {
      aboutMe: profile.aboutMe,
      contacts: {
        facebook: contacts.facebook,
        website: contacts.website,
        vk: contacts.vk,
        twitter: contacts.twitter,
        instagram: contacts.instagram,
        youtube: contacts.youtube,
        github: contacts.github,
        mainLink: contacts.mainLink,
      },
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      fullName: profile.fullName,
      userId: profile.userId,
    }
  });

  const asArray = Object.entries(props.profile.contacts);
  const onSubmit = data => {
    props.updateUserProfile(data)
    props.setEditMode(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.login}>

      <label className={s.lookingForAJob}>
        <input {...register(`lookingForAJob`)} type='checkbox' />
        Looking for a job
      </label>

      <label className={s.field}>
        Looking for a job description:
        <br />
        <textarea {...register(`lookingForAJobDescription`)} type='text' />

      </label>

      <label className={s.field}>
        About me:
        <br />
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
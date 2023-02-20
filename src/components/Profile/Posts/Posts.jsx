import React from "react";
import { useForm } from "react-hook-form";
import Post from "./Post/Post";
import s from './Posts.module.css'

const Posts = (props) => {
  let postsElem = (postData) => postData
    .map(post => <Post
      Image={post.image}
      Name={post.name}
      Text={post.text}
      Likes={post.likes}
      key={post.id}
    />)

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      post: '',
    },
  });
  const onSubmit = data => {
    props.addPost(data.post);
    reset()

  }
  return (
    <>
      <form className={s.Posts} onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('post',
          {
            required: true
          })}
          aria-invalid={errors.post ? 'true' : 'false'}
        />
        <input type="submit" value={'Submit'}/>
      </form>

      {postsElem(props.posts)}
    </>
  )
}

export default Posts;
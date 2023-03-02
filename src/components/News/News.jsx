import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from './News.module.css'
import classNames from "classnames";
import { FaCog, FaSearch } from 'react-icons/fa'
import NewsPanel from "./NewsPanel/NewsPanel";
import Paginator from "../../common/Paginator/Paginator";

const News = (props) => {
  let [isOptionsShown, setIsOptionsShown] = useState(false)
  const { register, formState: { errors }, handleSubmit, clearErrors, setValue } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      query: '',
      safeSearch: props.searchSafetyMode,
      pageNumber: 1
    }
  });
  const onSubmit = data => {
    console.log(data)
    props.printNews(data)
  };

  let pagesCount = Math.ceil(+props?.news?.totalCount / +props?.news?.pageSize)

  let createPageSelectButton = (pageNumber) => {
    props.printNews({ query: props.request.query, pageNumber })
  }

  return (
    <div className={s.news}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.searchField}>
          <div className={s.button} onClick={e => {
            e.preventDefault()
            setIsOptionsShown(!isOptionsShown)
          }}><FaCog /></div>
          {isOptionsShown
            ? <label className={s.options}>
              <input {...register('safeSearch')}
                type='checkbox'
                onClick={e => props.setSearchSafetyMode(e.target.checked)}
              />Safe Mode
            </label>
            : null}
          <input {...register('query',
            { required: 'Please enter your request', })}
            onBlur={() => clearErrors('query')}
            aria-invalid={errors.email ? 'true' : 'false'}
            className={classNames({ [s.emptySearch]: errors.query }, s.searchBar)}
          />
          <button type="submit" className={s.button}><FaSearch /></button>
        </form>
      {props.news?.didUMean ?
        <p className={s.errorMessage}>Maybe you mean:
          <span
            className={s.didUMean}
            onClick={() => {
              setValue('query', props.news.didUMean)
              props.printNews({query: props.news.didUMean, pageNumber: 1})
            }}>
            {props.news.didUMean}
          </span>?
        </p> : null}
      {errors.query && <p role='alert' className={s.errorMessage}>{errors.query?.message}</p>}

      {props.news ? (props.news.value)
        .map(news => <NewsPanel news={news} key={news.id} />) : null}
      <div className={s.paginator}>
        <Paginator
          pagesCount={pagesCount}
          currentPage={+props.match.params.pageNumber}
          onPageChange={createPageSelectButton} />
      </div>
    </div>
  )
}

export default News;
import React from "react";
import s from './News.module.css'

const News = (props) => {

  return (
    <div className={s.News}>

      <button onClick={() => props.getNews('biden')}>get news</button>
      {props.news ? (props.news.value).map(news => {

        let date = new Date(news.datePublished)

        return <a key={news.id} className={s.articlePreview} href={news.url}>
          {news.image.url ? <img src={news.image.url} alt={news.title} /> : null}
          <div className={s.articleInfo}>
            <p className={s.articleTitle}>{news.title}</p>
            <p className={s.articleDescription}>{news.description}</p>
            <p className={s.articleSnippet}>{news.snippet}</p>
            <p className={s.publishDate}>{
              `${String(date
                .getDate()).length < 2 ? '0' : ''}${date
                  .getDate()}.${String(date
                    .getMonth()).length < 2 ? '0' : ''}${date
                      .getMonth() + 1}.${date
                        .getFullYear()}`}</p>
          </div>
        </a>
      }) : null}

    </div>
  )
}

export default News;
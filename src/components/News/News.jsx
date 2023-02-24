import React from "react";
import s from './News.module.css'

const News = (props) => {
  return (
    <div className={s.News}>
      <button onClick={() => props.getNews()}> get news </button>
      {props.news ? (props.news).map(news => {

        let date = new Date(news.publishedAt)

        return <a key={news.title} className={s.articlePreview} href={news.url}>
          {news.urlToImage ? <img src={news.urlToImage} alt={news.title} /> : null}
          <div className={s.articleInfo}>
            <p className={s.articleTitle}>{news.title}</p>
            <p className={s.articleDescription}>{news.description}</p>
            <p className={s.publishDate}>{
              `${date
                .getFullYear()}.${String(date
                  .getMonth()).length < 2 ? '0' : ''}${date
                    .getMonth() + 1}.${String(date
                      .getDate()).length < 2 ? '0' : ''}${date
                        .getDate() + 1}`}</p>
          </div>
        </a>
      }) : null}

    </div>
  )
}

export default News;
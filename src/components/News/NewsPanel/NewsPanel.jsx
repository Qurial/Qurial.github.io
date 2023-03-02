import React from "react";
import s from './NewsPanel.module.css'


const NewsPanel = ({ news }) => {

  let date = new Date(news.datePublished)

  return (
    <a className={s.articlePreview} href={news.url}>
      {news.image.url ? <img src={news.image.url} alt={news.title} onError={(event) => event.target.style.display = 'none'}
      /> : null}
      <div className={s.articleInfo}>
        <p className={s.articleTitle}>{news.title}</p>
        <p className={s.articleDescription}>{news.description}</p>
        <p dangerouslySetInnerHTML={{ __html: news.snippet }} className={s.articleSnippet}></p>
        <p className={s.publishDate}>{
          `${String(date
            .getDate()).length < 2 ? '0' : ''}${date
              .getDate()}.${String(date
                .getMonth()).length < 2 ? '0' : ''}${date
                  .getMonth() + 1}.${date
                    .getFullYear()}`}</p>
      </div>
    </a>
  )
}

export default NewsPanel
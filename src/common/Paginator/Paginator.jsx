import React from "react"
import s from './Paginator.module.css'


const Paginator = ({pagesCount, onPageChange, currentPage}) => {

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    pages.map(p => {
      if ((Math.abs(p - currentPage) < 5)) {
        return <div
          key={p}
          className={`${(currentPage === p) && s.selected} ${s.pageSelector}`}
          onClick={(e) => onPageChange(p)}>{p}</div>
      } else if ((Math.abs(p - currentPage) === 5)) {
        return <div
          key={p}
          className={s.dots}
          >{'...'}</div>
      } else if (p === pagesCount || p === 1) {
        return <div
          key={p}
          className={s.pageSelector}
          onClick={(e) => onPageChange(p)}>{p}</div>
      } return null;
    })
  )
}

export default Paginator
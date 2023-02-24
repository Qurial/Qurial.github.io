import React from "react";
import s from './Friends.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import UserPanel from "./UserPanel/UserPanel";

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.friends}>

      {props.isFetching ? <Preloader /> : null}
      <Paginator
        pages={pages}
        pagesCount={pagesCount}
        currentPage={props.currentPage}
        onPageChange={props.onPageChange} />
      {props.friends.map(u => <UserPanel {...u} {...props} key={u.id} />)}

    </div>
  )
}
export default Friends;
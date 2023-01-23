import React from "react";
import s from './Friends.module.css'

const Friends = (props) => {
    debugger;
    if (props.friends.length === 0) {
        props.setUsers([
            {
                id: '1',
                followed: true,
                avatar: 'https://t4.ftcdn.net/jpg/01/29/43/85/360_F_129438556_1ugKA7Fk1EiR7uar9ZGaQ3wYfaWSM25E.jpg',
                name: 'Maria',
                status: "Hello everyone!",
                location: {
                    country: 'Belarus',
                    city: 'Minsk',
                },
            },
            {
                id: '2',
                followed: false,
                avatar: 'https://img.freepik.com/free-photo/portrait-smiling-attractive-redhead-young-woman-with-long-wavy-hair_295783-487.jpg?w=2000',
                name: 'Angela',
                status: "Knock Knock",
                location: {
                    country: 'Belarus',
                    city: 'Borisov',
                },
            },
            {
                id: '3',
                followed: true,
                avatar: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
                name: 'John',
                status: "Who want to play Counter Strike?",
                location: {
                    country: 'Belarus',
                    city: 'Paris',
                },
            }
        ])
    }
    console.log('jopa');
    return (
        <div className={s.Friends}>
            {props.friends.map(u => <div key={u.id}>
                <img src={u.avatar} className={s.userAvatar} />
                <span>{u.name}</span>
                <span>{u.status}</span>
                <span>{u.location.city}</span>
                <span>{u.location.country}</span>
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>follow</button>}
            </div>)}
        </div>
    )
}

export default Friends;
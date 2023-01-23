const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    friends: [
        // {
        //     id: '1',
        //     followed: true,
        //     avatar: 'https://t4.ftcdn.net/jpg/01/29/43/85/360_F_129438556_1ugKA7Fk1EiR7uar9ZGaQ3wYfaWSM25E.jpg',
        //     name: 'Maria',
        //     status: "Hello everyone!",
        //     location: {
        //         country: 'Belarus',
        //         city: 'Minsk',
        //     },
        // },
        // {
        //     id: '2',
        //     followed: false,
        //     avatar: 'https://img.freepik.com/free-photo/portrait-smiling-attractive-redhead-young-woman-with-long-wavy-hair_295783-487.jpg?w=2000',
        //     name: 'Angela',
        //     status: "Knock Knock",
        //     location: {
        //         country: 'Belarus',
        //         city: 'Borisov',
        //     },
        // },
        // {
        //     id: '3',
        //     followed: true,
        //     avatar: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
        //     name: 'John',
        //     status: "Who want to play Counter Strike?",
        //     location: {
        //         country: 'Belarus',
        //         city: 'Paris',
        //     },
        // }
    ],
};

const FriendsReducer = (state = initialState, action) => {

    let follow = (userID) => {
        return {
            ...state,
            friends: state.friends.map(u => {
                if (userID == u.id) {
                    return {
                        ...u,
                        followed: true,
                    }
                }
                return u;
            })
        }
    }
    let unfollow = (userID) => {
        return {
            ...state,
            friends: state.friends.map(u => {
                if (userID == u.id) {
                    return {
                        ...u,
                        followed: false,
                    }
                }
                return u;
            })
        }
    }
    let setUsers = (users) => {
        debugger;
        return { ...state, friends: [...users], }
    }

    switch (action.type) {
        case FOLLOW:
            return follow(action.userID);
        case UNFOLLOW:
            return unfollow(action.userID);
        case SET_USERS:
            return setUsers(action.users);
        default:
            return state;
    }
}

export const followActionCreator = (userID) =>
    ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) =>
    ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) =>
    ({ type: SET_USERS, users });


export default FriendsReducer;
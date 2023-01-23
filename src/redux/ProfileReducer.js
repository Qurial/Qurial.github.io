const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {
            image: 'http://www.culturaeculture.it/wp-content/uploads/2014/05/Michael-Jackson-ai-tempi-di-Bad.jpg',
            name: 'Michael',
            text: "Hee! Hee!",
            likes: "46321",
        },
        {
            image: 'https://t4.ftcdn.net/jpg/01/29/43/85/360_F_129438556_1ugKA7Fk1EiR7uar9ZGaQ3wYfaWSM25E.jpg',
            name: 'Maria',
            text: "Hi! Usually nothing, it's not a real social network, and we are not even real people",
            likes: "6",
        },
        {
            image: 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg',
            name: 'Andrew',
            text: "Hi! I am new here, what are you usually doing here?",
            likes: "2",
        },
    ],
    newPostText: '',
};

const ProfileReducer = (state = initialState, action) => {

    let addPost = () => {
        if (state.newPostText) {
            return {
                ...state,
                newPostText: '',
                postData: [{
                    image: 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg',
                    name: 'Andrew',
                    text: state.newPostText,
                    likes: "0",
                },
                ...state.postData]
            }
        }
    }
    let updateNewPostText = (newText) => {
        return {
            ...state,
            newPostText: newText
        }
    }
    switch (action.type) {
        case ADD_POST:
            return addPost();
        case UPDATE_NEW_POST_TEXT:
            return updateNewPostText(action.newText);
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default ProfileReducer;
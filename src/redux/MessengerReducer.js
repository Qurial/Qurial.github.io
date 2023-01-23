const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            name: 'Maria', id: '1',
            avatar: 'https://t4.ftcdn.net/jpg/01/29/43/85/360_F_129438556_1ugKA7Fk1EiR7uar9ZGaQ3wYfaWSM25E.jpg'
        },
        {
            name: 'Michael', id: '2',
            avatar: 'http://www.culturaeculture.it/wp-content/uploads/2014/05/Michael-Jackson-ai-tempi-di-Bad.jpg'
        },
        {
            name: 'John', id: '3',
            avatar: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
        },
        {
            name: 'Angela', id: '4',
            avatar: 'https://img.freepik.com/free-photo/portrait-smiling-attractive-redhead-young-woman-with-long-wavy-hair_295783-487.jpg?w=2000'
        },],
    messages: [
        { message: 'hey, how are you?', direction: "in", id: '1', },
        { message: 'yo', direction: "in", id: '2', },
        { message: 'are you here?', direction: "in", id: '3', },
        { message: 'hi, I am fine, and you?', direction: "out", id: '4', },
        { message: 'and dont spam plz', direction: "out", id: '5', },
    ],
    newMessageText: ''


};

const MessengerReducer = (state = initialState, action) => {
    let sendMessage = () => {
        if (state.newMessageText) {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {
                    message: state.newMessageText,
                    direction: "out",
                    id: '5',
                }],
            }
        }
        return state;
    }
    let updateNewMessageText = (newText) => {
        return {
            ...state,
            newMessageText: newText
        }
    }

    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage();
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(action.newText);
        default:
            return state;
    }
}

export const sendMessageActionCreator = () =>
    ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default MessengerReducer;
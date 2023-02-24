const SEND_MESSAGE = 'SEND_MESSAGE';

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
    { message: 'В данный момент связь чата с сервером не реализована', direction: "in", id: '1', },
    { message: 'Поэтому он ещё не функционирует, в полной мере', direction: "in", id: '2', },
    { message: 'Однако его UI уже работает', direction: "in", id: '3', },
  ],
  newMessageText: ''


};

const MessengerReducer = (state = initialState, action) => {
  let sendMessage = (messageText) => {
    return {
      ...state,
      newMessageText: '',
      messages: [...state.messages, {
        message: messageText,
        direction: "out",
        id: '5',
      }],
    }
  }

  switch (action.type) {
    case SEND_MESSAGE:
      return sendMessage(action.messageText);
    default:
      return state;
  }
}

export const sendMessage = (messageText) =>
  ({ type: SEND_MESSAGE, messageText });

export default MessengerReducer;
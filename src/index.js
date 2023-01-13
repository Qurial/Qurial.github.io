import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

let dialogs = [
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
  },
];

let messages = [
  { message: 'hey, how are you?', direction: "in", id: '1', },
  { message: 'yo', direction: "in", id: '2', },
  { message: 'are you here?', direction: "in", id: '3', },
  { message: 'hi, I am fine, and you?', direction: "out", id: '4', },
  { message: 'and dont spam plz', direction: "out", id: '5', },
];

let postData = [
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
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
